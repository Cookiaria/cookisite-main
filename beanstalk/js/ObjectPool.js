var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*
 Simple Javascript Object Pool
 Copyright 2005 Joshua Eichorn

 This library is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.
  
 This library is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.
  
 You should have received a copy of the GNU Lesser General Public
 License along with this library; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
*/

/**
 * A simple object pool written to be used with JPSpan
 * 
 * Automatically grows as needed
 * 
 * @author Joshua Eichorn <josh@bluga.net>
 * @copyright Joshua Eichorn 2005
 * @license lgpl http://www.gnu.org/copyleft/lesser.html
 */
function ObjectPool() {
	this.pool = new Array();
	this.avail = new Array();
}

/**
 * Should be overridden, creates a new object and returns it
 */
ObjectPool.prototype.createObject = function() {
	return new Object();
}

/**
 * Grabs a new object from the pool
 */
ObjectPool.prototype.getObject = function() {
	// see if we have any objects in the avail array
	if (this.avail.length == 0) {
		var o = this.createObject();
		o.poolId = this.pool.length;
		this.pool.push(o);
		this.avail.push(o.poolId);
	}

	var poolId = this.avail.pop();
	//alert('objectPool.getObject poolId: '+poolId);
	return this.pool[poolId];
}

/**
 * returns an object to the pool
 */
ObjectPool.prototype.returnObject = function(poolId) {
	this.avail.push(poolId);
}

}
/*
     FILE ARCHIVED ON 02:57:57 Aug 09, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:36:11 Jan 11, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.451
  exclusion.robots: 0.014
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 5.028
  LoadShardBlock: 435.129 (3)
  PetaboxLoader3.datanode: 344.687 (4)
  PetaboxLoader3.resolve: 156.991 (2)
  load_resource: 73.514
*/