/**
 * 
 */
( function( ctx, fn ) {
    var nj = ctx.nj = ctx.nj || {};
    var util = nj.util = nj.util || {};
    fn( util );
} )( this, function( util ) {
    "use strict";
    function extend( child, parent ) {
        function inherit( proto ) {
            function Fn() {}
            Fn.prototype = proto;
            return new Fn();
        }
        child.prototype = inherit( parent.prototype );
        child.prototype.constructor = child;
        child.base = parent.prototype;
    }
    function pad( d ) {
        return ( d < 10 ) ? '0' + d.toString() : d.toString();
    }
    util.extend = extend;
    util.pad = pad;
} );