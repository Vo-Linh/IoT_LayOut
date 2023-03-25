$(function () {
  "use strict";
  // ==============================================================
  // Our Visitor
  // ==============================================================

  var chart = c3.generate({
    bindto: "#visitor",
    data: {
      columns: [
        ["Other", 30],
        ["Air", 50],
        ["Fan", 20],
        ["Tivi", 10],
      ],

      type: "donut",
      onclick: function (d, i) {
        console.log("onclick", d, i);
      },
      onmouseover: function (d, i) {
        console.log("onmouseover", d, i);
      },
      onmouseout: function (d, i) {
        console.log("onmouseout", d, i);
      },
    },
    donut: {
      label: {
        show: false,
      },
      title: "Energy",
      width: 20,
    },

    legend: {
      hide: true,
    },
    color: {
      pattern: ["#eceff1", "#24d2b5", "#6772e5", "#20aee3"],
    },
  });

  // ==============================================================
  // power chart
  // ==============================================================
  Morris.Area({
    element: "power-chart",
    data: [
      {
        period: "2011",
        Light: 50,
        Air: 80,
        Tivi: 20,
      },
      {
        period: "2012",
        Light: 130,
        Air: 100,
        Tivi: 80,
      },
      {
        period: "2013",
        Light: 80,
        Air: 60,
        Tivi: 70,
      },
      {
        period: "2014",
        Light: 70,
        Air: 200,
        Tivi: 140,
      },
      {
        period: "2015",
        Light: 180,
        Air: 150,
        Tivi: 140,
      },
      {
        period: "2016",
        Light: 105,
        Air: 100,
        Tivi: 80,
      },
      {
        period: "2017",
        Light: 250,
        Air: 150,
        Tivi: 200,
      },
    ],
    xkey: "period",
    ykeys: ["Light", "Air", "Tivi"],
    labels: ["Light", "Air Conditioner", "Tivi"],
    pointSize: 0,
    fillOpacity: 0,
    pointStrokeColors: ["#20aee3", "#24d2b5", "#6772e5"],
    behaveLikeLine: true,
    gridLineColor: "#e0e0e0",
    lineWidth: 3,
    hideHover: "auto",
    lineColors: ["#20aee3", "#24d2b5", "#6772e5"],
    resize: true,
  });
});
