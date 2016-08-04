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
    function getMemberDataName( optionName ) {
        return "m" + optionName[0].toUpperCase() + optionName.substring(1);
    }
    function pad( d ) {
        return ( d < 10 ) ? '0' + d.toString() : d.toString();
    }
    function newObject( clazz ) {
    	var args = Array.prototype.slice.call( arguments, 1 ),
    	newObject = null;
    	function fn() {
    		fn.prototype.constructor.call( this, args );
    	}
    	try {
    		clazz = eval( clazz );
    		fn.prototype = clazz.prototype;
    		fn.prototype.constructor = clazz;
    		newObject = new fn( arguments );
    	} 
    	catch( error ) {
    		console.error( error );
    	}
    	return newObject;
    }
    util.extend = extend;
    util.pad = pad;
    util.getMemberDataName = getMemberDataName;
    util.newObject = newObject;
} );