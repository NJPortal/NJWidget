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
    Widget = nj.widget;
    
    function Animation() {
        this.mActive = true;
        this.mTime = 1000;
        this.mHeight = 0;
        this.mWidth = 0;
    }
    Animation.prototype.animate = function( chart ) {
        if( this.mActive ) {
        	if( Math.round( this.mHeight ) == chart.mHeight ) {
        		this.mActive = false;
        	}
        	this.mHeight += chart.mHeight / this.mTime;
        	chart.draw();
        	setTimeout( this.animate.bind( this, chart), this.mStep/this.mTime );
        }
        else {
        	
        }
    };
    function Chart( container, options ) {
        this.mCtx = null;
        this.mAnimation = new Animation();
        Chart.base.constructor.call( this, container, options );
    }
    extend( Chart, Widget );
    Chart.prototype.addCanvas = function() {
        var canvas = document.createElement( "canvas" );
        canvas.height = this.mHeight;
        canvas.width = this.mWidth;
        this.mWrapper.appendChild( canvas );
        this.mCtx = canvas.getContext( "2d" );
    };
    
    nj.widget.chart = Chart;
} );