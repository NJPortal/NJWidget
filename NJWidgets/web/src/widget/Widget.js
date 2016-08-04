/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj || {};
    fn( nj );
} )( this, function( nj ) {
    "use strict";
    var 
        pad = nj.util.pad, 
        getMemberDataName = nj.util.getMemberDataName;
    
    function Widget( container, options ) {
        this.mContainer = container;
        this.mOptions = options;
        this.mLeft = 10;
        this.mTop = 10;
        this.mHeight = 300;
        this.mWidth = 500;
        this.mMargin = 5;
        this.mPadding = 5;
        this.mBorderThickness = 1;
        this.mBorderColor = "#000000";
        this.mBorderStyle = "solid";
        this.mWidgetId = null;
        this.mObjectId = Widget.getObjectId(); 
    }
    Widget.prototype.updateOptions = function() {
        var mOptionName, mOptionValue;
        for( var optionName in this.mOptions ) {
            mOptionName = getMemberDataName( optionName );
            mOptionValue = this.mOptions[ optionName ];
            if( this.hasOwnProperty( mOptionName ) 
                    && mOptionValue != undefined 
                    && mOptionValue != ""  ) {
                this[ mOptionName ] = this.mOptions[ optionName ];
            }
        }
    };
    Widget.prototype.addWrapper = function() {
        this.mWrapper = document.createElement( "div" );
        this.mContainer = document.getElementById( this.mContainer );
        this.mWrapper.setAttribute( "class", "nj-widget-wrapper" );
        this.mWrapper.style.position = "absolute";
        this.mWrapper.style.left = this.mLeft + "px";
        this.mWrapper.style.top = this.mTop + "px";
        this.mWrapper.style.height = this.mHeight + "px";
        this.mWrapper.style.width = this.mWidth + "px";
        this.mContainer.appendChild( this.mWrapper );
    };
    Widget.objCnt = 0;
    Widget.getObjectId = function() {
        return "OBJ:" + pad( ++Widget.objCnt );
    };
    nj.widget = Widget;
} );