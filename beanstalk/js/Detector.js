var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

Detector = {

	canvas : !! window.CanvasRenderingContext2D,
	webgl : ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
	workers : !! window.Worker,
	fileapi : window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage : function () {

		var domElement = document.createElement( 'div' );

		domElement.style.fontFamily = 'monospace';
		domElement.style.fontSize = '13px';
		domElement.style.textAlign = 'center';
		domElement.style.background = '#eee';
		domElement.style.color = '#000';
		domElement.style.padding = '1em';
		domElement.style.width = '475px';
		domElement.style.margin = '5em auto 0';

		if ( ! this.webgl ) {

			domElement.innerHTML = window.WebGLRenderingContext ? [
				'Sorry, your graphics card doesn\'t support <a href="https://web.archive.org/web/20160809025844/http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>'
			].join( '\n' ) : [
				'Sorry, your browser doesn\'t support <a href="https://web.archive.org/web/20160809025844/http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a><br/>',
				'Please try with',
				'<a href="https://web.archive.org/web/20160809025844/http://www.google.com/chrome">Chrome</a>, ',
				'<a href="https://web.archive.org/web/20160809025844/http://www.mozilla.com/en-US/firefox/new/">Firefox 4</a> or',
				'<a href="https://web.archive.org/web/20160809025844/http://nightly.webkit.org/">Webkit Nightly (Mac)</a>'
			].join( '\n' );

		}

		return domElement;

	},

	addGetWebGLMessage : function ( parameters ) {

		var parent, id, domElement;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		domElement = Detector.getWebGLErrorMessage();
		domElement.id = id;

		parent.appendChild( domElement );

	}

};

}
/*
     FILE ARCHIVED ON 02:58:44 Aug 09, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:41:17 Jan 11, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.196
  exclusion.robots: 0.048
  exclusion.robots.policy: 0.037
  esindex: 0.014
  cdx.remote: 11.847
  LoadShardBlock: 526.599 (3)
  PetaboxLoader3.datanode: 196.054 (4)
  PetaboxLoader3.resolve: 57.315 (2)
  load_resource: 174.918
*/