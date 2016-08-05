/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    var extend = nj.util.extend,
        Chart = nj.widget.dataWidget.chart;
    
    function Axis() {
        this.mType = null;
        this.mMarginTop = null;
        this.mMarginRight = null;
        this.mMarginBottom = null;
        this.mMarginLeft = null;
        this.mLabel = [];
    }
    
    function AxisX() {
        AxisX.base.constructor.call( this );
    }
    extend( AxisX, Axis );
    AxisX.prototype.draw = function( ctx ) {
        ctx.strokeStyle = "#999";
        ctx.beginPath();
        ctx.moveTo( 50.5, 50.5 );
        ctx.lineTo( 50.5, 250 );
        ctx.stroke();
    }
    
    function AxisY() {
        AxisX.base.constructor.call( this );
    }
    extend( AxisY, Axis );
    AxisY.prototype.draw = function( ctx ) {
        ctx.strokeStyle = "#999";
        ctx.beginPath();
        ctx.moveTo( 50.5, 250.5 );
        ctx.lineTo( 450, 250.5 );
        ctx.stroke();
    }
    
    function AxisChart( container, options ) {
        this.mAxisX = new AxisX();
        this.mAxisY = new AxisY();
        AxisChart.base.constructor.call( this, container, options );
    }
    extend( AxisChart, Chart );
    
    Chart.axisChart = AxisChart;
} );