




    var Asia = []
    var Americas = []
    var Africa = []
    var Europe = []
    var Oceania = []

    var AsiaTotal = 0
    var AfricaTotal = 0
    var AmericasTotal = 0
    var EuropeTotal = 0
    var OceaniaTotal = 0

    $.ajax({
        type: "GET",
        url: "https://restcountries.eu/rest/v2/region/Asia",
        dataType: "json",
        success: function (data) {
            // console.log(data)
            
             for (var i = 0; i < data.length; i++) {
            
            AsiaTotal += parseInt(data[i].population) 
            Asia.push({ name: data[i].name, value: data[i].population  });
             }
             console.log(Asia)

            }
        })

        $.ajax({
            type: "GET",
            url: "https://restcountries.eu/rest/v2/region/Africa",
            dataType: "json",
            success: function (data) {
                // console.log(data)
                
                 for (var i = 0; i < data.length; i++) {
                
                AfricaTotal += parseInt(data[i].population) 
                Africa.push({ name: data[i].name, value: data[i].population  });
                 }
                 console.log(Africa)
    
                }
            })

            $.ajax({
                type: "GET",
                url: "https://restcountries.eu/rest/v2/region/Americas",
                dataType: "json",
                success: function (data) {
                    // console.log(data)
                    
                     for (var i = 0; i < data.length; i++) {

                    AmericasTotal += parseInt(data[i].population) 
                    Americas.push({ name: data[i].name, value: data[i].population  });
                     }
                     console.log(Americas)
        
                    }
                })


    $.ajax({
        type: "GET",
        url: "https://restcountries.eu/rest/v2/region/europe",
        dataType: "json",
        success: function (data) {
            // console.log(data)
            
             for (var i = 0; i < data.length; i++) {

            EuropeTotal += parseInt(data[i].population) 
            Europe.push({ name: data[i].name, value: data[i].population});
             }
             console.log(Europe)

            }
        })

    $.ajax({
        type: "GET",
        url: "https://restcountries.eu/rest/v2/region/oceania",
        dataType: "json",
        success: function (data) {
            // console.log(data)

            for (var i = 0; i < data.length; i++) {

                OceaniaTotal += parseInt(data[i].population)
                Oceania.push({ name: data[i].name, value: data[i].population  });
            }
            console.log(Oceania)

        }
    })


    

 
    $(document).ajaxStop(function(){
        var WorldTotal = AsiaTotal + AfricaTotal + AmericasTotal + EuropeTotal + OceaniaTotal
        console.log(WorldTotal)

            
    
     

    anychart.onDocumentReady(function () {
     

    
 

   // create data
var data = [
  
    {name:    "World" , value: WorldTotal, custom_field: "info 1", normal: {fill: "#F3947E"}, children:  [
      {name:   "Africa", value: AfricaTotal, custom_field: "info 2", normal: {fill: "#660066"}, children: Africa
       },
       {name:   "Americas", value: AmericasTotal, custom_field: "info 5", normal: {fill: "#ee4035"},children: Americas
      }, 
      {name:   "Asia", value: AsiaTotal, custom_field: "info 3", normal: {fill: "#f37736" }, children: Asia
      },
      {name:   "Europe", value: EuropeTotal, custom_field: "info 4", normal: {fill: "#0392cf"}, children: Europe
        },
      {name:   "Oceania", value: OceaniaTotal, custom_field: "info 6", normal: {fill: "#7bc043"}, children: Oceania
  
      }
    ]}
  ];
 
     // create a chart and set the data
     var chart = anychart.sunburst(data, "as-tree");

     // set the calculation mode
     chart.calculationMode("parent-dependent");
 
 
     // set the container id
     chart.container("container");
 
     // initiate drawing the chart
     chart.draw();

      // configure the visual settings of the chart
      chart.hovered().fill("#96a6a6", 0.4);
      chart.selected().fill("#96a6a6", 0.6);
      chart.selected().hatchFill("forward-diagonal", "#96a6a6", 0.5, 12);
      chart.normal().stroke("#000000", 0);
      chart.hovered().stroke("#96a6a6", 2);
      chart.selected().stroke("#96a6a6", 4);
     
      // configure labels
chart.labels().format("{%name} \n\ {%Value}{thousandsSeparator: }");

// configure the labels of leaves
chart.leaves().labels().format("{%name} \n\ {%Value}{thousandsSeparator: }");

      // configure tooltips
      chart.tooltip().format("{%name} \n\ {%Value}{thousandsSeparator: }");
      
      
})

})