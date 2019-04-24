
var series2000 = []; var dataset2000 = {}
var series2001 = []; var dataset2001 = {}
var series2002 = []; var dataset2002 = {}
var series2003 = []; var dataset2003 = {}
var series2004 = []; var dataset2004 = {}
var series2005 = []; var dataset2005 = {}
var series2006 = []; var dataset2006 = {}
var series2007 = []; var dataset2007 = {}
var series2008 = []; var dataset2008 = {}
var series2009 = []; var dataset2009 = {}
var series2010 = []; var dataset2010 = {}
var series2011 = []; var dataset2011 = {}
var series2012 = []; var dataset2012 = {}

$.ajax({

    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2000&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2000.push([(data[1][i].countryiso3code), Math.round((data[1][i].value) * 100) / 100])
        }
        series2000.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2000[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({

    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2001&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2001.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2001.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2001[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({



    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2002&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2002.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2002.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2002[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({


    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2003&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2003.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2003.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2003[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({


    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2004&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2004.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2004.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2004[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({


    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2005&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2005.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2005.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2005[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({



    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2006&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2006.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2006.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2006[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({


    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2007&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2007.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2007.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2007[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({


    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2008&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2002.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2008.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2008[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({


    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2009&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2009.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2009.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2009[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({


    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2010&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2010.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2010.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2010[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({


    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2011&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2011.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2011.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2011[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

})
$.ajax({


    url: "https://api.worldbank.org/v2/countries/all/indicators/EN.ATM.CO2E.PC?format=json&date=2012&per_page=32000",
    type: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var arrayLength = data[1].length;
        for (var i = 0; i < data[1].length; i++) {
            series2012.push([(data[1][i].countryiso3code), Math.round(data[1][i].value)])
        }
        series2012.forEach(function (item) { //
            // item example value ["USA", 70]
            var iso = item[0],
                value = item[1];
            dataset2012[iso] = { numberOfThings: value, fillColor: getColour(value) };
        });
    }

});


function getColour(value) {
    return value > 18 ? '#000033' :
        value > 15 ? '#000099' :
            value > 12 ? '#0000cc' :
                value > 9 ? '#0000ff' :
                    value > 6 ? '#4d4dff' :
                        value > 3 ? '#8080ff' :
                            value > 1 ? '#e6e6ff' :
                                '#ffffff';
}


// fill dataset in appropriate format
series2000.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2000[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2001.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2001[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2002.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2002[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2003.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2003[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2004.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2004[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2005.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2005[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2006.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2006[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2007.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2007[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2008.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2008[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2009.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2009[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2010.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2010[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2011.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2011[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

// fill dataset in appropriate format
series2012.forEach(function (item) { //
    // item example value ["USA", 70]
    var iso = item[0],
        value = item[1];
    dataset2012[iso] = { numberOfThings: value, fillColor: getColour(value) };
});

$(document).ajaxStop(function () {

    var map = new Datamap({
        element: document.getElementById('container1'),
        responsive: false,
        projection: 'mercator',
        // countries not listed in dataset will be painted with this color
        fills: {
            '> 18': '#000033',
            ' > 15': '#000099',
            ' > 12 ': '#0000cc',
            ' > 9': '#0000ff',
            ' > 6': '#4d4dff',
            ' > 3': '#8080ff',
            ' > 1': "#e6e6ff",
            defaultFill: '#ffffff'
        },
        data: dataset2001,
        geographyConfig: {
            borderColor: '#DEDEDE',
            highlightBorderWidth: 2,
            // don't change colour on mouse hover
            highlightFillColor: function (geo) {
                return geo['fillColor'] || '#F5F5F5';
            },
            // only change border
            highlightBorderColor: '#bada55',
            // show desired information in tooltip
            popupTemplate: function (geo, data) {
                // don't show tooltip if country not present in dataset
                if (!data) { return; }
                // tooltip content
                return ['<div class="hoverinfo">',
                    '<strong>', geo.properties.name, '</strong>',
                    '<br>CO2 emissions (metric tons per capita): <strong>', data.numberOfThings, '</strong>',
                    '</div>'].join('');
            }

        }
    });


    //add a map legend using the 'legend' plugin
    map.legend();



    var inputValue = null;
    var time = ["2001", "2002", "2003", "2004", "2005", "2006", "2007", "2009", "2010", "2011", "2012"];

    d3.select("#timeslide").on("input", function () {
        update(+this.value);
    });

    function update(value) {
        document.getElementById("range").innerHTML = time[value];
        inputValue = time[value];
        d3.selectAll("path")
            .style("fill", timeMatch);
    }

    function timeMatch() {

        if (inputValue == "2001") {
            map.updateChoropleth(dataset2001, { reset: true })
        } else if (inputValue == "2002") {
            map.updateChoropleth(dataset2002, { reset: true })
        } else if (inputValue == "2003") {
            map.updateChoropleth(dataset2003, { reset: true })
        } else if (inputValue == "2004") {
            map.updateChoropleth(dataset2004, { reset: true })
        } else if (inputValue == "2005") {
            map.updateChoropleth(dataset2005, { reset: true })
        } else if (inputValue == "2006") {
            map.updateChoropleth(dataset2006, { reset: true })
        } else if (inputValue == "2007") {
            map.updateChoropleth(dataset2007, { reset: true })
        } else if (inputValue == "2008") {
            map.updateChoropleth(dataset2008, { reset: true })
        } else if (inputValue == "2009") {
            map.updateChoropleth(dataset2009, { reset: true })
        } else if (inputValue == "2010") {
            map.updateChoropleth(dataset2010, { reset: true })
        } else if (inputValue == "2011") {
            map.updateChoropleth(dataset2011, { reset: true })
        } else if (inputValue == "2012") {
            map.updateChoropleth(dataset2012, { reset: true })
            //add a map legend using the 'legend' plugin
        };
    }

    // Keep a reference to the d3 zoom behavior
    var zoom = d3.behavior.zoom();
    var currentZoom = null;
    // Reset d3.event.translate and d3.event.scale
    function resetZoom() {
        zoom.scale(1);
        zoom.translate([0, 0]);
    }
    var zoomInOpts = {
        scaleFactor: 2,
        center: {
            lat: 45,
            lng: -90
        },
        transition: {
            duration: 1000
        },
        onZoomComplete: function (zoomData) {
            // zoomData = {
            //   translate: { x, y },
            //   scale: <number>
            // }
            currentZoom = zoomData;
            resetZoom();
        }
    };
    var zoomOutOpts = {
        scaleFactor: 0.5,
        center: {
            lat: 40,
            lng: -90
        },
        transition: {
            duration: 1000
        },
        onZoomComplete: function (zoomData) {
            currentZoom = zoomData;
            resetZoom();
        }
    };

    map.svg.call(zoom.on("zoom", redraw)); // on mousewheel
    function transformStr(x, y, scale) {
        return "translate(" + [x, y] + ")scale(" + scale + ")";
    }
    function redraw() {
        var translateX = d3.event.translate[0];
        var translateY = d3.event.translate[1];
        var scale = d3.event.scale;
        if (currentZoom) {
            scale *= currentZoom.scale;
            translateX += currentZoom.translate.x
            translateY += currentZoom.translate.y;
        }
        map.svg.selectAll("g")
            .attr("transform", transformStr(translateX, translateY, scale))
            ;
    }

})
