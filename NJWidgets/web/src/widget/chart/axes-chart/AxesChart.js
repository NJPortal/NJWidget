/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    var extend = nj.util.extend,
        Chart = nj.widget.chart;
    
    function AxesChart( container, options ) {
        AxesChart.base.constructor.call( this, container, options );
    }
    extend( AxesChart, Chart );
    
    nj.widget.chart.axesChart = AxesChart;
} );