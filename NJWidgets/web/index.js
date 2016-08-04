/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    var ColumnChart = nj.widget.dataWidget.chart.axisChart.columnChart;
    var options = {
        widgetId: "XXXX-XXXXX-XXXXX-XXXXX-XXXX-XXXXX-XXXXX-XXXXX",
        bgColor: "#DDDDDD",
        margin: 5,
        borderThickness: 1,
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
    chart.render();
} );