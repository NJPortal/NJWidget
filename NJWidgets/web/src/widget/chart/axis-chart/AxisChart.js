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
    
    function Axis() {
        
    }
    
    function AxisX() {
        AxisX.base.constructor.call( this );
    }
    extend( AxisX, Axis );
    
    function AxisY() {
        AxisX.base.constructor.call( this );
    }
    extend( AxisY, Axis );
    
    function AxisChart( container, options ) {
        this.mAxisX = new AxisX();
        this.mAxisY = new AxisY();
        AxisChart.base.constructor.call( this, container, options );
    }
    extend( AxisChart, Chart );
    
    nj.widget.chart.axisChart = AxisChart;
} );