/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    var extend = nj.util.extend,
        AxisChart = nj.widget.chart.axisChart;
    
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
    };
    ColumnChart.prototype.render = function() {
        this.init();
        this.mAnimation.animate( this );
    };
    nj.widget.chart.axisChart.columnChart = ColumnChart;
} );