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
        x = x - 0.5;
        y = y - 0.5;
//        this.mCtx.rotate( 180 * Math.PI / 180 );
        this.mCtx.fillStyle = fillStyle;
        this.mCtx.strokeStyle = strokeStyle;
        this.mCtx.beginPath();
        this.mCtx.rect( x, y, width, height );
        this.mCtx.stroke();
        this.mCtx.restore();
        //this.mCtx.fill();
    };
    ColumnChart.prototype.cleanCanvas = function() {
    	
        this.mCtx.fillStyle = "#ffffff";
        this.mCtx.fillRect( 0, 0, this.mWidth, this.mHeight );
        this.mCtx.beginPath();
        this.mCtx.rect( this.mBorderThickness / 2, this.mBorderThickness / 2, this.mChartWidth, this.mChartHeight );
        this.mCtx.strokeStyle = "#000000";
        this.mCtx.stroke();
//        this.mCtx.restore();
    };
    ColumnChart.prototype.draw = function() {
        var dataPoint,
        columnWidth = 50, columnHeight, colCnt = 4, maxValue = 0, heightRatio,
        left = this.mMargin;
        
        this.mChartWidth = this.mWidth - this.mBorderThickness;
        this.mChartHeight = this.mHeight - this.mBorderThickness;
        
        columnWidth = ( this.mChartWidth - colCnt * this.mMargin - 100 - this.mMargin ) / colCnt - 0.5;  
        
        left += 50;
        
        
        
        this.cleanCanvas();
        this.mAxisX.draw( this.mCtx );
        this.mAxisY.draw( this.mCtx );
        
        for( var i = 0; i < this.mData.length; i++ ) {
            for( var j = 0; j < this.mData[ i ].dataPoints.length; j++ ) {
                if( maxValue < this.mData[ i ].dataPoints[ j ] ) {
                	maxValue = this.mData[ i ].dataPoints[ j ];
                }
            }
        }
        heightRatio = ( this.mChartHeight - 110 ) / maxValue;
        for( var i = 0; i < this.mData.length; i++ ) {
            for( var j = 0; j < this.mData[ i ].dataPoints.length; j++ ) {
                dataPoint = this.mData[ i ].dataPoints[ j ];
                columnHeight = heightRatio * dataPoint;
                this.drawColumn( left, 60, columnWidth, columnHeight, "#ff0000", "#dddddd" );
                left += columnWidth + this.mMargin;
            }
        }
        this.mCtx.rotate( 90 * Math.PI / 180 );
    };
    ColumnChart.prototype.render = function() {
        this.init();
        this.mAnimation.animate( this );
    };
    AxisChart.columnChart = ColumnChart;
} );