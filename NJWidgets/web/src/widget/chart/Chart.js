/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    var extend = nj.util.extend,
        Widget = nj.widget;
    
    function Animation( chart ) {
        this.mChart = chart;
        this.mCurrentDataPoints = [];
        this.mOldDataPoints = [];
        this.mNewDataPoints = [];
        this.mAnimating = false;
        this.mAnimationSteps = 10;
        this.mAnimationInterval = 100;
    }
    Animation.prototype.animate = function() {
        var delta, done = true; 
        this.mAnimating = true;
        for( var i = 0; i < this.mNewDataPoints; i++ ) {
            delta = ( this.mNewDataPoints[ i ] - this.mOldDataPoints[ i ] ) / this.mAnimationSteps;
            this.mCurrentDataPoints[ i ] += delta;
            if( delta ) {
                done = false;
            }
        }
        if( done ) {
            this.mAnimating = false;
        }
        else {
            this.mChart.draw();
            setTimeout( this.animate, this.animationInterval / this.animationSteps );
        }
    };
    Animation.prototype.updateDataPoints = function( newDataPoints ) {
        if( this.mCurrentDataPoints.length !== newDataPoints.length ) {
            this.mCurrentDataPoints = newDataPoints;
            this.mChart.draw();
        }
        else {
            this.mOldDataPoints = this.mCurrentDataPoints;
            this.mNewDataPoints = newDataPoints
            if( !this.mAnimating ) {
                this.animate();
            }
        }
    };
    
    function Chart( container, options ) {
        this.mCtx = null;
        this.mAnimation = new Animation( this );
        Chart.base.constructor.call( this, container, options );
    }
    extend( Chart, Widget );
    Chart.prototype.addCanvas = function() {
        var canvas = document.createElement( "canvas" );
        canvas.height = this.mHeight;
        canvas.width = this.mWidth;
        this.mWrapper.appendChild( canvas );
        this.mCtx = canvas.getContext( "2d" );
    }
    
    nj.widget.chart = Chart;
} );