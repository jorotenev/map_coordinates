!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r,o,a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};r=L.map("map").setView([42.69793,23.321628],13),L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <createCoordinatesReturn href="http://openstreetmap.org">OpenStreetMap</createCoordinatesReturn> contributors, <createCoordinatesReturn href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</createCoordinatesReturn>, Imagery © <createCoordinatesReturn href="http://mapbox.com">Mapbox</createCoordinatesReturn>',maxZoom:18,id:"mapbox.streets-basic",accessToken:"pk.eyJ1IjoiY2hpcHNhbiIsImEiOiJqa0JwV1pnIn0.mvduWzyRdcHxK_QIOpetFg"}).addTo(r);L.control.sidebar("sidebar").addTo(r);o=new L.FeatureGroup,r.addLayer(o);var i=new L.Control.Draw({edit:{featureGroup:o},draw:{circle:!1,circlemarker:!1,marker:!1,polygon:!1,polyline:!1}});r.addControl(i);L.canvas({padding:.5});function c(e,t,n,r){void 0===n&&(n=300),void 0===r&&(r={});a({color:"red"},r);e.forEach(function(e){L.circle(e,{radius:n},r).addTo(t)})}var s=6371e3;function u(e,t,n){void 0===t&&(t=500);var r=Number(t)/s,o=d(Number(n)),a=d(e.lat),i=d(e.lng),c=Math.sin(a),u=Math.cos(a),l=Math.sin(r),f=Math.cos(r),h=Math.sin(o),g=c*f+u*l*Math.cos(o),m=Math.asin(g),v=h*l*u,b=f-c*g,y=i+Math.atan2(v,b);return{point:L.latLng(p(m),(p(y)+540)%360-180)}}function l(e,t){var n=Math.min.apply(Math,e),r=Math.max.apply(Math,e);return n<=t&&t<=r}function d(e){return e*Math.PI/180}function p(e){return 180*e/Math.PI}var f,h,g,m,v;function b(e,t,n){for(var r=e.getEast(),o=[],a=t;o.push(a),l([t.lng,r],a.lng);)a=u(a,n,f.east).point;return o}function y(e,t){return u(u(e,t/2,f.south).point,t/2,f.east).point}!function(e){e[e.east=90]="east",e[e.west=-90]="west",e[e.north=0]="north",e[e.south=180]="south"}(f||(f={})),function(e){e.northWest="NorthWest"}(h||(h={})),v=(new L.FeatureGroup).addTo(r),$("#radius-size").attr("value",150),g=function(e,t){e.clearLayers();var n=document.getElementById("regenerate-btn");n.onclick=function(e,t){t.clearLayers();var n=Number($("#radius-size").val());console.log(n+"m circle radius");var r=function(e){for(var t=[],n=[],r=e.boundingRectangle.getBounds(),o=Object.freeze(r.getNorthWest()),a=o,i=a,c=1;;c++){var s=b(r,i,e.distance);t.push.apply(t,s);var d=y(i,e.distance);if(!l([r.getNorth(),r.getSouth()],a.lat))break;var p=b(r,d,e.distance);p.pop(),n.push.apply(n,p),i=a=u(o,e.distance*c,f.south).point}return{main:t,fillers:n,combined:t.concat(n)}}({boundingRectangle:e,distance:2*n});c(r.main,t,n),c(r.fillers,t,n,{color:"green"});var o=document.getElementById("download-btn");console.log("Generated "+r.combined.length+" circles "),o.onclick=function(){var e={coordinates:r.combined,circle_radius:n};!function(e,t,n){var r=new Blob([e],{type:n});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(r,t);else{var o=window.document.createElement("a");o.href=window.URL.createObjectURL(r),o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)}}(JSON.stringify(e),"coords_"+e.coordinates.length+"_r"+n+".json","application/json")}}.bind(null,t,e),n.click()}.bind(null,v),m=function(){return v.clearLayers()},r.on("draw:created",function(e){var t=e.layerType,n=e.layer;if("rectangle"!==t)return!0;o.clearLayers(),console.log(t+" drawn");var r=n.getLatLngs()[0];o.addLayer(n),console.log("Boundaries of the area of interest:"),console.log(JSON.stringify(r));var a=L.latLngBounds(r.map(function(e){return[e.lat,e.lng]})),i=L.rectangle(a);g(i)}),r.on("draw:deleted",m)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvX3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwidmFsdWUiLCJuIiwiX19lc01vZHVsZSIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIm1hcCIsImxheWVyRm9yVXNlclJlY3RhbmdsZXMiLCJMIiwic2V0VmlldyIsInRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwibWF4Wm9vbSIsImlkIiwiYWNjZXNzVG9rZW4iLCJhZGRUbyIsImNvbnRyb2wiLCJzaWRlYmFyIiwiRmVhdHVyZUdyb3VwIiwiYWRkTGF5ZXIiLCJkcmF3Q29udHJvbCIsIkNvbnRyb2wiLCJEcmF3IiwiZWRpdCIsImZlYXR1cmVHcm91cCIsImRyYXciLCJjaXJjbGUiLCJjaXJjbGVtYXJrZXIiLCJtYXJrZXIiLCJwb2x5Z29uIiwicG9seWxpbmUiLCJhZGRDb250cm9sIiwiY2FudmFzIiwicGFkZGluZyIsImRyYXdDaXJjbGVzIiwiY29vcmRzIiwibGF5ZXIiLCJjaXJjbGVSYWRpdXMiLCJjaXJjbGVPcHRpb25zIiwiX19hc3NpZ24iLCJjb2xvciIsImZvckVhY2giLCJjb29yZCIsInJhZGl1cyIsIkVBUlRIX1JBRElVUyIsImNhbGN1bGF0ZU5leHRQb2ludCIsImNvb3JkaW5hdGUiLCJkaXN0YW5jZSIsImJlYXJpbmciLCJkZWx0YSIsIk51bWJlciIsInRoZXRhIiwidG9SYWRpYW5zIiwicGhpMSIsImxhdCIsImxhbWJkYTEiLCJsbmciLCJzaW5waGkxIiwiTWF0aCIsInNpbiIsImNvc3BoaTEiLCJjb3MiLCJzaW5kZWx0YSIsImNvc2RlbHRhIiwic2ludGhldGEiLCJzaW5waGkyIiwicGhpMiIsImFzaW4iLCJ5IiwieCIsImxhbWJkYTIiLCJhdGFuMiIsInBvaW50IiwibGF0TG5nIiwidG9EZWdyZWVzIiwiaXNXaXRoaW5Cb3VuZHMiLCJib3VuZHMiLCJudW0iLCJtaW5MYXQiLCJtaW4iLCJhcHBseSIsIm1heExhdCIsIm1heCIsIlBJIiwiQmVhcmluZyIsIlJlY3RhbmdsZVNpZGUiLCJjYWxsYmFja09uUmVjdERyYXduIiwiY2FsbGJhY2tPbkRlbGV0ZSIsImNpcmNsZXNMYXllciIsImNpcmNsZUNvb3Jkc09mUm93IiwiaW5pdGlhbENvb3JkIiwiZWFzdEJvdW5kIiwiZ2V0RWFzdCIsInJlc3VsdCIsImN1cnJlbnRQb3NpdGlvbiIsInB1c2giLCJlYXN0IiwibW92ZVRvU291dGhFYXN0IiwiY3VycmVudFJvd0luaXRpYWwiLCJkaXN0Iiwic291dGgiLCIkIiwiYXR0ciIsImRyYXduUmVjdGFuZ2xlIiwiY2xlYXJMYXllcnMiLCJyZWRyYXdCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25jbGljayIsImJvdW5kaW5nUmVjdGFuZ2xlIiwiY2lyY2xlX3JhZGl1cyIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwiZmlsbGVycyIsInJlY3RCb3VuZHMiLCJnZXRCb3VuZHMiLCJpbml0aWFsUG9pbnQiLCJmcmVlemUiLCJnZXROb3J0aFdlc3QiLCJjdXJyZW50Q29vcmQiLCJyb3ciLCJjdXJyZW50Um93Q2lyY2xlc0Nvb3JkcyIsImZpbGxlckZpcnN0Q29vcmQiLCJnZXROb3J0aCIsImdldFNvdXRoIiwiaGVscGVyUm93Q29vcmRzIiwicG9wIiwibWFpbiIsImNvbWJpbmVkIiwiY29uY2F0IiwiY3JlYXRlQ29vcmRpbmF0ZXMiLCJkb3dubG9hZEJ0biIsImxlbmd0aCIsInRvU2F2ZSIsImNvb3JkaW5hdGVzIiwiZGF0YSIsImZpbGVuYW1lIiwiY29udGVudFR5cGUiLCJibG9iIiwiQmxvYiIsInR5cGUiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwibXNTYXZlQmxvYiIsImVsZW0iLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRvd25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInNhdmVGaWxlIiwiSlNPTiIsInN0cmluZ2lmeSIsImJpbmQiLCJvbiIsImUiLCJsYXllclR5cGUiLCJsYXRsbmdzIiwiZ2V0TGF0TG5ncyIsInJlY3RhbmdsZUJvdW5kcyIsImxhdExuZ0JvdW5kcyIsInJlY3RhbmdsZSJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsS0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxJQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFlBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcsRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQUtBRixFQUFBUSxFQUFBRixFQUdBTixFQUFBUyxFQUFBVixFQUdBQyxFQUFBVSxFQUFBLFNBQUFSLEVBQUFTLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFYLEVBQUFTLElBQ0FHLE9BQUFDLGVBQUFiLEVBQUFTLEdBQ0FLLGNBQUEsRUFDQUMsWUFBQSxFQUNBQyxJQUFBTixLQU1BWixFQUFBbUIsRUFBQSxTQUFBakIsR0FDQVksT0FBQUMsZUFBQWIsRUFBQSxjQUFpRGtCLE9BQUEsS0FJakRwQixFQUFBcUIsRUFBQSxTQUFBbEIsR0FDQSxJQUFBUyxF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LEVBQUVDLFVBQ1QvSCxFQUFROEgsRUFBRTlILE1BQ2QsR0FBYSxjQUFUMEcsRUFDQSxPQUFPLEVBRVh2SSxFQUF1QmlHLGNBQ3ZCUSxRQUFRQyxJQUFJNkIsRUFBTyxVQUNuQixJQUFJc0IsRUFBVWhJLEVBQU1pSSxhQUFhLEdBQ2pDOUosRUFBdUJZLFNBQVNpQixHQUVoQzRFLFFBQVFDLElBQUksdUNBQ1pELFFBQVFDLElBQUk2QyxLQUFLQyxVQUFVSyxJQUczQixJQUFNRSxFQUFrQzlKLEVBQUUrSixhQUFhSCxFQUFROUosSUFBSSxTQUFVb0MsR0FDekUsT0FBUUEsRUFBTVksSUFBS1osRUFBTWMsUUFHdkJxRCxFQUFpQ3JHLEVBQUVnSyxVQUFVRixHQUduRGhGLEVBQW9CdUIsS0FFeEJ2RyxFQUFJMkosR0FBRyxlQUFnQjFFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBsZXQgbWFwO1xuZXhwb3J0IGxldCBsYXllckZvclVzZXJSZWN0YW5nbGVzO1xuZGVjbGFyZSBsZXQgTDtcbi8vIGFkZCB0aGUgbWFwIHRvIHRoZSBwYWdlXG5tYXAgPSBMLm1hcCgnbWFwJykuc2V0VmlldyhbNDIuNjk3OTMwLCAyMy4zMjE2MjhdLCAxMyk7XG5MLnRpbGVMYXllcignaHR0cHM6Ly9hcGkudGlsZXMubWFwYm94LmNvbS92NC97aWR9L3t6fS97eH0ve3l9LnBuZz9hY2Nlc3NfdG9rZW49e2FjY2Vzc1Rva2VufScsIHtcbiAgICBhdHRyaWJ1dGlvbjogJ01hcCBkYXRhICZjb3B5OyA8Y3JlYXRlQ29vcmRpbmF0ZXNSZXR1cm4gaHJlZj1cImh0dHA6Ly9vcGVuc3RyZWV0bWFwLm9yZ1wiPk9wZW5TdHJlZXRNYXA8L2NyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuPiBjb250cmlidXRvcnMsIDxjcmVhdGVDb29yZGluYXRlc1JldHVybiBocmVmPVwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9jcmVhdGVDb29yZGluYXRlc1JldHVybj4sIEltYWdlcnkgwqkgPGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuIGhyZWY9XCJodHRwOi8vbWFwYm94LmNvbVwiPk1hcGJveDwvY3JlYXRlQ29vcmRpbmF0ZXNSZXR1cm4+JyxcbiAgICBtYXhab29tOiAxOCxcbiAgICBpZDogJ21hcGJveC5zdHJlZXRzLWJhc2ljJyxcbiAgICBhY2Nlc3NUb2tlbjogJ3BrLmV5SjFJam9pWTJocGNITmhiaUlzSW1FaU9pSnFhMEp3VjFwbkluMC5tdmR1V3p5UmRjSHhLX1FJT3BldEZnJ1xufSkuYWRkVG8obWFwKTtcblxuXG4vLyB0aGUgY29sbGFwc2libGUgc2lkZWJhciB3aXRoIHJlZHJhdy9kb3dubG9hZCBldGMuIGN1c3RvbSBidXR0b25zXG5sZXQgc2lkZWJhciA9IEwuY29udHJvbC5zaWRlYmFyKCdzaWRlYmFyJykuYWRkVG8obWFwKTtcblxuLy8gd2hlcmUgd2UgZHJhdyByZWN0YW5nbGVzXG5sYXllckZvclVzZXJSZWN0YW5nbGVzID0gbmV3IEwuRmVhdHVyZUdyb3VwKCk7XG5tYXAuYWRkTGF5ZXIobGF5ZXJGb3JVc2VyUmVjdGFuZ2xlcyk7XG4vLyBlbmFibGUgdGhlIHBsdWdpbiBmb3IgZHJhd2luZyBvbiB0aGUgbWFwXG5sZXQgZHJhd0NvbnRyb2wgPSBuZXcgTC5Db250cm9sLkRyYXcoe1xuICAgIGVkaXQ6IHtcbiAgICAgICAgZmVhdHVyZUdyb3VwOiBsYXllckZvclVzZXJSZWN0YW5nbGVzXG4gICAgfSxcbiAgICBkcmF3OiB7XG4gICAgICAgIGNpcmNsZTogZmFsc2UsXG4gICAgICAgIGNpcmNsZW1hcmtlcjogZmFsc2UsXG4gICAgICAgIG1hcmtlcjogZmFsc2UsXG4gICAgICAgIHBvbHlnb246IGZhbHNlLFxuICAgICAgICBwb2x5bGluZTogZmFsc2UsXG4gICAgfVxufSk7XG5tYXAuYWRkQ29udHJvbChkcmF3Q29udHJvbCk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB3aGljaCBjb2xsZWN0cyB3aGF0IHRoZSB1c2VyIGhhcyBkcmF3biBhbmQgcGFzcyBpdCB0byBhIGNhbGxiYWNrXG4gKiBAcGFyYW0geyhyZWN0YW5nbGU6IFJlY3RhbmdsZSkgPT4gYW55fSBjYWxsYmFja09uUmVjdERyYXduXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrT25EZWxldGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZURyYXdpbmcoY2FsbGJhY2tPblJlY3REcmF3bjogKHJlY3RhbmdsZTogTC5SZWN0YW5nbGUpID0+IGFueSwgY2FsbGJhY2tPbkRlbGV0ZTogKCkgPT4gdm9pZCkge1xuICAgIC8vIHRvZG8gaGFuZGxlIFwiZWRpdGVkXCIgdG9vXG4gICAgbWFwLm9uKCdkcmF3OmNyZWF0ZWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgdHlwZSA9IGUubGF5ZXJUeXBlLFxuICAgICAgICAgICAgbGF5ZXIgPSBlLmxheWVyO1xuICAgICAgICBpZiAodHlwZSAhPT0gXCJyZWN0YW5nbGVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBsYXllckZvclVzZXJSZWN0YW5nbGVzLmNsZWFyTGF5ZXJzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGUgKyBcIiBkcmF3blwiKTtcbiAgICAgICAgbGV0IGxhdGxuZ3MgPSBsYXllci5nZXRMYXRMbmdzKClbMF07XG4gICAgICAgIGxheWVyRm9yVXNlclJlY3RhbmdsZXMuYWRkTGF5ZXIobGF5ZXIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm91bmRhcmllcyBvZiB0aGUgYXJlYSBvZiBpbnRlcmVzdDpcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGxhdGxuZ3MpKTtcblxuICAgICAgICAvLyBwcmVwYXJlIHRoZSByZXN1bHQgdG8gYmUgdXNlZCBmb3IgY29uc3RydWN0aW5nIGEgcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RhbmdsZUJvdW5kczogTC5MYXRMbmdCb3VuZHMgPSBMLmxhdExuZ0JvdW5kcyhsYXRsbmdzLm1hcChmdW5jdGlvbiAoY29vcmQpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgICAgIHJldHVybiBbY29vcmQubGF0LCBjb29yZC5sbmddXG4gICAgICAgIH0pKTtcbiAgICAgICAgLy8gbWFrZSB0aGUgcmVjdGFuZ2xlLCB3aGljaCBlbmNvbXBhc3NlcyB0aGUgYXJlYSB3aGljaCB3ZSB3YW50IHRvIGZpbGwgd2l0aCBjaXJjbGVzXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nUmVjdGFuZ2xlOiBMLlJlY3RhbmdsZSA9IEwucmVjdGFuZ2xlKHJlY3RhbmdsZUJvdW5kcyk7XG5cbiAgICAgICAgLy8gcGFzcyB0aGUgcmVjdGFuZ2xlIHRvIHRoZSBjYWxsYmFja1xuICAgICAgICBjYWxsYmFja09uUmVjdERyYXduKGJvdW5kaW5nUmVjdGFuZ2xlKTtcbiAgICB9KTtcbiAgICBtYXAub24oXCJkcmF3OmRlbGV0ZWRcIiwgY2FsbGJhY2tPbkRlbGV0ZSlcblxufVxuXG52YXIgbXlSZW5kZXJlciA9IEwuY2FudmFzKHtwYWRkaW5nOiAwLjV9KTtcblxuLyoqXG4gKiBHaXZlbiBhIGxheWVyLCBjb29yZGluYXRlcyBvZiB0aGUgY2VudGVyIG9mIGNpcmNsZXMgYW5kIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSxcbiAqIGRyYXcgdGhlIGNpcmNsZXMgb24gdGhlIGxheWVyXG4gKiBAcGFyYW0ge0xhdExuZ1tdfSBjb29yZHNcbiAqIEBwYXJhbSB7TGF5ZXJHcm91cH0gbGF5ZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjaXJjbGVSYWRpdXNcbiAqIEBwYXJhbSB7e319IGNpcmNsZU9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDaXJjbGVzKGNvb3JkczogTC5MYXRMbmdbXSwgbGF5ZXI6IEwuTGF5ZXJHcm91cCwgY2lyY2xlUmFkaXVzID0gMzAwLCBjaXJjbGVPcHRpb25zID0ge30pIHtcbiAgICBsZXQgb3B0cyA9IHtcbiAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgIC4uLmNpcmNsZU9wdGlvbnNcbiAgICB9O1xuICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZDogTC5MYXRMbmcpID0+IHtcbiAgICAgICAgTC5jaXJjbGUoY29vcmQsIHtyYWRpdXM6IGNpcmNsZVJhZGl1c30sIGNpcmNsZU9wdGlvbnMpLmFkZFRvKGxheWVyKVxuICAgIH0pXG59XG5cblxuXG4iLCIvKlxuICogIENyZWRpdHM6IGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvbGF0bG9uZy5odG1sXG4gKiAtPiBsYXRsb24tc3BoZXJpY2FsLmpzXG4gKi9cbmRlY2xhcmUgbGV0IEw7XG5jb25zdCBFQVJUSF9SQURJVVMgPSA2MzcxZTM7XG5cbi8qKlxuICogXCJEZXN0aW5hdGlvbiBwb2ludCBnaXZlbiBkaXN0YW5jZSBhbmQgYmVhcmluZyBmcm9tIHN0YXJ0IHBvaW50XCJcbiAqIGkuZS4gZ2l2ZW4gYSBwb2ludCAobGF0LGxuZyksIGRpcmVjdGlvbiBhbmQgZGlzdGFuY2UsIGNhbGN1bGF0ZSB0aGUgZGVzdGluYXRpb24gY29vcmRpbmF0ZXNcbiAqIENyZWRpdHM6IGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvbGF0bG9uZy5odG1sXG4gKlxuICogQHBhcmFtIGNvb3JkaW5hdGUgOiB0aGUgc3RhcnQgcG9pbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkaXN0YW5jZSwgaW4gbWV0cmVzXG4gKiBAcGFyYW0ge251bWJlcn0gYmVhcmluZyAtIGRpcmVjdGlvbiwgaW4gZGVncmVlcyBmcm9tIG5vcnRoIGNsb2Nrd2lzZVxuICogQHJldHVybiB0aGUgbmV3IHBvaW50IGFuZCB0aGUgbmV3IGJlYXJpbmdcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTmV4dFBvaW50KGNvb3JkaW5hdGU6IEwuTGF0TG5nLCBkaXN0YW5jZSA9IDUwMCwgYmVhcmluZyk6IHsgcG9pbnQ6IEwuTGF0TG5nfSB7XG5cbiAgICBsZXQgZGVsdGEgPSBOdW1iZXIoZGlzdGFuY2UpIC8gRUFSVEhfUkFESVVTOyAvLyBhbmd1bGFyIGRpc3RhbmNlIGluIHJhZGlhbnNcbiAgICBsZXQgdGhldGEgPSB0b1JhZGlhbnMoTnVtYmVyKGJlYXJpbmcpKTtcblxuICAgIGxldCBwaGkxID0gdG9SYWRpYW5zKGNvb3JkaW5hdGUubGF0KTtcbiAgICBsZXQgbGFtYmRhMSA9IHRvUmFkaWFucyhjb29yZGluYXRlLmxuZyk7XG5cbiAgICBsZXQgc2lucGhpMSA9IE1hdGguc2luKHBoaTEpLCBjb3NwaGkxID0gTWF0aC5jb3MocGhpMSk7XG4gICAgbGV0IHNpbmRlbHRhID0gTWF0aC5zaW4oZGVsdGEpLCBjb3NkZWx0YSA9IE1hdGguY29zKGRlbHRhKTtcbiAgICBsZXQgc2ludGhldGEgPSBNYXRoLnNpbih0aGV0YSksIGNvc3RoZXRhID0gTWF0aC5jb3ModGhldGEpO1xuXG4gICAgbGV0IHNpbnBoaTIgPSBzaW5waGkxICogY29zZGVsdGEgKyBjb3NwaGkxICogc2luZGVsdGEgKiBjb3N0aGV0YTtcbiAgICBsZXQgcGhpMiA9IE1hdGguYXNpbihzaW5waGkyKTtcbiAgICBsZXQgeSA9IHNpbnRoZXRhICogc2luZGVsdGEgKiBjb3NwaGkxO1xuICAgIGxldCB4ID0gY29zZGVsdGEgLSBzaW5waGkxICogc2lucGhpMjtcbiAgICBsZXQgbGFtYmRhMiA9IGxhbWJkYTEgKyBNYXRoLmF0YW4yKHksIHgpO1xuXG4gICAgY29uc3QgZGVzdGluYXRpb25Qb2ludCA9IEwubGF0TG5nKHRvRGVncmVlcyhwaGkyKSwgKHRvRGVncmVlcyhsYW1iZGEyKSArIDU0MCkgJSAzNjAgLSAxODApOyAvLyBub3JtYWxpc2UgdG8g4oiSMTgwLi4rMTgwwrAsXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwb2ludDogZGVzdGluYXRpb25Qb2ludFxuICAgIH1cbn1cblxuLyoqXG4gKiBgbnVtYCBpcyBhIGxhdGl0dWRlL2xvbmdpdHVkZSBjb29yZGluYXRlIGFuZCBgYm91bmRzYCBpcyBhIGxpbmUuXG4gKiBUaGlzIG1ldGhvZCBjaGVja3MgaWYgYG51bWAgaXMgd2l0aGluIHRoaXMgbGluZS5cbiAqIEUuZy4gd2UgaGF2ZSBhIGxpbmUgdGhhdCBnb2VzIGZyb20gbm9ydGggdG8gc291dGggLSBmcm9tIFtsYXQ6NDAgbG5nOjMwXSB0byBbbGF0OjQwIGxuZzoyMF0gYW5kIHdlIHdhbnQgdG8gY2hlY2sgaWZcbiAqIGxuZzoyNSBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgbGluZS5cbiAqIHdoZW4gdXNpbmcgdGhpcyBtZXRob2QgdGhlIGJvdW5kcyB3b3VsZCBiZSBbMzAsMjBdIGFuZCBudW09MjUuXG4gKlxuICogQHBhcmFtIHtbbnVtYmVyICwgbnVtYmVyXX0gYm91bmRzXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNXaXRoaW5Cb3VuZHMoYm91bmRzOiBbbnVtYmVyLCBudW1iZXJdLCBudW06IG51bWJlcikge1xuICAgIGxldCBtaW5MYXQgPSBNYXRoLm1pbiguLi5ib3VuZHMpLCBtYXhMYXQgPSBNYXRoLm1heCguLi5ib3VuZHMpO1xuICAgIHJldHVybiAobWluTGF0IDw9IG51bSkgJiYgKG51bSA8PSBtYXhMYXQpO1xufVxuXG5mdW5jdGlvbiB0b1JhZGlhbnMobnVtKSB7XG4gICAgcmV0dXJuIG51bSAqIE1hdGguUEkgLyAxODBcbn1cblxuZnVuY3Rpb24gdG9EZWdyZWVzKG51bSkge1xuICAgIHJldHVybiBudW0gKiAxODAgLyBNYXRoLlBJXG59XG5cblxuXG5cbiIsImltcG9ydCB7Y2FsY3VsYXRlTmV4dFBvaW50LCBpc1dpdGhpbkJvdW5kc30gZnJvbSBcIi4vZ2VvX3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0NJUkNMRV9SQURJVVMgPSAxNTA7IC8vIG1ldGVyc1xuZGVjbGFyZSBsZXQgTDtcblxudHlwZSBjcmVhdGVDb29yZGluYXRlc09wdHMgPSB7XG4gICAgYm91bmRpbmdSZWN0YW5nbGU6IEwuUmVjdGFuZ2xlLFxuICAgIGRpc3RhbmNlOiBudW1iZXIsXG59XG50eXBlIGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuID0geyBtYWluOiBMLkxhdExuZ1tdLCBmaWxsZXJzOiBMLkxhdExuZ1tdLCBjb21iaW5lZDogTC5MYXRMbmdbXSB9O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdGhlIGNvcmUgb2YgdGhlIHdob2xlIHJlcG8uXG4gKlxuICogVGhlIGZ1bmN0aW9uIHJlY2VpdmVzIGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuIHJlY3RhbmdsZSBhbmQgd2FudHMgdG8gZmlndXJlIG91dFxuICogdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXJzIG9mIGNpcmNsZXMsIHN1Y2ggdGhhdCB0aGUgY2lyY2xlcyBmaWxsIG91dCB0aGUgd2hvbGUgcmVjdGFuZ2xlLlxuICogV2UgYWxsb3cgZm9yIHRoZSBjaXJjbGVzIHRvIG92ZXJsYXAuXG4gKlxuICogQWxsIGNpcmNsZXMgZGlzY3Vzc2VkIGJlbG93IGhhdmUgdGhlIHNhbWUgcmFkaXVzIChSID0gQG9wdGlvbnMuZGlzdC8yKS5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gXCJpdGVyYXRlc1wiIHRoZSByZWN0YW5nbGUgZnJvbSB3ZXN0LXRvLWVhc3QsIG5vcnRoLXRvLXNvdXRoLlxuICogQSByb3cgaXMgY3JlYXRlQ29vcmRpbmF0ZXNSZXR1cm4gXCJsaW5lXCIgZnJvbSB3ZXN0LXRvLWVhc3QuXG4gKlxuICogT24gZWFjaCByb3cgdGhlIGNpcmNsZXMgYXJlIG5leHQgdG8gZWFjaCBvdGhlciwgd2l0aG91dCBvdmVybGFwcGluZyAoaS5lLiAwIGRpc3RhbmNlIGIvdyBjaXJjbGVzIG9uIGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuIHJvdylcbiAqIFRoZXJlJ3Mgbm8gZGlzdGFuY2UgYmV0d2VlbiBjaXJjbGVzIG9uIGFkamFjZW50IGNvbHVtbnMgdG9vLlxuICogVGhpcyBtZWFucyB0aGF0IHRoZXNlIFwibWFpblwiIGNpcmNsZXMgd2lsbCBub3QgZmlsbCB1cCB0aGUgd2hvbGUgcmVjdGFuZ2xlLlxuICpcbiAqIFRodXMsIGJldHdlZW4gZWFjaCB0d28gYWRqYWNlbnQgXCJtYWluXCIgcm93cyAoZS5nLiByb3dzIEEgYW5kIEIpICB3ZSBpbnNlcnQgY3JlYXRlQ29vcmRpbmF0ZXNSZXR1cm4gZmlsbGVyIHJvdyAoRikuXG4gKiBSb3cgRiBpcyBlZmZlY3RpdmVseSBjb3B5IG9mIEEgYnV0IHNoaWZ0ZWQgZmlyc3Qgc291dGggYW5kIHRoZW4gZWFzdCBieSB0aGUgcmFkaXVzIFIuIFRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGZpbGxlclxuICogcm93IGlzIHJlbW92ZWQgc2luY2UgaXQncyB0b28gZmFyIGZyb20gdGhlIGVhc3QgZW5kIG9mIHRoZSBib3VuZGluZyByZWN0YW5nbGUuXG4gKlxuICogQHBhcmFtIHtjcmVhdGVDb29yZGluYXRlc09wdHN9IG9wdGlvbnMuIC5kaXN0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBjZW50ZXJzIG9mIHR3byBjaXJjbGVzLiBpLmUuIGl0IGlzIHRoZSByYWRpdXMgb2YgY3JlYXRlQ29vcmRpbmF0ZXNSZXR1cm4gY2lyY2xlXG4gKiBAcmV0dXJuIHtjcmVhdGVDb29yZGluYXRlc1JldHVybn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvb3JkaW5hdGVzKG9wdGlvbnM6IGNyZWF0ZUNvb3JkaW5hdGVzT3B0cyk6IGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuIHtcbiAgICBjb25zdCByZXN1bHQ6IEwuTGF0TG5nW10gPSBbXSwgZmlsbGVyczogTC5MYXRMbmdbXSA9IFtdO1xuXG4gICAgY29uc3QgcmVjdEJvdW5kcyA9IG9wdGlvbnMuYm91bmRpbmdSZWN0YW5nbGUuZ2V0Qm91bmRzKCk7XG4gICAgY29uc3QgaW5pdGlhbFBvaW50ID0gT2JqZWN0LmZyZWV6ZShyZWN0Qm91bmRzLmdldE5vcnRoV2VzdCgpKTtcblxuICAgIGxldCBjdXJyZW50Q29vcmQ6IEwuTGF0TG5nID0gaW5pdGlhbFBvaW50O1xuICAgIGxldCBjdXJyZW50Um93SW5pdGlhbCA9IGN1cnJlbnRDb29yZDtcbiAgICBmb3IgKGxldCByb3cgPSAxOyA7IHJvdysrKSB7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRSb3dDaXJjbGVzQ29vcmRzID0gY2lyY2xlQ29vcmRzT2ZSb3cocmVjdEJvdW5kcywgY3VycmVudFJvd0luaXRpYWwsIG9wdGlvbnMuZGlzdGFuY2UpO1xuICAgICAgICByZXN1bHQucHVzaCguLi5jdXJyZW50Um93Q2lyY2xlc0Nvb3Jkcyk7XG5cbiAgICAgICAgbGV0IGZpbGxlckZpcnN0Q29vcmQgPSBtb3ZlVG9Tb3V0aEVhc3QoY3VycmVudFJvd0luaXRpYWwsIG9wdGlvbnMuZGlzdGFuY2UpO1xuXG4gICAgICAgIGlmICghaXNXaXRoaW5Cb3VuZHMoW3JlY3RCb3VuZHMuZ2V0Tm9ydGgoKSwgcmVjdEJvdW5kcy5nZXRTb3V0aCgpXSwgY3VycmVudENvb3JkLmxhdCkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGhlbHBlclJvd0Nvb3JkczogTC5MYXRMbmdbXSA9IGNpcmNsZUNvb3Jkc09mUm93KHJlY3RCb3VuZHMsIGZpbGxlckZpcnN0Q29vcmQsIG9wdGlvbnMuZGlzdGFuY2UpO1xuICAgICAgICAgICAgaGVscGVyUm93Q29vcmRzLnBvcCgpO1xuICAgICAgICAgICAgZmlsbGVycy5wdXNoKC4uLmhlbHBlclJvd0Nvb3Jkcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50Um93SW5pdGlhbCA9IGN1cnJlbnRDb29yZCA9IGNhbGN1bGF0ZU5leHRQb2ludChpbml0aWFsUG9pbnQsIG9wdGlvbnMuZGlzdGFuY2UgKiByb3csIEJlYXJpbmcuc291dGgpLnBvaW50O1xuICAgIH1cbiAgICByZXR1cm4ge21haW46IHJlc3VsdCwgZmlsbGVyczogZmlsbGVycywgY29tYmluZWQ6IHJlc3VsdC5jb25jYXQoZmlsbGVycyl9XG5cbn1cblxuLyoqXG4gKiAoZ2VuZXJhdGVzIHJvd3MgZm9yIGNyZWF0ZUNvb3JkaW5hdGVzKCkpXG4gKiBHZW5lcmF0ZSB0aGUgY29vcmRpbmF0ZXMgb2YgY2lyY2xlcyBvbiBjcmVhdGVDb29yZGluYXRlc1JldHVybiBnZW5lcmljIHJvdyAoaS5lLiB1c2VkIGZvciBib3RoIFwibWFpblwiL1wiZmlsbGVyXCIgcm93cykuXG4gKlxuICogVGhlIGZ1bmN0aW9uIHN0YXJ0cyBmcm9tIGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuIGdpdmVuIEBpbml0aWFsQ29vcmQgYW5kIG1vdmVzIGVhc3QuIE9uIGVhY2ggaXRlcmF0aW9uIGl0IGNoZWNrcyBpZiB0aGUgY3VycmVudFxuICogY29vcmRpbmF0ZSBpcyB3aXRoaW4gdGhlIGxvbmdpdHVkZSBib3VuZHMgb2YgdGhlIHJlY3QgKGkuZS4gYXQgbW9zdCBvbmUgY2lyY2xlIGJleW9uZCB0aGUgZWFzdCBzaWRlIG9mIHRoZSByZWN0KS5cbiAqIElmIGl0J3MgYmV5b25kIC0gdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJvdy4gU2luY2Ugd2UgYWRkIHRvIHRoZSByZXN1bHQgYmVmb3JlIHdlIG1ha2UgdGhlIGJvdW5kIGNoZWNrLFxuICogd2UgYWxsb3cgZm9yIGF0IG1vc3Qgb25lIGNpcmNsZSBiZXlvbmQgdGhlIGJvdW5kcy5cbiAqXG4gKiBAcGFyYW0ge0xhdExuZ0JvdW5kc30gYm91bmRzIC0gdGhlIGJvdW5kcyBvZiB0aGUgYmlnIHJlY3RhbmdsZSBhcm91bmQgdGhlIGNpdHlcbiAqIEBwYXJhbSB7TGF0TG5nfSBpbml0aWFsQ29vcmQgLSB3aGVyZSBpcyB0aGUgY2VudHJlIG9mIHRoZSBmaXJzdCBjaXJjbGUgb24gdGhhdCByb3dcbiAqIEBwYXJhbSBkaXN0YW5jZSAtIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBjZW50ZXJzIG9mIHR3byBhZGphY2VudCBjaXJjbGVzIG9uIHRoaXMgcm93XG4gKiBAcmV0dXJuIHtMYXRMbmdbXX0gdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXJzIG9mIGFsbCBjaXJjbGVzIG9uIHRoaXMgcm93XG4gKi9cbmZ1bmN0aW9uIGNpcmNsZUNvb3Jkc09mUm93KGJvdW5kczogTC5MYXRMbmdCb3VuZHMsIGluaXRpYWxDb29yZDogTC5MYXRMbmcsIGRpc3RhbmNlKSB7XG4gICAgY29uc3QgZWFzdEJvdW5kID0gYm91bmRzLmdldEVhc3QoKTtcblxuICAgIGxldCByZXN1bHQ6IEwuTGF0TG5nW10gPSBbXTtcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uOiBMLkxhdExuZyA9IGluaXRpYWxDb29yZDtcbiAgICBmb3IgKDsgOykge1xuICAgICAgICByZXN1bHQucHVzaChjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICAvKlxuICAgICAgICB1c2UgaW5pdGlhbENvb3JkLmxuZyBpbnN0ZWFkIG9mIFwid2VzdEJvdW5kXCIgYmVjYXVzZSBvZiBjcmVhdGVDb29yZGluYXRlc1JldHVybiBudW1lcmljYWwgZXJyb3IgcHJvcGFnYXRlZCB1cCBmcm9tIGNhbGN1bGF0ZU5leHRQb2ludCgpLlxuICAgICAgICB0aGUgZXJyb3IgaW5jcmVhc2VzIHRoZSBtb3JlIHdlIGdvIHNvdXRoIGZyb20gdGhlIG5vcnRoLXdlc3QgcG9pbnQgb2YgQGJvdW5kcy5cblxuICAgICAgICB0bDtkciBpdCdzIGR1ZSB0byB0aGUgZmFjdCB0aGF0IHRoZSBlYXJ0aCBoYXMgYW4gaW1wZXJmZWN0IHNoYXBlXG4gICAgICAgICovXG4gICAgICAgIGlmICghaXNXaXRoaW5Cb3VuZHMoW2luaXRpYWxDb29yZC5sbmcsIGVhc3RCb3VuZF0sIGN1cnJlbnRQb3NpdGlvbi5sbmcpKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IGNhbGN1bGF0ZU5leHRQb2ludChjdXJyZW50UG9zaXRpb24sIGRpc3RhbmNlLCBCZWFyaW5nLmVhc3QpLnBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vdmVUb1NvdXRoRWFzdChjdXJyZW50Um93SW5pdGlhbCwgZGlzdCkge1xuICAgIGxldCBzaGlmdFNvdXRoID0gY2FsY3VsYXRlTmV4dFBvaW50KGN1cnJlbnRSb3dJbml0aWFsLCBkaXN0IC8gMiwgQmVhcmluZy5zb3V0aCkucG9pbnQ7XG4gICAgcmV0dXJuIGNhbGN1bGF0ZU5leHRQb2ludChzaGlmdFNvdXRoLCBkaXN0IC8gMiwgQmVhcmluZy5lYXN0KS5wb2ludDtcbn1cblxuLy8gaS5lLiBkaXJlY3Rpb25cbmVudW0gQmVhcmluZyB7XG4gICAgZWFzdCA9IDkwLFxuICAgIHdlc3QgPSAtOTAsXG5cbiAgICBub3J0aCA9IDAsXG4gICAgc291dGggPSAxODBcbn1cblxuZW51bSBSZWN0YW5nbGVTaWRlIHtcbiAgICAvLyB0b2RvIGFkZCBvdGhlcnNcbiAgICBub3J0aFdlc3QgPSBcIk5vcnRoV2VzdFwiXG59XG5cblxuXG4iLCJpbXBvcnQge21hcCwgZHJhd0NpcmNsZXMsIGVuYWJsZURyYXdpbmd9IGZyb20gXCIuL21hcFwiXG5pbXBvcnQge0RFRkFVTFRfQ0lSQ0xFX1JBRElVUywgY3JlYXRlQ29vcmRpbmF0ZXN9IGZyb20gXCIuL2NvcmVcIlxuXG4vLyBqcXVlcnkgYW5kIGxlYWZsZXQgYXJlIFwiaW1wb3J0ZWRcIiBpbiB0aGUgaHRtbCB2aWEgPHNjcmlwdD5cbmRlY2xhcmUgbGV0ICQ7XG5kZWNsYXJlIGxldCBMO1xuXG5cbi8qKlxuICogT3JjaGVzdHJhdGUgaXQgYWxsXG4gKi9cbihmdW5jdGlvbiBydW4oKSB7XG4gICAgLy8gdGhlIGxlYWZsZXQgbGF5ZXIgb24gd2hpY2ggdGhlIGNpcmNsZXMgZ2VuZXJhdGVkIGNpcmNsZXMgd2lsbCBiZSBkcmF3blxuICAgIGNvbnN0IGNpcmNsZXNMYXllciA9IG5ldyBMLkZlYXR1cmVHcm91cCgpLmFkZFRvKG1hcCk7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBjaXJjbGUgcmFkaXVzXG4gICAgJChcIiNyYWRpdXMtc2l6ZVwiKS5hdHRyKFwidmFsdWVcIiwgREVGQVVMVF9DSVJDTEVfUkFESVVTKTtcblxuICAgIC8vIGF0dGFjaCBhIGNhbGxiYWNrIHRvIHRoZSBldmVudCB3aGVuIGEgdXNlciBoYXMgZHJhd24gYSByZWN0YW5nbGUgb24gdGhlIG1hcC5cbiAgICAvLyB0aGUgZGVmaW5pbmcgY29vcmRzIG9mIHRoZSByZWN0YW5nbGUgYXJlIHRoZW4gcGFzc2VkIHRvIGEgY2FsbGJhY2sgdGhhdCB3ZSBzZXQgaGVyZVxuICAgIGVuYWJsZURyYXdpbmcoXG4gICAgICAgIG9uQ2l0eUJvdW5kYXJ5UmVhZHkuYmluZChudWxsLCBjaXJjbGVzTGF5ZXIpLFxuICAgICAgICAoKSA9PiBjaXJjbGVzTGF5ZXIuY2xlYXJMYXllcnMoKSk7XG59KSgpO1xuXG4vKipcbiAqIEdpdmVuIGEgYm91bmRpbmcgcmVjdGFuZ2xlIGFuZCBhIFwiY2FudmFzXCIsIGdlbmVyYXRlZCB0aGUgY2lyY2xlcyBhbmQgZmlsbCB0aGUgY2FudmFzIHdpdGggdGhlbVxuICpcbiAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBib3VuZGluZ1JlY3RhbmdsZVxuICogQHBhcmFtIGNpcmNsZXNMYXllciAtIHRoZSBcImNhbnZhc1wiXG4gKi9cbmZ1bmN0aW9uIHJlZ2VuZXJhdGUoYm91bmRpbmdSZWN0YW5nbGU6IEwuUmVjdGFuZ2xlLCBjaXJjbGVzTGF5ZXIpIHtcbiAgICAvLyB3aXBlIG91dCBleGlzdGluZyBjaXJjbGVzXG4gICAgY2lyY2xlc0xheWVyLmNsZWFyTGF5ZXJzKCk7XG5cbiAgICAvLyB0aGUgcmFkaXVzIG9mIHRoZSBjaXJjbGVzIHRoYXQgd2lsbCBmaWxsIHRoZSByZWN0YW5nbGVcbiAgICBjb25zdCBjaXJjbGVfcmFkaXVzID0gZ2V0VXNlclNlbGVjdGVkQ2lyY2xlUmFkaXVzKCk7IC8vIG1ldHJlc1xuICAgIGNvbnNvbGUubG9nKGAke2NpcmNsZV9yYWRpdXN9bSBjaXJjbGUgcmFkaXVzYCk7XG5cbiAgICAvLyBnZW5lcmF0ZSBhbGwgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBjaXJjbGVzIHdpdGhpbiB0aGUgYm91bmRpbmcgYXJlYVxuICAgIC8vICpvbmx5KiB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlICpjZW50ZXIqIG9mIHRoZSBjaXJjbGVzIGlzIHJldHVybmVkXG4gICAgY29uc3QgY29vcmRzID0gY3JlYXRlQ29vcmRpbmF0ZXMoe1xuICAgICAgICBib3VuZGluZ1JlY3RhbmdsZTogYm91bmRpbmdSZWN0YW5nbGUsXG4gICAgICAgIGRpc3RhbmNlOiBjaXJjbGVfcmFkaXVzICogMixcbiAgICB9KTtcbiAgICAvLyAubWFpbiAmIC5maWxsZXJzIGlzIHVzZWQgdG8gZGVidWcgZWFzaWx5LiBUaGUgdW5pb24gb2YgdGhlIHR3byBzZXRzIG9mIGNpcmNsZXNcbiAgICAvLyBpcyBpbiAuY29tYmluZWRcbiAgICBkcmF3Q2lyY2xlcyhjb29yZHMubWFpbiwgY2lyY2xlc0xheWVyLCBjaXJjbGVfcmFkaXVzKTtcbiAgICBkcmF3Q2lyY2xlcyhjb29yZHMuZmlsbGVycywgY2lyY2xlc0xheWVyLCBjaXJjbGVfcmFkaXVzLCB7Y29sb3I6ICdncmVlbid9KTtcblxuICAgIGxldCBkb3dubG9hZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZC1idG4nKTtcblxuICAgIGNvbnNvbGUubG9nKGBHZW5lcmF0ZWQgJHtjb29yZHMuY29tYmluZWQubGVuZ3RofSBjaXJjbGVzIGApO1xuXG4gICAgZG93bmxvYWRCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdG9TYXZlID0ge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3Jkcy5jb21iaW5lZCxcbiAgICAgICAgICAgIGNpcmNsZV9yYWRpdXM6IGNpcmNsZV9yYWRpdXNcbiAgICAgICAgfTtcbiAgICAgICAgc2F2ZUZpbGUoSlNPTi5zdHJpbmdpZnkodG9TYXZlKSwgYGNvb3Jkc18ke3RvU2F2ZS5jb29yZGluYXRlcy5sZW5ndGh9X3Ike2NpcmNsZV9yYWRpdXN9Lmpzb25gLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIH07XG59XG5cblxuLyoqXG4gKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBoYXMgZHJhd24gYSByZWN0YW5nbGVcbiAqIEBwYXJhbSBjaXJjbGVzTGF5ZXIgdGhlIGxheWVyIG9uIHdoaWNoIHdlIHdhbnQgdG8gZHJhdyB0aGUgZ2VuZXJhdGVkIGNpcmNsZXNcbiAqIEBwYXJhbSB7TGF0TG5nW119IGRyYXduUmVjdGFuZ2xlXG4gKi9cbmZ1bmN0aW9uIG9uQ2l0eUJvdW5kYXJ5UmVhZHkoY2lyY2xlc0xheWVyLCBkcmF3blJlY3RhbmdsZTogTC5SZWN0YW5nbGUpIHtcbiAgICBjaXJjbGVzTGF5ZXIuY2xlYXJMYXllcnMoKTtcblxuICAgIGNvbnN0IHJlZHJhd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdlbmVyYXRlLWJ0bicpO1xuICAgIHJlZHJhd0J0bi5vbmNsaWNrID0gcmVnZW5lcmF0ZS5iaW5kKG51bGwsIGRyYXduUmVjdGFuZ2xlLCBjaXJjbGVzTGF5ZXIpO1xuICAgIHJlZHJhd0J0bi5jbGljaygpO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyU2VsZWN0ZWRDaXJjbGVSYWRpdXMoKSB7XG4gICAgcmV0dXJuIE51bWJlcigkKFwiI3JhZGl1cy1zaXplXCIpLnZhbCgpKTtcbn1cblxuXG4vKipcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMzU0MjQ5OVxuICogU2F2ZSBhIGZpbGUgdG8gdGhlIGxvY2FsIGZpbGVzeXN0ZW1cbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0gZmlsZW5hbWVcbiAqIEBwYXJhbSBjb250ZW50VHlwZVxuICovXG5mdW5jdGlvbiBzYXZlRmlsZShkYXRhLCBmaWxlbmFtZSwgY29udGVudFR5cGUpIHtcbiAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwge3R5cGU6IGNvbnRlbnRUeXBlfSk7XG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgZmlsZW5hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGVsZW0gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBlbGVtLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgZWxlbS5kb3dubG9hZCA9IGZpbGVuYW1lO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICBlbGVtLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gICAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=