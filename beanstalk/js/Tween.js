var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
// Tween.js - http://github.com/sole/tween.js
var TWEEN=TWEEN||function(){var a,e,d,b=[];this.add=function(h){b.push(h)};this.remove=function(h){a=b.indexOf(h);a!==-1&&b.splice(a,1)};this.update=function(){a=0;e=b.length;for(d=(new Date).getTime();a<e;)if(b[a].update(d))a++;else{b.splice(a,1);e--}};return this}();
TWEEN.Tween=function(a){var e={},d={},b={},h=1E3,m=0,i=null,n=TWEEN.Easing.Linear.EaseNone,j=null,k=null,l=null;this.to=function(c,f){if(f!==null)h=f;for(var g in c)if(a[g]!==null)b[g]=c[g];return this};this.start=function(){TWEEN.add(this);i=(new Date).getTime()+m;for(var c in b)if(a[c]!==null){e[c]=a[c];d[c]=b[c]-a[c]}return this};this.stop=function(){TWEEN.remove(this);return this};this.delay=function(c){m=c;return this};this.easing=function(c){n=c;return this};this.chain=function(c){j=c};this.onUpdate=
function(c){k=c;return this};this.onComplete=function(c){l=c;return this};this.update=function(c){var f,g;if(c<i)return true;c=(c-i)/h;c=c>1?1:c;g=n(c);for(f in d)a[f]=e[f]+d[f]*g;k!==null&&k.call(a,g);if(c==1){l!==null&&l.call(a);j!==null&&j.start();return false}return true}};TWEEN.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};TWEEN.Easing.Linear.EaseNone=function(a){return a};
TWEEN.Easing.Quadratic.EaseIn=function(a){return a*a};TWEEN.Easing.Quadratic.EaseOut=function(a){return-a*(a-2)};TWEEN.Easing.Quadratic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a;return-0.5*(--a*(a-2)-1)};TWEEN.Easing.Cubic.EaseIn=function(a){return a*a*a};TWEEN.Easing.Cubic.EaseOut=function(a){return--a*a*a+1};TWEEN.Easing.Cubic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a;return 0.5*((a-=2)*a*a+2)};TWEEN.Easing.Quartic.EaseIn=function(a){return a*a*a*a};
TWEEN.Easing.Quartic.EaseOut=function(a){return-(--a*a*a*a-1)};TWEEN.Easing.Quartic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a;return-0.5*((a-=2)*a*a*a-2)};TWEEN.Easing.Quintic.EaseIn=function(a){return a*a*a*a*a};TWEEN.Easing.Quintic.EaseOut=function(a){return(a-=1)*a*a*a*a+1};TWEEN.Easing.Quintic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a*a;return 0.5*((a-=2)*a*a*a*a+2)};TWEEN.Easing.Sinusoidal.EaseIn=function(a){return-Math.cos(a*Math.PI/2)+1};
TWEEN.Easing.Sinusoidal.EaseOut=function(a){return Math.sin(a*Math.PI/2)};TWEEN.Easing.Sinusoidal.EaseInOut=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};TWEEN.Easing.Exponential.EaseIn=function(a){return a==0?0:Math.pow(2,10*(a-1))};TWEEN.Easing.Exponential.EaseOut=function(a){return a==1?1:-Math.pow(2,-10*a)+1};TWEEN.Easing.Exponential.EaseInOut=function(a){if(a==0)return 0;if(a==1)return 1;if((a*=2)<1)return 0.5*Math.pow(2,10*(a-1));return 0.5*(-Math.pow(2,-10*(a-1))+2)};
TWEEN.Easing.Circular.EaseIn=function(a){return-(Math.sqrt(1-a*a)-1)};TWEEN.Easing.Circular.EaseOut=function(a){return Math.sqrt(1- --a*a)};TWEEN.Easing.Circular.EaseInOut=function(a){if((a/=0.5)<1)return-0.5*(Math.sqrt(1-a*a)-1);return 0.5*(Math.sqrt(1-(a-=2)*a)+1)};TWEEN.Easing.Elastic.EaseIn=function(a){var e,d=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);if(!d||d<1){d=1;e=b/4}else e=b/(2*Math.PI)*Math.asin(1/d);return-(d*Math.pow(2,10*(a-=1))*Math.sin((a-e)*2*Math.PI/b))};
TWEEN.Easing.Elastic.EaseOut=function(a){var e,d=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);if(!d||d<1){d=1;e=b/4}else e=b/(2*Math.PI)*Math.asin(1/d);return d*Math.pow(2,-10*a)*Math.sin((a-e)*2*Math.PI/b)+1};
TWEEN.Easing.Elastic.EaseInOut=function(a){var e,d=0.1,b=0.4;if(a==0)return 0;if(a==1)return 1;b||(b=0.3);if(!d||d<1){d=1;e=b/4}else e=b/(2*Math.PI)*Math.asin(1/d);if((a*=2)<1)return-0.5*d*Math.pow(2,10*(a-=1))*Math.sin((a-e)*2*Math.PI/b);return d*Math.pow(2,-10*(a-=1))*Math.sin((a-e)*2*Math.PI/b)*0.5+1};TWEEN.Easing.Back.EaseIn=function(a){return a*a*(2.70158*a-1.70158)};TWEEN.Easing.Back.EaseOut=function(a){return(a-=1)*a*(2.70158*a+1.70158)+1};
TWEEN.Easing.Back.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*(3.5949095*a-2.5949095);return 0.5*((a-=2)*a*(3.5949095*a+2.5949095)+2)};TWEEN.Easing.Bounce.EaseIn=function(a){return 1-TWEEN.Easing.Bounce.EaseOut(1-a)};TWEEN.Easing.Bounce.EaseOut=function(a){return(a/=1)<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375};
TWEEN.Easing.Bounce.EaseInOut=function(a){if(a<0.5)return TWEEN.Easing.Bounce.EaseIn(a*2)*0.5;return TWEEN.Easing.Bounce.EaseOut(a*2-1)*0.5+0.5};

}
/*
     FILE ARCHIVED ON 03:00:49 Aug 09, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:36:11 Jan 11, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.488
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.008
  cdx.remote: 39.476
  LoadShardBlock: 76.908 (3)
  PetaboxLoader3.datanode: 88.472 (4)
  load_resource: 90.959
  PetaboxLoader3.resolve: 56.819
*/