/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    debugger;
    var ColumnChart = nj.widget.chart.axesChart.columnChart;
    var chart = new ColumnChart( "chart", {
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
    } );
    chart.mMargin = 1;
    chart.render();
} );