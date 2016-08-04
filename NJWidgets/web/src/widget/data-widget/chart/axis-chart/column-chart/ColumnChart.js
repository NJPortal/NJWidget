/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    var extend = nj.util.extend,
        AxisChart = nj.widget.dataWidget.chart.axisChart;
    
    function ColumnChart( container, options ) {
        ColumnChart.base.constructor.call( this, container, options );
    }
    extend( ColumnChart, AxisChart );
    ColumnChart.prototype.init = function() {
        this.updateOptions();
        this.addWrapper();
        this.addCanvas();
    };
    ColumnChart.prototype.draw = function() {
        var dataPoint;
        for( var i = 0; i < this.mData.length; i++ ) {
            for( var j = 0; j < this.mData[ i ].dataPoints.length; j++ ) {
                dataPoint = this.mData[ i ].dataPoints[ j ];
            }
        }
        
        this.mChartWidth = this.mWidth - this.mBorderThickness;
        this.mChartHeight = this.mHeight - this.mBorderThickness;
        
        this.mCtx.fillStyle = "#000000";
        this.mCtx.fillRect( 0, 0, this.mWidth, this.mHeight );
        this.mCtx.fillStyle = "#ffffff";
        this.mCtx.fillRect( this.mBorderThickness / 2, this.mBorderThickness / 2, this.mChartWidth, this.mChartHeight );
        this.mCtx.beginPath();
        this.mCtx.rect( 20.5, 20.5, 100, 100 );
        this.mCtx.strokeStyle = "#000000";
        this.mCtx.stroke();
    };
    ColumnChart.prototype.render = function() {
        this.init();
        this.mAnimation.animate( this );
    };
    AxisChart.columnChart = ColumnChart;
} );