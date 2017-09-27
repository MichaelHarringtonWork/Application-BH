// var $circle = $('.rocket-gauge svg #bar');
// var radius = $circle.attr("r");
// var circumference = Math.PI * (radius * 2);
// var percentComplete = Number($('.rocket-gauge').data('completion'));
//
// //svg.append("g").attr("class", "#circular-gauge").call(rocketgauge);
//
// console.log("% : "+percentComplete);
//
// var pct = (100 - percentComplete) / 100 * circumference;
// $(".rocketgauge-text").html(percentComplete);
// //$circle.css({ strokeDashoffset: pct });
//
// $circle.animate({strokeDashoffset: pct});
//
// var $nlcircle = $('.nlcircular-gauge svg #nlbar');
// var nlradius = $nlcircle.attr("r");
// var nlcircumference = Math.PI * (nlradius * 2);
// var nlpercentComplete = Number($('.nlcircular-gauge').data('completion'));
//
// //svg.append("g").attr("class", "#circular-gauge").call(rocketgauge);
//
// console.log("% : "+nlpercentComplete);
//
// var pct = (134 - nlpercentComplete) / 134 * circumference;
// $(".nlgauge-text").html(nlpercentComplete);
// //$circle.css({ strokeDashoffset: pct });
//
// $nlcircle.animate({strokeDashoffset: pct});
//
// var $ajcircle = $('.ajcircular-gauge svg #ajbar');
// var ajradius = $ajcircle.attr("r");
// var ajcircumference = Math.PI * (ajradius * 2);
// var ajpercentComplete = Number($('.ajcircular-gauge').data('completion'));
//
// //svg.append("g").attr("class", "#circular-gauge").call(rocketgauge);
//
// console.log("% : "+ajpercentComplete);
//
// var pct = (134 - percentComplete) / 134 * circumference;
// $(".ajgauge-text").html(ajpercentComplete);
// $ajcircle.css({ strokeDashoffset: pct });
//
// $ajcircle.animate({strokeDashoffset: pct});
//

// var ajgaugeOptions = {
//
//     chart: {
//         type: 'solidgauge'
//     },
//
//     title: null,
//
//     pane: {
//         center: ['40%', '30%'],
//         size: '30%',
//         startAngle: 270,
//         endAngle: 360,
//         background: {
//             backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#fff',
//             innerRadius: '85%',
//             outerRadius: '75%',
//             shape: 'arc'
//         }
//     },
//
//     tooltip: {
//         enabled: false
//     },
//
//     // the value axis
//     yAxis: {
//         stops: [
//             [0, '#ff33cc'],
//         ],
//         lineWidth: 0,
//         minorTickInterval: null,
//         tickAmount: 0,
//         title: {
//             y: -70
//         },
//         labels: {
//             y: 16
//         }
//     },
//
//     plotOptions: {
//         solidgauge: {
//             dataLabels: {
//                 y: 5,
//                 borderWidth: 0,
//                 useHTML: true
//             }
//         }
//     }
// };
//
// // The speed gauge
// var chartAj = Highcharts.chart('ajgauge', Highcharts.merge(ajgaugeOptions, {
//     yAxis: {
//         min: 0,
//         max: 100,
//         title: {
//             text: false
//         }
//     },
//
//     credits: {
//         enabled: false
//     },
//
//     exporting: { enabled: false },
//
//     series: [{
//         name: 'Speed',
//         data: [80],
//         dataLabels: {
//             format: '<div class="ajdiv"><span id="ajtext" >{y} AJ</span>'
//         },
//
//     }]
//
// }));
//
// var nlgaugeOptions = {
//
//     chart: {
//         type: 'solidgauge'
//     },
//
//     title: null,
//
//     pane: {
//         center: ['40%', '30%'],
//         size: '30%',
//         startAngle: 0,
//         endAngle: 270,
//         background: {
//             backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#fff',
//             innerRadius: '85%',
//             outerRadius: '75%',
//             shape: 'arc'
//         }
//     },
//
//     tooltip: {
//         enabled: false
//     },
//
//     // the value axis
//     yAxis: {
//         stops: [
//             [0, '#00ccff'],
//         ],
//         lineWidth: 0,
//         minorTickInterval: null,
//         tickAmount: 0,
//         title: {
//             y: -70
//         },
//         labels: {
//             y: 16
//         }
//     },
//
//     plotOptions: {
//         solidgauge: {
//             dataLabels: {
//                 y: 5,
//                 borderWidth: 0,
//                 useHTML: true
//             }
//         }
//     }
// };
//
//
// // The RPM gauge
// var chartNl = Highcharts.chart('nlgauge', Highcharts.merge(nlgaugeOptions, {
//     yAxis: {
//         min: 0,
//         max: 100,
//         title: {
//             text: false
//         }
//     },
//
//     credits: {
//         enabled: false
//     },
//
//     exporting: { enabled: false },
//
//     series: [{
//         name: 'Speed',
//         data: [80],
//         dataLabels: {
//             format: '<div class="nldiv"><span id="nltext" >{y} NL</span>'
//         },
//
//     }]
//
// }));
//
// var machgaugeOptions = {
//
//     chart: {
//         type: 'solidgauge'
//     },
//
//     title: null,
//
//     pane: {
//         center: ['40%', '30%'],
//         size: '30%',
//         startAngle: 0,
//         endAngle: 360,
//         background: {
//             backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#fff',
//             innerRadius: '85%',
//             outerRadius: '75%',
//             shape: 'arc'
//         }
//     },
//
//     tooltip: {
//         enabled: false
//     },
//
//     // the value axis
//     yAxis: {
//         stops: [
//             [0, '#ff33cc'],
//         ],
//         lineWidth: 0,
//         minorTickInterval: null,
//         tickAmount: 0,
//         title: {
//             y: -70
//         },
//         labels: {
//             y: 16
//         }
//     },
//
//     plotOptions: {
//         solidgauge: {
//             dataLabels: {
//                 y: 5,
//                 borderWidth: 0,
//                 useHTML: true
//             }
//         }
//     }
// };
//
// // The speed gauge
// var chartMach = Highcharts.chart('machgauge', Highcharts.merge(machgaugeOptions, {
//     yAxis: {
//         min: 0,
//         max: 100,
//         title: {
//             text: false
//         }
//     },
//
//     credits: {
//         enabled: false
//     },
//
//     exporting: { enabled: false },
//
//     series: [{
//         name: 'Speed',
//         data: [80],
//         dataLabels: {
//             format: '<div class="machdiv"><span id="machno" >{y}</span><br/>' + '<span id="machtext" >MACH NO.</span></div>'
//         },
//
//     }]
//
// }));
//
// var gaugeOptions = {
//
//     chart: {
//         type: 'solidgauge'
//     },
//
//     title: null,
//
//     pane: {
//         center: ['50%', '50%'],
//         size: '30%',
//         startAngle: 0,
//         endAngle: 360,
//         background: {
//             backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#fff',
//             background: 'disabled',
//             innerRadius: '85%',
//             outerRadius: '75%',
//             shape: 'arc'
//         }
//     },
//
//     tooltip: {
//         enabled: false
//     },
//
//     // the value axis
//     yAxis: {
//         className: 'rocketaxis',
//         lineWidth: 0,
//         minorTickInterval: null,
//         tickAmount: 0,
//         title: {
//             y: -70
//         },
//         labels: {
//             y: 16
//         }
//     },
//
//     plotOptions: {
//         solidgauge: {
//             dataLabels: {
//                 y: 5,
//                 borderWidth: 0,
//                 useHTML: true
//             }
//         }
//     }
// };
//
// // The speed gauge
// var chartRocket = Highcharts.chart('rocketgauge', Highcharts.merge(gaugeOptions, {
//     yAxis: {
//         min: 0,
//         max: 100,
//         title: {
//             text: false
//         }
//     },
//
//     credits: {
//         enabled: false
//     },
//
// exporting: { enabled: false },
//
//     series: [{
//         name: 'Speed',
//         data: [80],
//         dataLabels: {
//             format: '<div class="rocketdiv"><span id="rocketpercentage" >{y}%</span><br/>' + '<span id="rockettext" >ROCKET</span></div>'
//         },
//
//     }]
//
// }));
//
// // Bring life to the dials
// setInterval(function () {
//     // Speed
//     var point,
//         newVal,
//         inc;
//
//     if (chartRocket) {
//         point = chartSpeed.series[0].points[0];
//         inc = Math.round((Math.random() - 0.5) * 100);
//         newVal = point.y + inc;
//
//         if (newVal < 0 || newVal > 100) {
//             newVal = point.y - inc;
//         }
//
//         point.update(newVal);
//     }
//
//     if (chartMach) {
//             point = chartSpeed.series[0].points[0];
//             inc = Math.round((Math.random() - 0.5) * 100);
//             newVal = point.y + inc;
//
//             if (newVal < 0 || newVal > 100) {
//                 newVal = point.y - inc;
//             }
//
//             point.update(newVal);
//         }
//
//         if (chartAj) {
//                 point = chartSpeed.series[0].points[0];
//                 inc = Math.round((Math.random() - 0.5) * 100);
//                 newVal = point.y + inc;
//
//                 if (newVal < 0 || newVal > 100) {
//                     newVal = point.y - inc;
//                 }
//
//                 point.update(newVal);
//             }
//
//             if (chartNl) {
//                     point = chartSpeed.series[0].points[0];
//                     inc = Math.round((Math.random() - 0.5) * 100);
//                     newVal = point.y + inc;
//
//                     if (newVal < 0 || newVal > 100) {
//                         newVal = point.y - inc;
//                     }
//
//                     point.update(newVal);
//                 }
//
//     // RPM
//     if (chartRpm) {
//         point = chartRpm.series[0].points[0];
//         inc = Math.random() - 0.5;
//         newVal = point.y + inc;
//
//         if (newVal < 0 || newVal > 5) {
//             newVal = point.y - inc;
//         }
//
//         point.update(newVal);
//     }
// }, 2000);


// $(function () {
//
//             var $linearGauge = $("#lineargauge");
//
//             $linearGauge.igLinearGauge({
//                 width: '100%',
//                 height: '80px',
//                 transitionDuration: 500,
//                 ranges: [
//                     {
//                         brush: '#803E01',
//                         name: 'bad',
//                         startValue: 0,
//                         endValue: 5200
//                     },
//                     {
//                         brush: '#BA5A05',
//                         name: 'acceptable',
//                         startValue: 5200,
//                         endValue: 6400
//                     },
//                     {
//                         brush: '#FF7A04',
//                         name: 'good',
//                         startValue: 6400,
//                         endValue: 10000
//                     }
//                 ],
//                 minimumValue: 0,
//                 maximumValue: 10000,
//                 value: 6000,
//                 needleShape:'rectangle',
//                 needleBrush:'orange',
//                 needleOutline:'#803e01',
//                 needleStrokeThickness: 2,
//                 formatLabel: function (evt, ui) {
//                     ui.label += "K";
//                 }
//             });
//
//             var $linearGauge2 = $("#lineargauge2");
//
//             $linearGauge2.igLinearGauge({
//                 width: '100%',
//                 height: '80px',
//                 transitionDuration: 500,
//                 ranges: [
//                     {
//                         brush: '#566509',
//                         name: 'bad',
//                         startValue: 0,
//                         endValue: 3400
//                     },
//                     {
//                         brush: '#7F950C',
//                         name: 'acceptable',
//                         startValue: 3400,
//                         endValue: 4000
//                     },
//                     {
//                         brush: '#AABF31',
//                         name: 'good',
//                         startValue: 4000,
//                         endValue: 10000
//                     }
//                 ],
//                 minimumValue: 0,
//                 maximumValue: 10000,
//                 value: 5000,
//                 needleShape: 'trapezoid',
//                 needleBrush: '#fff7a3',
//                 needleOutline:'#566509',
//                 needleStrokeThickness: 2,
//                 formatLabel: function (evt, ui) {
//                     ui.label += "K";
//                 }
//             });
//
//
//             var $linearGauge3 = $("#lineargauge3");
//
//             $linearGauge3.igLinearGauge({
//                 width: '100%',
//                 height: '80px',
//                 transitionDuration: 500,
//                 ranges: [
//                     {
//                         brush: '#566509',
//                         name: 'bad',
//                         startValue: 0,
//                         endValue: 254
//                     },
//                     {
//                         brush: '#7F950C',
//                         name: 'acceptable',
//                         startValue: 254,
//                         endValue: 300
//                     },
//                     {
//                         brush: '#AABF31',
//                         name: 'good',
//                         startValue: 300,
//                         endValue: 500
//                     }
//                 ],
//                 minimumValue: 0,
//                 maximumValue: 500,
//                 value: 350,
//                 needleShape:'triangle',
//                 needleBrush:'#fff7a3',
//                 needleOutline:'#566509',
//                 needleStrokeThickness: 2,
//                 formatLabel: function (evt, ui) {
//                     ui.label += "K";
//                 }
//             });
//
//
//             var $linearGauge4 = $("#lineargauge4");
//
//             $linearGauge4.igLinearGauge({
//                 width: '100%',
//                 height: '80px',
//                 transitionDuration: 500,
//                 ranges: [
//                     {
//                         brush: '#11364D',
//                         name: 'bad',
//                         startValue: 0,
//                         endValue: 60
//                     },
//                     {
//                         brush: '#164F6D',
//                         name: 'acceptable',
//                         startValue: 60,
//                         endValue: 70
//                     },
//                     {
//                         brush: '#20789F',
//                         name: 'good',
//                         startValue: 70,
//                         endValue: 100
//                     }
//                 ],
//                 minimumValue: 0,
//                 maximumValue: 100,
//                 value: 50,
//                 needleShape:'custom' ,
//                 needleBrush: '#99D4FD',
//                 needleOutline: '#11364D',
//                 needleBreadth: 20,
//                 needleInnerExtent: 0.3,
//                 needleOuterExtent: 0.7,
//                 needleOuterPointExtent: 0.9,
//                 needleInnerPointExtent: 0.3,
//                 needleInnerPointWidth: 0,
//                 needleOuterPointWidth: 0.3,
//                 needleInnerBaseWidth: 0,
//                 needleOuterBaseWidth: 0.07,
//                 formatLabel: function (evt, ui) {
//                     ui.label = ui.value + "%";
//                 }
//             });
//         });

// var frontbraketempgauge = new LinearGauge({
//     renderTo: 'canvas-id',
//     units: "°C",
//     minValue: 0,
//     maxValue: 220,
//     majorTicks: [
//         "0",
//         "20",
//         "40",
//         "60",
//         "80",
//         "100",
//         "120",
//         "140",
//         "160",
//         "180",
//         "200",
//     ],
//     minorTicks: 2,
//     strokeTicks: true,
//     highlights: [
//         {
//             "from": 100,
//             "to": 220,
//             "color": "rgba(200, 50, 50, .75)"
//         }
//     ],
//     colorPlate: "#000",
//     borderShadowWidth: 0,
//     borders: false,
//     needleType: "arrow",
//     needleWidth: 2,
//     animationDuration: 1500,
//     animationRule: "linear",
//     tickSide: "left",
//     numberSide: "left",
//     needleSide: "left",
//     barStrokeWidth: 7,
//     barBeginCircle: false,
//     value: 75
// }).draw();
// //
// var rearbraketempgauge = new LinearGauge({
//     renderTo: 'canvastwo-id',
//     units: "°C",
//     minValue: 0,
//     maxValue: 220,
//     majorTicks: [
//         "0",
//         "20",
//         "40",
//         "60",
//         "80",
//         "100",
//         "120",
//         "140",
//         "160",
//         "180",
//         "200",
//     ],
//     minorTicks: 2,
//     strokeTicks: true,
//     highlights: [
//         {
//             "from": 100,
//             "to": 220,
//             "color": "rgba(200, 50, 50, .75)"
//         }
//     ],
//     colorPlate: "#000",
//     borderShadowWidth: 0,
//     borders: false,
//     needleType: "arrow",
//     needleWidth: 2,
//     animationDuration: 1500,
//     animationRule: "linear",
//     tickSide: "left",
//     numberSide: "left",
//     needleSide: "left",
//     barStrokeWidth: 7,
//     barBeginCircle: false,
//     value: 75
// }).draw();

Highcharts.chart('speedometer', {

        chart: {
            type: 'gauge',
            plotBackgroundColor: '#b3b3b3',
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [
                {
                    className: 'outer-pane',
                    outerRadius: '115%',
                   
        }, {
                    className: 'middle-pane',
                    outerRadius: '105%'
        }, {
                    // default background
        }, {
                    className: 'inner-pane',
                    outerRadius: '105%',
                    innerRadius: '103%'
        }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 3,
            minorTickLength: 8,
            minorTickPosition: 'inside',
            minorTickColor: '#fff',

            tickPixelInterval: 52,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#fff',
            labels: {
                step: 2,
                rotation: 'auto',
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            title: {
                text: "MPH",
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            plotBands: {
                from: 160,
                to: 200,
                className: 'red-band'
            }
        },
        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [{
            data: [80],
            
    }]

    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);
        }
    });

Highcharts.chart('rpm', {

        chart: {
            type: 'gauge',
            plotBackgroundColor: '#b3b3b3',
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [
                {
                    className: 'outer-pane',
                    outerRadius: '115%'
        }, {
                    className: 'rpmmiddle-pane',
                    outerRadius: '112%'
        }, {
                    // default background
        }, {
                    className: 'inner-pane',
                    outerRadius: '105%',
                    innerRadius: '103%'
        }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 13,
            minorTickPosition: 'inside',
            minorTickColor: '#fff',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 13,
            tickColor: '#fff',
            labels: {
                step: 2,
                rotation: 'auto',
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            title: {
                text: "RPM",
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            plotBands: {
                from: 160,
                to: 200,
                className: 'red-band' // red
            }
        },
        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [{
            data: [80],
            tooltip: {
                valueSuffix: 'RPM'
            }
    }]

    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);
        }
    });

Highcharts.chart('fuel', {

        chart: {
            type: 'gauge',
            plotBackgroundColor: '#b3b3b3',
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: false
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [
                {
                    className: 'outer-pane',
                    outerRadius: '115%'
        }, {
                    className: 'rpmmiddle-pane',
                    outerRadius: '112%'
        }, {
                    // default background
        }, {
                    className: 'inner-pane',
                    outerRadius: '105%',
                    innerRadius: '103%'
        }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 13,
            minorTickPosition: 'inside',
            minorTickColor: '#fff',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 13,
            tickColor: '#fff',
            labels: {
                step: 2,
                rotation: 'auto',
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            title: {
                text: "FUEL",
                className: 'fueltitle',
                style: {
                    color: '#fff',
                    font: '11px Trebuchet MS, Verdana, sans-serif'
                }
            },
            plotBands: {
                from: 160,
                to: 200,
                className: 'red-band' // red
            }
        },
        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: [{
            data: [80],
            tooltip: {
                valueSuffix: 'RPM'
            }
    }]

    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);

            }, 3000);
        }
    });


var bar = new ProgressBar.Circle(rocket, {
  color: '#ff33cc',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'easeInOut',
  duration: 7250,
  text: {
    autoStyleContainer: false,
  },
  from: { color: '#ff33cc', width: 7 },
  to: { color: '#ff33cc', width: 7 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('ROCKET');
    } else {
      circle.setText(value + "%" + " ROCKET");               //********************
    }
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '1vw';

bar.animate(1.00);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle(machno, {
  color: '#ff33cc',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'easeInOut',
  duration: 7250,
  text: {
    autoStyleContainer: false,
  },
  from: { color: '#ff33cc', width: 7 },
  to: { color: '#ff33cc', width: 7 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    //var value = Math.round(circle.value() * 100);
    if (true) {
      circle.setText('MACH NO.');
    } else {
      circle.setText(this.MachNo + " MACH NO.");                 //********************
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '1vw';

bar.animate(1.00);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle(nl, {
  color: '#00ccff',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 2,
  easing: 'easeInOut',
  duration: 7250,
  text: {
    autoStyleContainer: false,
  },
  from: { color: '#00ccff', width: 7 },
  to: { color: '#00ccff', width: 7 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    //var value = Math.round(circle.value() * 133);
    if (true) {
      circle.setText('');
    } else {
      circle.setText(this.NL + " NL");                        //********************
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '0.5vw';

bar.animate(0.75);  // Number from 0.0 to 1.0

var bar = new ProgressBar.SemiCircle(aj, {
  strokeWidth: 6,
  color: '#ff33cc',
  trailColor: '#fff',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    alignToBottom: false
  },
  from: {color: '#ff33cc'},
  to: {color: '#ff33cc'},
  // Set default step function for all animate calls
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    //var value = Math.round(bar.value() * 200);
    if (true) {
      bar.setText('AJ');
    } else {
      bar.setText(this._AJ + " AJ");                           //********************
    }

    bar.text.style.color = state.color;
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '0.5vw';

bar.animate(0.5);  // Number from 0.0 to 1.0

 var frontbraketempgauge = new LinearGauge({
     renderTo: 'canvas-id',
     units: "°C",
     minValue: 0,
     maxValue: 220,
     majorTicks: [
         "0",
         "20",
         "40",
         "60",
         "80",
         "100",
         "120",
         "140",
         "160",
         "180",
         "200",
     ],
     minorTicks: 2,
     strokeTicks: true,
     highlights: [
         {
             "from": 100,
             "to": 220,
             "color": "rgba(200, 50, 50, .75)"
         }
     ],
     colorPlate: "#000",
     borderShadowWidth: 0,
     borders: false,
     needleType: "arrow",
     needleWidth: 2,
     animationDuration: 1500,
     animationRule: "linear",
     tickSide: "left",
     numberSide: "left",
     needleSide: "left",
     barStrokeWidth: 7,
     barBeginCircle: false,
     value: 75
 }).draw();
 //
 var rearbraketempgauge = new LinearGauge({
     renderTo: 'canvastwo-id',
     units: "°C",
     minValue: 0,
     maxValue: 220,
     majorTicks: [
         "0",
         "20",
         "40",
         "60",
         "80",
         "100",
         "120",
         "140",
         "160",
         "180",
         "200",
     ],
     minorTicks: 2,
     strokeTicks: true,
     highlights: [
         {
             "from": 100,
             "to": 220,
             "color": "rgba(200, 50, 50, .75)"
         }
     ],
     colorPlate: "#000",
     borderShadowWidth: 0,
     borders: false,
     needleType: "arrow",
     needleWidth: 2,
     animationDuration: 1500,
     animationRule: "linear",
     tickSide: "left",
     numberSide: "left",
     needleSide: "left",
     barStrokeWidth: 7,
     barBeginCircle: false,
     value: 75
 }).draw();

var distancelinearsvg = d3.select(".distancegauge")
                 .append("svg:svg")
                 .attr("width", 125)
                 .attr("height", 675);

         var slider = iopctrl.slider()
                 .width(100)
                 .events(false)
                 .bands([
                     {"domain": [90, 100], "span":[0.05, 0.12] , "class": "fault"},
                     {"domain": [75, 90], "span": [0.05, 0.12] , "class": "warning"},
                     {"domain": [0, 75], "span": [0.05, 0.12] , "class": "ok"}
                 ])
                 .indicator(iopctrl.defaultSliderIndicator)
                 .ease("elastic");
         slider.axis().orient("top")
                 .tickSubdivide(4)
                 .tickSize(12, 8, 10)
                 .scale(d3.scale.linear()
                         .domain([0,100])
                         .range([0, 1150]));

         distancelinearsvg.append("g")
                 .attr("transform", "translate(0, 20)")
                 .attr("class", "distancegauge")
                 .call(slider);

//
// var svg = d3
//   .select(".speedometer")
//   .append("svg:svg")
//   .attr("width", 1000)
//   .attr("height", 500);
//
// var gauge = iopctrl
//   .arcslider()
//   .radius(220)
//   .events(false)
//   .indicator(iopctrl.defaultGaugeIndicator);
//
// gauge
//   .axis()
//   .orient("in")
//   .normalize(true)
//   .ticks(12)
//   .tickSubdivide(4)
//   .tickSize(10, 8, 10)
//   .tickPadding(5)
//   .scale(
//     d3.scale
//       .linear()
//       .domain([0, 250])
//       .range([-3 * Math.PI / 4, 3 * Math.PI / 4])
//   );
//
// svg.append("g").attr("class", "gauge").call(gauge);
//
// var segDisplay = iopctrl
//   .segdisplay()
//   .width(80)
//   .digitCount(6)
//   .negative(false)
//   .decimals(0);
//
// svg
//   .append("g")
//   .attr("class", "segdisplay")
//   .attr("transform", "translate(130, 200)")
//   .call(segDisplay);
//
// segDisplay.value(56749);
// gauge.value(0);
//
// var rpmsvg = d3
//   .select(".rpmgauge")
//   .append("svg:svg")
//   .attr("width", 1000)
//   .attr("height", 500);
//
// var rpmgauge = iopctrl
// .arcslider()
// .radius(212)
// .events(false)
// .indicator(iopctrl.defaultGaugeIndicator);
//
// rpmgauge
// .axis()
// .orient("in")
// .normalize(true)
// .ticks(12)
// .tickSubdivide(4)
// .tickSize(10, 8, 10)
// .tickPadding(5)
// .scale(
//   d3.scale
//     .linear()
//     .domain([0, 10])
//     .range([-2.74 * Math.PI / 2, 2 * Math.PI / 15])
//   );
//
// rpmsvg.append("g").attr("class", ".rpmgauge").call(rpmgauge);
// var segDisplay = iopctrl
//   .segdisplay()
//   .width(80)
//   .digitCount(6)
//   .negative(false)
//   .decimals(0);
//
// rpmsvg
//   .append("g")
//   .attr("class", "segdisplay")
//   .attr("transform", "translate(130, 200)")
//   .call(segDisplay);
//
// segDisplay.value(56749);
// rpmgauge.value(0);
//
// var fuelsvg = d3
//   .select(".fuelgauge")
//   .append("svg:svg")
//   .attr("width", 1000)
//   .attr("height", 500);
//
// var fuelgauge = iopctrl
// .arcslider()
// .radius(118)
// .events(false)
// .indicator(iopctrl.defaultGaugeIndicator);
//
// fuelgauge
// .axis()
// .orient("in")
// .normalize(true)
// .ticks(12)
// .tickSubdivide(4)
// .tickSize(10, 8, 10)
// .tickPadding(5)
// .scale(
//   d3.scale
//     .linear()
//     .domain([0, 10])
//     .range([2.55 * Math.PI / 2, -7 * Math.PI / 25])
//   );
//
// fuelsvg.append("g").attr("class", ".fuelgauge").call(fuelgauge);
// var segDisplay = iopctrl
//   .segdisplay()
//   .width(80)
//   .digitCount(6)
//   .negative(false)
//   .decimals(0);
//
// fuelsvg
//   .append("g")
//   .attr("class", "segdisplay")
//   .attr("transform", "translate(130, 200)")
//   .call(segDisplay);
//
// segDisplay.value(56749);
// fuelgauge.value(0);
//
 