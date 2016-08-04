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
    function NonDataWidget( container, options ) {
        NonDataWidget.base.constructor.call( this, container, options );
    }
    extend( NonDataWidget, Widget );
    Widget.nonDataWidget = NonDataWidget;
} );