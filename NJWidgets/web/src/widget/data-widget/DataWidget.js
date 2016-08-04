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
    function DataWidget( container, options ) {
        DataWidget.base.constructor.call( this, container, options );
    }
    extend( DataWidget, Widget );
    Widget.dataWidget = DataWidget;
} );