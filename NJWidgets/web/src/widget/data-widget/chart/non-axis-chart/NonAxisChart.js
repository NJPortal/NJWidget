/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    var 
        extend = nj.util.extend,
        Chart = nj.widget.dataWidget.chart;
    function NonAxisChart( container, options ) {
        NonAxisChart.base.constructor.call( this, container, options );
    }
    extend( NonAxisChart, Chart );
    Chart.nonAxisChart = NonAxisChart;
} );