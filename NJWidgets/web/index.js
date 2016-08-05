/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    var ColumnChart = nj.widget.dataWidget.chart.axisChart.columnChart,
    options = {
        widgetId: "XXXX-XXXXX-XXXXX-XXXXX-XXXX-XXXXX-XXXXX-XXXXX",
        bgColor: "#DDDDDD",
        margin: 5,
        borderThickness: 1,
        data: [
            { dataPoints: [ 10, 22, 44, 32 ] }
        ]
    },
    chart = new ColumnChart( "chart", options );
    chart.render();
} );