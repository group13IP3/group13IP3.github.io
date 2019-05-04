
d3.svg.BubbleChart.define("central-click", function (options) { 
  // defining central click function of d3 Bubble Chart 
  // function defined in original code is not appropriate for this use
  var self = this;

  
   
  self.setup = (function (node) {
    var original = self.setup;
    return function (node) {
      var fn = original.apply(this, arguments);
      self.event.on("click", function(node) {
        if (node.selectAll("text.central-click")[0].length === 1) {
          if (node.data()[0].item.preview == null){
          alert("Preview is not available!")
          }
          else  {
        onclick= window.open(node.data()[0].item.preview,'popUpWindow','height=250,width=300,left=10,top=10,,scrollbars=yes,menubar=no'); return false;
        //console.log(node.data()[0].item.preview)
          }
        }
      
      });
      return fn;
    };
  })();

  self.reset = (function (node) {
    var original = self.reset;
    return function (node) {
      var fn = original.apply(this, arguments);
      node.select("text.central-click").remove();
      return fn;
    };
  })();

  self.moveToCentral = (function (node) {
    var original = self.moveToCentral;
    return function (node) {
      var fn = original.apply(this, arguments);
      var transition = self.getTransition().centralNode;
      transition.each("end", function() {
        node.append("text").classed({"central-click": true})
          .attr(options.attr)
          .style(options.style)
          .attr("x", function (d) {return d.cx;})
          .attr("y", function (d) {return d.cy;})
          .text(options.text)
          .style("opacity", 0).transition().duration(self.getOptions().transitDuration / 2).style("opacity", "0.8");
      });
      return fn;
    };
  })();
});

$("bubbleChart").ready(function () {
  // Bubble Chart to be initialized and loaded once the page loads.

  

  var trackList = []
  var items = []
  var popularArtists = ["Taylor Swift", "Ed Sheeran", "Ariana Grande", "Drake", "Beyonce", "Justin Bieber", "Adele", "Kanye West", "Calvin Harris", "Michael Jackson"]



  $.ajax({
    type: "GET",
    url: "https://api.spotify.com/v1/search?q=" + popularArtists[Math.floor(Math.random() * popularArtists.length)] + "&type=artist&type=artist&market=GB&offset=0&limit=5",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Authorization": "Bearer BQCHrRoOvNHNzc8CbLEDPHDI-BhQakkeEwom8j2c1XQUH_wM3LgZpGC7sxEJHLkE64euYRkberVp4F74dZsPbQ0tGg3sCpnhcYxzpm9KKNeIMWNa6yLg4Yt0I9k39q9LlVTttuNuMILxwb4B"
      //Because of way the spotify API authorization works, this TOKEN expires after 1 hour therefore it must be replaced, to get a new code visit 
      // https://developer.spotify.com/console/get-search-item/?q=abba&type=track&market=US&limit=&offset=   and request a new token at the bottom of the page.

    },
    success: function (data) {
      // console.log(data)

      var artistName = "<b>" + data.artists.items[0].name + "</b>"
      var artistID = data.artists.items[0].id

      $(artistName).appendTo("#artistName");

      // console.log(artistID);


      $.ajax({
        type: "GET",
        url: "https://api.spotify.com/v1/artists/" + artistID + "/top-tracks?country=GB",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": "Bearer BQCHrRoOvNHNzc8CbLEDPHDI-BhQakkeEwom8j2c1XQUH_wM3LgZpGC7sxEJHLkE64euYRkberVp4F74dZsPbQ0tGg3sCpnhcYxzpm9KKNeIMWNa6yLg4Yt0I9k39q9LlVTttuNuMILxwb4B"
         //Because of way the spotify API authorization works, this TOKEN expires after 1 hour therefore it must be replaced, to get a new code visit 
      // https://developer.spotify.com/console/get-search-item/?q=abba&type=track&market=US&limit=&offset=   and request a new token at the bottom of the page.
        },
        success: function (data) {
          console.log(data)

          for (var i = 0; i < 10; i++) {

            items.push({ text: data.tracks[i].name, count: data.tracks[i].popularity.toString(), preview: data.tracks[i].preview_url })


          }





          var bubbleChart = new d3.svg.BubbleChart({
            supportResponsive: true,
            //container: => use @default
            size: 600,
            //viewBoxSize: => use @default
            innerRadius: 600 / 3.5,
            //outerRadius: => use @default
            radiusMin: 50,
            //radiusMax: use @default
            //intersectDelta: use @default
            //intersectInc: use @default
            //circleColor: use @default
            data: {
              items
              ,
              eval: function (tr) { return tr.count; },
              classed: function (tr) { return tr.text.split(" ").join(""); },
            },

            plugins: [
              {
                name: "central-click",
                options: {
                  text: "Click to listen to a preview",
                  style: {
                    "font-size": "15px",
                    "font-style": "italic",
                    "font-family": "Source Sans Pro, sans-serif",
                    //"font-weight": "700",
                    "text-anchor": "middle",
                    "fill": "white"
                  },
                  attr: { dy: "65px" },
                }
              }, 
              {
                name: "lines",
                options: {
                  format: [
                    {// Line #0
                      textField: "text",
                      classed: { text: true },
                      style: {
                        "font-size": "17px",
                        "font-family": "Source Sans Pro, sans-serif",
                        "text-anchor": "middle",
                        fill: "black"
                      },
                      attr: {
                        dy: "0px",
                        x: function (d) { return d.cx; },
                        y: function (d) { return d.cy; }
                      }
                    },
                    {// Line #1
                      textField: "count",
                      classed: { count: true },
                      style: {
                        "font-size": "8px",
                        "font-family": "Source Sans Pro, sans-serif",
                        "text-anchor": "middle",
                        fill: "white"
                      },
                      attr: {
                        dy: "20px",
                        x: function (d) { return d.cx; },
                        y: function (d) { return d.cy; }
                      }
                    },
                     
                  ],
                  centralFormat: [
                    {// Line #0
                      style: { "font-size": "30px" },
                      attr: {}
                    },
                    {// Line #1
                      style: { "font-size": "20px" },
                      attr: { dy: "40px" }
                    }
                  ]
                }
              }]
          });





        }

      })
    }
  })

});


function updateData() {
 // clear previous Bubble Chart instance and create a new one based on the users' input

  d3.select('#bubbleChart').html("")
  d3.select('#artistName').html("")
  var x = document.getElementById("myText").value;
  var items = []


  $.ajax({
    type: "GET",
    url: "https://api.spotify.com/v1/search?q=" + x + "&type=artist&type=artist&market=GB&offset=0&limit=5",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Authorization": "Bearer BQCHrRoOvNHNzc8CbLEDPHDI-BhQakkeEwom8j2c1XQUH_wM3LgZpGC7sxEJHLkE64euYRkberVp4F74dZsPbQ0tGg3sCpnhcYxzpm9KKNeIMWNa6yLg4Yt0I9k39q9LlVTttuNuMILxwb4B"
      //Because of way the spotify API authorization works, this TOKEN expires after 1 hour therefore it must be replaced, to get a new code visit 
      // https://developer.spotify.com/console/get-search-item/?q=abba&type=track&market=US&limit=&offset=   and request a new token at the bottom of the page.
    },
    success: function (data) {
      // console.log(data)


      var artistName = "<b>" + data.artists.items[0].name + "</b>"
      var artistID = data.artists.items[0].id

      $(artistName).appendTo("#artistName");


      $.ajax({
        type: "GET",
        url: "https://api.spotify.com/v1/artists/" + artistID + "/top-tracks?country=GB",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": "Bearer BQCHrRoOvNHNzc8CbLEDPHDI-BhQakkeEwom8j2c1XQUH_wM3LgZpGC7sxEJHLkE64euYRkberVp4F74dZsPbQ0tGg3sCpnhcYxzpm9KKNeIMWNa6yLg4Yt0I9k39q9LlVTttuNuMILxwb4B"
          //Because of way the spotify API authorization works, this TOKEN expires after 1 hour therefore it must be replaced, to get a new code visit 
      // https://developer.spotify.com/console/get-search-item/?q=abba&type=track&market=US&limit=&offset=   and request a new token at the bottom of the page.
        },
        success: function (data) {
          // console.log(data)

          for (var i = 0; i < 10; i++) {


            items.push({ text: data.tracks[i].name, count: data.tracks[i].popularity.toString(), preview: data.tracks[i].preview_url })


          }





          var bubbleChart = new d3.svg.BubbleChart({
            supportResponsive: true,
            //container: => use @default
            size: 600,
            //viewBoxSize: => use @default
            innerRadius: 600 / 3.5,
            //outerRadius: => use @default
            radiusMin: 50,
            //radiusMax: use @default
            //intersectDelta: use @default
            //intersectInc: use @default
            //circleColor: use @default
            data: {
              items
              ,
              eval: function (tr) { return tr.count; },
              classed: function (tr) { return tr.text.split(" ").join(""); },
            },

            plugins: [
              {
                name: "central-click",
                options: {
                  text: "Click to listen to a preview",
                  style: {
                    "font-size": "12px",
                    "font-style": "italic",
                    "font-family": "Source Sans Pro, sans-serif",
                    //"font-weight": "700",
                    "text-anchor": "middle",
                    "fill": "black"
                  },
                  attr: { dy: "65px" },
                }
              }, 
              {
                name: "lines",
                options: {
                  format: [
                    {// Line #0
                      textField: "count",
                      classed: { count: true },
                      style: {
                        "font-size": "28px",
                        "font-family": "Source Sans Pro, sans-serif",
                        "text-anchor": "middle",
                        fill: "black"
                      },
                      attr: {
                        dy: "0px",
                        x: function (d) { return d.cx; },
                        y: function (d) { return d.cy; }
                      }
                    },

                    {// Line #1
                      textField: "text",
                      classed: { text: true },
                      style: {
                        "font-size": "7px",
                        "font-family": "Source Sans Pro, sans-serif",
                        "text-anchor": "middle",
                        fill: "white"
                      },
                      attr: {
                        dy: "20px",
                        x: function (d) { return d.cx; },
                        y: function (d) { return d.cy; }
                      }
                    }
                  ],
                  centralFormat: [
                    {// Line #0
                      style: { "font-size": "30px" },
                      attr: {}
                    },
                    {// Line #1
                      style: { "font-size": "20px" },
                      attr: { dy: "40px" }
                    }
                  ]
                }
              }]
          })



        }

      })
    }
  })
}



