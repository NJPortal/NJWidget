/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    var ColumnChart = nj.widget.chart.axisChart.columnChart;
    var options = {
        id: "col-chart-1",
        data: [
            {
                color: "#ff0000",
                dataPoints: [
                    { label: "Mango", y: 10 },
                    { label: "Apple", y: 99 },
                    { label: "Banana", y: 45 },
                ]
            }
        ]
    };
//    var chart = nj.util.newObject( "nj.widget.chart.axesChart.columnChart", "chart", options );
    var chart = new ColumnChart( "chart", options );
    chart.mMargin = 20;
    debugger;
    chart.render();
} );