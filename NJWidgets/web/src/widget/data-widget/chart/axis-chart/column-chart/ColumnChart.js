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
    ColumnChart.prototype.drawColumn = function( x, y, width, height, fillStyle, strokeStyle ) {
        x = /*x % 2 ? x :*/ x - 0.5;
        y = /*y % 2 ? y :*/ y - 0.5;
        this.mCtx.fillStyle = fillStyle;
        this.mCtx.strokeStyle = strokeStyle;
        this.mCtx.rect( x, y, width, height );
        this.mCtx.stroke();
        //this.mCtx.fill();
    };
    ColumnChart.prototype.cleanCanvas = function() {
        this.mCtx.fillStyle = "#ffffff";
        this.mCtx.fillRect( 0, 0, this.mWidth, this.mHeight );
        this.mCtx.beginPath();
        this.mCtx.rect( this.mBorderThickness / 2, this.mBorderThickness / 2, this.mChartWidth, this.mChartHeight );
        this.mCtx.strokeStyle = "#000000";
        this.mCtx.stroke();
    }
    ColumnChart.prototype.draw = function() {
        var dataPoint, columnWidth = 50, x = this.mMargin;
        this.mChartWidth = this.mWidth - this.mBorderThickness;
        this.mChartHeight = this.mHeight - this.mBorderThickness;
        
        
        this.cleanCanvas();
        this.mAxisX.draw( this.mCtx );
        this.mAxisY.draw( this.mCtx );
        for( var i = 0; i < this.mData.length; i++ ) {
            for( var j = 0; j < this.mData[ i ].dataPoints.length; j++ ) {
                dataPoint = this.mData[ i ].dataPoints[ j ];
                this.drawColumn( x + columnWidth, 50, columnWidth, 201, "#ff0000", "#000000" );
                x += columnWidth + this.mMargin;
            }
        }
    };
    ColumnChart.prototype.render = function() {
        this.init();
        this.mAnimation.animate( this );
    };
    AxisChart.columnChart = ColumnChart;
} );