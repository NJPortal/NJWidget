/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    var extend = nj.util.extend,
        AxesChart = nj.widget.chart.axesChart;
    
    function ColumnChart( container, options ) {
        ColumnChart.base.constructor.call( this, container, options );
    }
    extend( ColumnChart, AxesChart );
    ColumnChart.prototype.init = function() {
        this.updateOptions();
        this.addWrapper();
        this.addCanvas();
    };
    ColumnChart.prototype.draw = function() {
        var dataPoints = this.mOptions.data[ 0 ].dataPoints;
        var colCnt = dataPoints.length;
        var border = 2;
        var gAreaX = 0;
        var gAreaY = 0;
        var gAreaHeight = this.mAnimation.mHeight;
        var gAreaWidth = this.mWidth;
        var colWidth, colHeight, ratio, maxColHeight, gredient, largestValue;
        
        this.mCtx.fillStyle = "#ffffff";
        this.mCtx.fillRect( 0, 0, this.mWidth, this.mHeight );
        
        if( true ) {
//            gAreaHeight -= 40;
        }
        
        colWidth = gAreaWidth / colCnt - this.mMargin * 2;
        maxColHeight = gAreaHeight /*- 25*/;
        
        var largestValue = 0;
        for( var i = 0; i < dataPoints.length; i++ ) {
            if( dataPoints[ i ].y > largestValue ) {
                largestValue = dataPoints[ i ].y;
            }
        }
        
        for( var i = 0; i < dataPoints.length; i++ ) {
            if( this.mMaxValue ) {
                ratio = dataPoints[ i ].y / this.mMaxValue;
            }
            else {
                ratio = dataPoints[ i ].y / largestValue;
            }
            
            colHeight = ratio * maxColHeight;
            
            this.mCtx.shadowOffsetX = 2;
            this.mCtx.shadowOffsetY = 2;
            this.mCtx.shadowBlur = 2;
            this.mCtx.shadowColor = "#999999";
            
            this.mCtx.fillStyle = "#333333";
            this.mCtx.fillRect( this.mMargin + i * this.mWidth / colCnt, gAreaHeight - colHeight, colWidth, colHeight );
            
            this.mCtx.shadowOffsetX = 0;
            this.mCtx.shadowOffsetY = 0;
            this.mCtx.shadowBlur = 0;
        }
    };
    ColumnChart.prototype.render = function() {
        this.init();
        this.mAnimation.animate( this );
    };
    nj.widget.chart.axesChart.columnChart = ColumnChart;
} );