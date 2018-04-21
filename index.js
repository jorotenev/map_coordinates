!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r,a,o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e};r=L.map("map").setView([42.69793,23.321628],13),L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <createCoordinatesReturn href="http://openstreetmap.org">OpenStreetMap</createCoordinatesReturn> contributors, <createCoordinatesReturn href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</createCoordinatesReturn>, Imagery © <createCoordinatesReturn href="http://mapbox.com">Mapbox</createCoordinatesReturn>',maxZoom:18,id:"mapbox.streets-basic",accessToken:"pk.eyJ1IjoiY2hpcHNhbiIsImEiOiJqa0JwV1pnIn0.mvduWzyRdcHxK_QIOpetFg"}).addTo(r);L.control.sidebar("sidebar").addTo(r);a=new L.FeatureGroup,r.addLayer(a);var i=new L.Control.Draw({edit:{featureGroup:a},draw:{circle:!1,circlemarker:!1,marker:!1,polygon:!1,polyline:!1}});function c(e,t,n,r){void 0===n&&(n=300),void 0===r&&(r={});var a=o({color:"red"},r);e.forEach(function(e){new L.Circle(e,n,a).addTo(t)})}r.addControl(i);var s=6371e3;function l(e,t,n){void 0===t&&(t=500);var r,a,o=Number(t)/s,i=d(Number(n)),c=d(e.lat),l=d(e.lng),u=Math.sin(c),h=Math.cos(c),f=Math.sin(o),g=Math.cos(o),v=Math.sin(i),m=u*g+h*f*Math.cos(i),b=Math.asin(m),y=v*f*h,M=g-u*m,w=l+Math.atan2(y,M),O=L.latLng(p(b),(p(w)+540)%360-180);return{point:O,new_bearing:(r=e,a=O,(function(e,t){var n=d(e.lat),r=d(t.lat),a=d(t.lng-e.lng),o=Math.sin(a)*Math.cos(r),i=Math.cos(n)*Math.sin(r)-Math.sin(n)*Math.cos(r)*Math.cos(a);return(p(Math.atan2(o,i))+360)%360}(a,r)+180)%360)}}function u(e,t,n){void 0===n&&(n=5);var r=function(e){return r=n,a=(t=e).toString().split(".")[1].length,function(e,t){return t=Math.pow(10,t),Math.ceil(e*t)/t}(t,a-r);var t,r,a},a=e.map(r),o=r(t),i=Math.min.apply(Math,a),c=Math.max.apply(Math,a);return i<=o&&o<=c}function d(e){return e*Math.PI/180}function p(e){return 180*e/Math.PI}var h,f,g,v,m;function b(e,t,n){for(var r=e.getEast(),a=[],o=t;a.push(o),u([t.lng,r],o.lng);)o=l(o,n,h.east).point;return a}function y(e,t){return l(l(e,t/2,h.south).point,t/2,h.east).point}!function(e){e[e.east=90]="east",e[e.west=-90]="west",e[e.north=0]="north",e[e.south=180]="south"}(h||(h={})),function(e){e.northWest="NorthWest"}(f||(f={})),m=(new L.FeatureGroup).addTo(r),$("#radius-size").attr("value",150),g=function(e,t){e.clearLayers();var n=document.getElementById("regenerate-btn");n.onclick=function(e,t){t.clearLayers();var n=Number($("#radius-size").val());console.log(n+" circle radius");var r=function(e){for(var t=[],n=[],r=e.boundingRectangle.getBounds(),a=Object.freeze(r.getNorthWest()),o=a,i=o,c=1;;c++){var s=b(r,i,e.distance);t.push.apply(t,s);var d=y(i,e.distance);if(!u([r.getNorth(),r.getSouth()],o.lat))break;var p=b(r,d,e.distance);p.pop(),n.push.apply(n,p),i=o=l(a,e.distance*c,h.south).point}return{main:t,fillers:n,combined:t.concat(n)}}({boundingRectangle:e,distance:2*n});c(r.main,t,n),c(r.fillers,t,n,{color:"green"});var a=document.getElementById("download-btn");console.log("generated "+r.combined.length+" circles "),a.onclick=function(){var e={coordinates:r.combined,circleRadius:n};!function(e,t,n){var r=new Blob([e],{type:n});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(r,t);else{var a=window.document.createElement("a");a.href=window.URL.createObjectURL(r),a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}(JSON.stringify(e),"coords_"+e.coordinates.length+"_r"+n+".json","application/json")}}.bind(null,t,e),n.click()}.bind(null,m),v=m.clearLayers,r.on("draw:created",function(e){var t=e.layerType,n=e.layer;if("rectangle"!==t)return!0;a.clearLayers(),console.log(t+" drawn");var r=n.getLatLngs()[0];a.addLayer(n),console.log(JSON.stringify(r));var o=L.latLngBounds(r.map(function(e){return[e.lat,e.lng]})),i=L.rectangle(o);g(i)}),r.on("draw:deleted",v)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvX3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwidmFsdWUiLCJuIiwiX19lc01vZHVsZSIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIm1hcCIsImxheWVyRm9yVXNlclJlY3RhbmdsZXMiLCJMIiwic2V0VmlldyIsInRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwibWF4Wm9vbSIsImlkIiwiYWNjZXNzVG9rZW4iLCJhZGRUbyIsImNvbnRyb2wiLCJzaWRlYmFyIiwiRmVhdHVyZUdyb3VwIiwiYWRkTGF5ZXIiLCJkcmF3Q29udHJvbCIsIkNvbnRyb2wiLCJEcmF3IiwiZWRpdCIsImZlYXR1cmVHcm91cCIsImRyYXciLCJjaXJjbGUiLCJjaXJjbGVtYXJrZXIiLCJtYXJrZXIiLCJwb2x5Z29uIiwicG9seWxpbmUiLCJkcmF3Q2lyY2xlcyIsImNvb3JkcyIsImxheWVyIiwiY2lyY2xlUmFkaXVzIiwiY2lyY2xlT3B0aW9ucyIsIm9wdHMiLCJfX2Fzc2lnbiIsImNvbG9yIiwiZm9yRWFjaCIsImNvb3JkIiwiQ2lyY2xlIiwiYWRkQ29udHJvbCIsIkVBUlRIX1JBRElVUyIsImNhbGN1bGF0ZU5leHRQb2ludCIsImNvb3JkaW5hdGUiLCJkaXN0YW5jZSIsImJlYXJpbmciLCJwMSIsInAyIiwiZGVsdGEiLCJOdW1iZXIiLCJ0aGV0YSIsInRvUmFkaWFucyIsInBoaTEiLCJsYXQiLCJsYW1iZGExIiwibG5nIiwic2lucGhpMSIsIk1hdGgiLCJzaW4iLCJjb3NwaGkxIiwiY29zIiwic2luZGVsdGEiLCJjb3NkZWx0YSIsInNpbnRoZXRhIiwic2lucGhpMiIsInBoaTIiLCJhc2luIiwieSIsIngiLCJsYW1iZGEyIiwiYXRhbjIiLCJkZXN0aW5hdGlvblBvaW50IiwibGF0TG5nIiwidG9EZWdyZWVzIiwicG9pbnQiLCJuZXdfYmVhcmluZyIsImRlbHRhT2ZMYW1iZGEiLCJiZWFyaW5nVG8iLCJpc1dpdGhpbkJvdW5kcyIsImJvdW5kcyIsIm51bSIsImlnbm9yZUxhc3RYRGlnaXRzIiwiYWRqdXN0UHJlY2lzaW9uIiwiaWdub3JlTGFzdFhTeW1ib2xzIiwicHJlY2lzaW9uIiwidG9TdHJpbmciLCJzcGxpdCIsImxlbmd0aCIsInBvdyIsImNlaWwiLCJyb3VuZFVwIiwiYWRqdXN0ZWRQcmVjaXNpb25Cb3VuZHMiLCJhZGp1c3RlZFByZWNpc2lvbk51bSIsIm1pbkxhdCIsIm1pbiIsImFwcGx5IiwibWF4TGF0IiwibWF4IiwiUEkiLCJCZWFyaW5nIiwiUmVjdGFuZ2xlU2lkZSIsImNhbGxiYWNrT25SZWN0RHJhd24iLCJjYWxsYmFja09uRGVsZXRlIiwiY2lyY2xlc0xheWVyIiwiY2lyY2xlQ29vcmRzT2ZSb3ciLCJpbml0aWFsQ29vcmQiLCJlYXN0Qm91bmQiLCJnZXRFYXN0IiwicmVzdWx0IiwiY3VycmVudFBvc2l0aW9uIiwicHVzaCIsImVhc3QiLCJtb3ZlVG9Tb3V0aEVhc3QiLCJjdXJyZW50Um93SW5pdGlhbCIsImRpc3QiLCJzb3V0aCIsIiQiLCJhdHRyIiwiZHJhd25SZWN0YW5nbGUiLCJjbGVhckxheWVycyIsInJlZHJhd0J0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNsaWNrIiwiYm91bmRpbmdSZWN0YW5nbGUiLCJjaXJjbGVfcmFkaXVzIiwidmFsIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJmaWxsZXJzIiwicmVjdEJvdW5kcyIsImdldEJvdW5kcyIsImluaXRpYWxQb2ludCIsImZyZWV6ZSIsImdldE5vcnRoV2VzdCIsImN1cnJlbnRDb29yZCIsInJvdyIsImN1cnJlbnRSb3dDaXJjbGVzQ29vcmRzIiwiZmlsbGVyRmlyc3RDb29yZCIsImdldE5vcnRoIiwiZ2V0U291dGgiLCJoZWxwZXJSb3dDb29yZHMiLCJwb3AiLCJtYWluIiwiY29tYmluZWQiLCJjb25jYXQiLCJjcmVhdGVDb29yZGluYXRlcyIsImRvd25sb2FkQnRuIiwidG9TYXZlIiwiY29vcmRpbmF0ZXMiLCJkYXRhIiwiZmlsZW5hbWUiLCJjb250ZW50VHlwZSIsImJsb2IiLCJCbG9iIiwidHlwZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJtc1NhdmVCbG9iIiwiZWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwic2F2ZUZpbGUiLCJKU09OIiwic3RyaW5naWZ5IiwiYmluZCIsIm9uIiwiZSIsImxheWVyVHlwZSIsImxhdGxuZ3MiLCJnZXRMYXRMbmdzIiwicmVjdGFuZ2xlQm91bmRzIiwibGF0TG5nQm91bmRzIiwicmVjdGFuZ2xlIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxLQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLElBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsWUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVB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VUMsR0FDN0IsSUFBSXBCLEVBQU9vQixFQUFFQyxVQUNUbEosRUFBUWlKLEVBQUVqSixNQUNkLEdBQWEsY0FBVDZILEVBQ0EsT0FBTyxFQUVYdkosRUFBdUJrSCxjQUN2QlEsUUFBUUMsSUFBSTRCLEVBQU8sVUFDbkIsSUFBSXNCLEVBQVVuSixFQUFNb0osYUFBYSxHQUNqQzlLLEVBQXVCWSxTQUFTYyxHQUNoQ2dHLFFBQVFDLElBQUk0QyxLQUFLQyxVQUFVSyxJQUczQixJQUFNRSxFQUFrQzlLLEVBQUUrSyxhQUFhSCxFQUFROUssSUFBSSxTQUFVa0MsR0FDekUsT0FBUUEsRUFBTWUsSUFBS2YsRUFBTWlCLFFBRXZCcUUsRUFBaUN0SCxFQUFFZ0wsVUFBVUYsR0FHbkQvRSxFQUFvQnVCLEtBRXhCeEgsRUFBSTJLLEdBQUcsZUFBZ0J6RSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgbGV0IG1hcDtcbmV4cG9ydCBsZXQgbGF5ZXJGb3JVc2VyUmVjdGFuZ2xlcztcbmRlY2xhcmUgbGV0IEw7XG4vLyBhZGQgdGhlIG1hcCB0byB0aGUgcGFnZVxubWFwID0gTC5tYXAoJ21hcCcpLnNldFZpZXcoWzQyLjY5NzkzMCwgMjMuMzIxNjI4XSwgMTMpO1xuTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLnRpbGVzLm1hcGJveC5jb20vdjQve2lkfS97en0ve3h9L3t5fS5wbmc/YWNjZXNzX3Rva2VuPXthY2Nlc3NUb2tlbn0nLCB7XG4gICAgYXR0cmlidXRpb246ICdNYXAgZGF0YSAmY29weTsgPGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuIGhyZWY9XCJodHRwOi8vb3BlbnN0cmVldG1hcC5vcmdcIj5PcGVuU3RyZWV0TWFwPC9jcmVhdGVDb29yZGluYXRlc1JldHVybj4gY29udHJpYnV0b3JzLCA8Y3JlYXRlQ29vcmRpbmF0ZXNSZXR1cm4gaHJlZj1cImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzIuMC9cIj5DQy1CWS1TQTwvY3JlYXRlQ29vcmRpbmF0ZXNSZXR1cm4+LCBJbWFnZXJ5IMKpIDxjcmVhdGVDb29yZGluYXRlc1JldHVybiBocmVmPVwiaHR0cDovL21hcGJveC5jb21cIj5NYXBib3g8L2NyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuPicsXG4gICAgbWF4Wm9vbTogMTgsXG4gICAgaWQ6ICdtYXBib3guc3RyZWV0cy1iYXNpYycsXG4gICAgYWNjZXNzVG9rZW46ICdway5leUoxSWpvaVkyaHBjSE5oYmlJc0ltRWlPaUpxYTBKd1YxcG5JbjAubXZkdVd6eVJkY0h4S19RSU9wZXRGZydcbn0pLmFkZFRvKG1hcCk7XG5cblxuLy8gdGhlIGNvbGxhcHNpYmxlIHNpZGViYXIgd2l0aCByZWRyYXcvZG93bmxvYWQgZXRjLiBjdXN0b20gYnV0dG9uc1xubGV0IHNpZGViYXIgPSBMLmNvbnRyb2wuc2lkZWJhcignc2lkZWJhcicpLmFkZFRvKG1hcCk7XG5cbi8vIHdoZXJlIHdlIGRyYXcgcmVjdGFuZ2xlc1xubGF5ZXJGb3JVc2VyUmVjdGFuZ2xlcyA9IG5ldyBMLkZlYXR1cmVHcm91cCgpO1xubWFwLmFkZExheWVyKGxheWVyRm9yVXNlclJlY3RhbmdsZXMpO1xuLy8gZW5hYmxlIHRoZSBwbHVnaW4gZm9yIGRyYXdpbmcgb24gdGhlIG1hcFxubGV0IGRyYXdDb250cm9sID0gbmV3IEwuQ29udHJvbC5EcmF3KHtcbiAgICBlZGl0OiB7XG4gICAgICAgIGZlYXR1cmVHcm91cDogbGF5ZXJGb3JVc2VyUmVjdGFuZ2xlc1xuICAgIH0sXG4gICAgZHJhdzoge1xuICAgICAgICBjaXJjbGU6IGZhbHNlLFxuICAgICAgICBjaXJjbGVtYXJrZXI6IGZhbHNlLFxuICAgICAgICBtYXJrZXI6IGZhbHNlLFxuICAgICAgICBwb2x5Z29uOiBmYWxzZSxcbiAgICAgICAgcG9seWxpbmU6IGZhbHNlLFxuICAgIH1cbn0pO1xubWFwLmFkZENvbnRyb2woZHJhd0NvbnRyb2wpO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gd2hpY2ggY29sbGVjdHMgd2hhdCB0aGUgdXNlciBoYXMgZHJhd24gYW5kIHBhc3MgaXQgdG8gYSBjYWxsYmFja1xuICogQHBhcmFtIHsocmVjdGFuZ2xlOiBSZWN0YW5nbGUpID0+IGFueX0gY2FsbGJhY2tPblJlY3REcmF3blxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja09uRGVsZXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVEcmF3aW5nKGNhbGxiYWNrT25SZWN0RHJhd246IChyZWN0YW5nbGU6IEwuUmVjdGFuZ2xlKSA9PiBhbnksIGNhbGxiYWNrT25EZWxldGU6ICgpID0+IHZvaWQpIHtcbiAgICAvLyB0b2RvIGhhbmRsZSBcImVkaXRlZFwiIHRvb1xuICAgIG1hcC5vbignZHJhdzpjcmVhdGVkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IHR5cGUgPSBlLmxheWVyVHlwZSxcbiAgICAgICAgICAgIGxheWVyID0gZS5sYXllcjtcbiAgICAgICAgaWYgKHR5cGUgIT09IFwicmVjdGFuZ2xlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgbGF5ZXJGb3JVc2VyUmVjdGFuZ2xlcy5jbGVhckxheWVycygpO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlICsgXCIgZHJhd25cIik7XG4gICAgICAgIGxldCBsYXRsbmdzID0gbGF5ZXIuZ2V0TGF0TG5ncygpWzBdO1xuICAgICAgICBsYXllckZvclVzZXJSZWN0YW5nbGVzLmFkZExheWVyKGxheWVyKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobGF0bG5ncykpO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIHJlc3VsdFxuICAgICAgICBjb25zdCByZWN0YW5nbGVCb3VuZHM6IEwuTGF0TG5nQm91bmRzID0gTC5sYXRMbmdCb3VuZHMobGF0bG5ncy5tYXAoZnVuY3Rpb24gKGNvb3JkKTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgICAgICByZXR1cm4gW2Nvb3JkLmxhdCwgY29vcmQubG5nXVxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGJvdW5kaW5nUmVjdGFuZ2xlOiBMLlJlY3RhbmdsZSA9IEwucmVjdGFuZ2xlKHJlY3RhbmdsZUJvdW5kcyk7XG5cbiAgICAgICAgLy8gcGFzcyB0aGUgZHJhd24gcmVjdGFuZ2xlIHRvIHRoZSBjYWxsYmFja1xuICAgICAgICBjYWxsYmFja09uUmVjdERyYXduKGJvdW5kaW5nUmVjdGFuZ2xlKTtcbiAgICB9KTtcbiAgICBtYXAub24oXCJkcmF3OmRlbGV0ZWRcIiwgY2FsbGJhY2tPbkRlbGV0ZSlcblxufVxuXG4vKipcbiAqIEdpdmVuIGEgbGF5ZXIsIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXIgb2YgY2lyY2xlcyBhbmQgdGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlLFxuICogZHJhdyB0aGUgY2lyY2xlcyBvbiB0aGUgbGF5ZXJcbiAqIEBwYXJhbSB7TGF0TG5nW119IGNvb3Jkc1xuICogQHBhcmFtIHtMYXllckdyb3VwfSBsYXllclxuICogQHBhcmFtIHtudW1iZXJ9IGNpcmNsZVJhZGl1c1xuICogQHBhcmFtIHt7fX0gY2lyY2xlT3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZHJhd0NpcmNsZXMoY29vcmRzOiBMLkxhdExuZ1tdLCBsYXllcjogTC5MYXllckdyb3VwLCBjaXJjbGVSYWRpdXMgPSAzMDAsIGNpcmNsZU9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBvcHRzID0ge1xuICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgLi4uY2lyY2xlT3B0aW9uc1xuICAgIH07XG4gICAgY29vcmRzLmZvckVhY2goKGNvb3JkOiBMLkxhdExuZykgPT4ge1xuICAgICAgICBuZXcgTC5DaXJjbGUoY29vcmQsIGNpcmNsZVJhZGl1cywgb3B0cykuYWRkVG8obGF5ZXIpXG4gICAgfSlcbn1cblxuXG5cbiIsIi8qXG4gKiAgQ3JlZGl0czogaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9sYXRsb25nLmh0bWxcbiAqIC0+IGxhdGxvbi1zcGhlcmljYWwuanNcbiAqL1xuZGVjbGFyZSBsZXQgTDtcbmNvbnN0IEVBUlRIX1JBRElVUyA9IDYzNzFlMztcblxuLyoqXG4gKiBcIkRlc3RpbmF0aW9uIHBvaW50IGdpdmVuIGRpc3RhbmNlIGFuZCBiZWFyaW5nIGZyb20gc3RhcnQgcG9pbnRcIlxuXG4gKiBAcGFyYW0gY29vcmRpbmF0ZSA6IHRoZSBzdGFydCBwb2ludFxuICogQHBhcmFtIHtudW1iZXJ9IGRpc3RhbmNlLCBpbiBtZXRyZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWFyaW5nIC0gZGlyZWN0aW9uLCBpbiBkZWdyZWVzIGZyb20gbm9ydGggY2xvY2t3aXNlXG4gKiBAcmV0dXJuIHRoZSBuZXcgcG9pbnQgYW5kIHRoZSBuZXcgYmVhcmluZ1xuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOZXh0UG9pbnQoY29vcmRpbmF0ZTogTC5MYXRMbmcsIGRpc3RhbmNlID0gNTAwLCBiZWFyaW5nKTogeyBwb2ludDogTC5MYXRMbmcsIG5ld19iZWFyaW5nOiBudW1iZXIgfSB7XG5cbiAgICAvLyBzaW7PhjIgPSBzaW7PhjHii4Vjb3POtCArIGNvc8+GMeKLhXNpbs604ouFY29zzrhcbiAgICAvLyB0YW7OlM67ID0gc2luzrjii4VzaW7OtOKLhWNvc8+GMSAvIGNvc8604oiSc2luz4Yx4ouFc2luz4YyXG4gICAgLy8gc2VlIG1hdGhmb3J1bS5vcmcvbGlicmFyeS9kcm1hdGgvdmlldy81MjA0OS5odG1sIGZvciBkZXJpdmF0aW9uXG5cbiAgICBsZXQgZGVsdGEgPSBOdW1iZXIoZGlzdGFuY2UpIC8gRUFSVEhfUkFESVVTOyAvLyBhbmd1bGFyIGRpc3RhbmNlIGluIHJhZGlhbnNcbiAgICBsZXQgdGhldGEgPSB0b1JhZGlhbnMoTnVtYmVyKGJlYXJpbmcpKTtcblxuICAgIGxldCBwaGkxID0gdG9SYWRpYW5zKGNvb3JkaW5hdGUubGF0KTtcbiAgICBsZXQgbGFtYmRhMSA9IHRvUmFkaWFucyhjb29yZGluYXRlLmxuZyk7XG5cbiAgICBsZXQgc2lucGhpMSA9IE1hdGguc2luKHBoaTEpLCBjb3NwaGkxID0gTWF0aC5jb3MocGhpMSk7XG4gICAgbGV0IHNpbmRlbHRhID0gTWF0aC5zaW4oZGVsdGEpLCBjb3NkZWx0YSA9IE1hdGguY29zKGRlbHRhKTtcbiAgICBsZXQgc2ludGhldGEgPSBNYXRoLnNpbih0aGV0YSksIGNvc3RoZXRhID0gTWF0aC5jb3ModGhldGEpO1xuXG4gICAgbGV0IHNpbnBoaTIgPSBzaW5waGkxICogY29zZGVsdGEgKyBjb3NwaGkxICogc2luZGVsdGEgKiBjb3N0aGV0YTtcbiAgICBsZXQgcGhpMiA9IE1hdGguYXNpbihzaW5waGkyKTtcbiAgICBsZXQgeSA9IHNpbnRoZXRhICogc2luZGVsdGEgKiBjb3NwaGkxO1xuICAgIGxldCB4ID0gY29zZGVsdGEgLSBzaW5waGkxICogc2lucGhpMjtcbiAgICBsZXQgbGFtYmRhMiA9IGxhbWJkYTEgKyBNYXRoLmF0YW4yKHksIHgpO1xuXG4gICAgY29uc3QgZGVzdGluYXRpb25Qb2ludCA9IEwubGF0TG5nKHRvRGVncmVlcyhwaGkyKSwgKHRvRGVncmVlcyhsYW1iZGEyKSArIDU0MCkgJSAzNjAgLSAxODApOyAvLyBub3JtYWxpc2UgdG8g4oiSMTgwLi4rMTgwwrAsXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwb2ludDogZGVzdGluYXRpb25Qb2ludCxcbiAgICAgICAgbmV3X2JlYXJpbmc6IGZpbmFsQmVhcmluZ1RvKGNvb3JkaW5hdGUsIGRlc3RpbmF0aW9uUG9pbnQpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXaXRoaW5Cb3VuZHMoYm91bmRzOiBbbnVtYmVyLCBudW1iZXJdLCBudW06IG51bWJlciwgaWdub3JlTGFzdFhEaWdpdHMgPSA1KSB7XG4gICAgY29uc3QgYWRqdXN0UHJlY2lzaW9uID0gKG4pID0+IHJlbW92ZUxhc3RYRGlnaXRzKG4sIGlnbm9yZUxhc3RYRGlnaXRzKTtcblxuICAgIGxldCBhZGp1c3RlZFByZWNpc2lvbkJvdW5kcyA9IGJvdW5kcy5tYXAoYWRqdXN0UHJlY2lzaW9uKTtcbiAgICBsZXQgYWRqdXN0ZWRQcmVjaXNpb25OdW0gPSBhZGp1c3RQcmVjaXNpb24obnVtKTtcblxuICAgIGxldCBtaW5MYXQgPSBNYXRoLm1pbiguLi5hZGp1c3RlZFByZWNpc2lvbkJvdW5kcyksIG1heExhdCA9IE1hdGgubWF4KC4uLmFkanVzdGVkUHJlY2lzaW9uQm91bmRzKTtcblxuICAgIHJldHVybiAobWluTGF0IDw9IGFkanVzdGVkUHJlY2lzaW9uTnVtKSAmJiAoYWRqdXN0ZWRQcmVjaXNpb25OdW0gPD0gbWF4TGF0KTtcbn1cblxuXG5mdW5jdGlvbiBmaW5hbEJlYXJpbmdUbyhwMSwgcDIpIHtcbiAgICByZXR1cm4gKGJlYXJpbmdUbyhwMiwgcDEpICsgMTgwKSAlIDM2MDtcbn1cblxuZnVuY3Rpb24gYmVhcmluZ1RvKHAxLCBwMikge1xuICAgIC8vIHRhbs64ID0gc2luzpTOu+KLhWNvc8+GMiAvIGNvc8+GMeKLhXNpbs+GMiDiiJIgc2luz4Yx4ouFY29zz4Yy4ouFY29zzpTOu1xuICAgIC8vIHNlZSBtYXRoZm9ydW0ub3JnL2xpYnJhcnkvZHJtYXRoL3ZpZXcvNTU0MTcuaHRtbCBmb3IgZGVyaXZhdGlvblxuXG4gICAgbGV0IHBoaTEgPSB0b1JhZGlhbnMocDEubGF0KSwgcGhpMiA9IHRvUmFkaWFucyhwMi5sYXQpO1xuICAgIGxldCBkZWx0YU9mTGFtYmRhID0gdG9SYWRpYW5zKHAyLmxuZyAtIHAxLmxuZyk7XG4gICAgbGV0IHkgPSBNYXRoLnNpbihkZWx0YU9mTGFtYmRhKSAqIE1hdGguY29zKHBoaTIpO1xuICAgIGxldCB4ID0gTWF0aC5jb3MocGhpMSkgKiBNYXRoLnNpbihwaGkyKSAtXG4gICAgICAgIE1hdGguc2luKHBoaTEpICogTWF0aC5jb3MocGhpMikgKiBNYXRoLmNvcyhkZWx0YU9mTGFtYmRhKTtcbiAgICBsZXQgdGhldGEgPSBNYXRoLmF0YW4yKHksIHgpO1xuXG4gICAgcmV0dXJuICh0b0RlZ3JlZXModGhldGEpICsgMzYwKSAlIDM2MDtcbn1cblxuZnVuY3Rpb24gdG9SYWRpYW5zKG51bSkge1xuICAgIHJldHVybiBudW0gKiBNYXRoLlBJIC8gMTgwXG59XG5cbmZ1bmN0aW9uIHRvRGVncmVlcyhudW0pIHtcbiAgICByZXR1cm4gbnVtICogMTgwIC8gTWF0aC5QSVxufVxuXG4vKipcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUxOTEwODgvaG93LXRvLXJvdW5kLXVwLWEtbnVtYmVyLWluLWphdmFzY3JpcHRcbiAqIEBwYXJhbSBudW0gVGhlIG51bWJlciB0byByb3VuZFxuICogQHBhcmFtIHByZWNpc2lvbiBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHByZXNlcnZlXG4gKi9cbmZ1bmN0aW9uIHJvdW5kVXAobnVtLCBwcmVjaXNpb24pIHtcbiAgICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgICByZXR1cm4gTWF0aC5jZWlsKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb25cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTGFzdFhEaWdpdHMobnVtLCBpZ25vcmVMYXN0WFN5bWJvbHMpIHtcbiAgICBsZXQgcHJlY2lzaW9uID0gbnVtLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gICAgcmV0dXJuIHJvdW5kVXAobnVtLCBwcmVjaXNpb24gLSBpZ25vcmVMYXN0WFN5bWJvbHMpXG59XG5cbiIsImltcG9ydCB7Y2FsY3VsYXRlTmV4dFBvaW50LCBpc1dpdGhpbkJvdW5kc30gZnJvbSBcIi4vZ2VvX3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0NJUkNMRV9SQURJVVMgPSAxNTA7IC8vIG1ldGVyc1xuZGVjbGFyZSBsZXQgTDtcblxudHlwZSBjcmVhdGVDb29yZGluYXRlc09wdHMgPSB7XG4gICAgYm91bmRpbmdSZWN0YW5nbGU6IEwuUmVjdGFuZ2xlLFxuICAgIGRpc3RhbmNlOiBudW1iZXIsXG59XG50eXBlIGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuID0geyBtYWluOiBMLkxhdExuZ1tdLCBmaWxsZXJzOiBMLkxhdExuZ1tdLCBjb21iaW5lZDogTC5MYXRMbmdbXSB9O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdGhlIGNvcmUgb2YgdGhlIHdob2xlIHJlcG8uXG4gKlxuICogVGhlIGZ1bmN0aW9uIHJlY2VpdmVzIGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuIHJlY3RhbmdsZSBhbmQgd2FudHMgdG8gZmlndXJlIG91dFxuICogdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXJzIG9mIGNpcmNsZXMsIHN1Y2ggdGhhdCB0aGUgY2lyY2xlcyBmaWxsIG91dCB0aGUgd2hvbGUgcmVjdGFuZ2xlLlxuICogV2UgYWxsb3cgZm9yIHRoZSBjaXJjbGVzIHRvIG92ZXJsYXAuXG4gKlxuICogQWxsIGNpcmNsZXMgZGlzY3Vzc2VkIGJlbG93IGhhdmUgdGhlIHNhbWUgcmFkaXVzIChSID0gQG9wdGlvbnMuZGlzdC8yKS5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gXCJpdGVyYXRlc1wiIHRoZSByZWN0YW5nbGUgZnJvbSB3ZXN0LXRvLWVhc3QsIG5vcnRoLXRvLXNvdXRoLlxuICogQSByb3cgaXMgY3JlYXRlQ29vcmRpbmF0ZXNSZXR1cm4gXCJsaW5lXCIgZnJvbSB3ZXN0LXRvLWVhc3QuXG4gKlxuICogT24gZWFjaCByb3cgdGhlIGNpcmNsZXMgYXJlIG5leHQgdG8gZWFjaCBvdGhlciwgd2l0aG91dCBvdmVybGFwcGluZyAoaS5lLiAwIGRpc3RhbmNlIGIvdyBjaXJjbGVzIG9uIGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuIHJvdylcbiAqIFRoZXJlJ3Mgbm8gZGlzdGFuY2UgYmV0d2VlbiBjaXJjbGVzIG9uIGFkamFjZW50IGNvbHVtbnMgdG9vLlxuICogVGhpcyBtZWFucyB0aGF0IHRoZXNlIFwibWFpblwiIGNpcmNsZXMgd2lsbCBub3QgZmlsbCB1cCB0aGUgd2hvbGUgcmVjdGFuZ2xlLlxuICpcbiAqIFRodXMsIGJldHdlZW4gZWFjaCB0d28gYWRqYWNlbnQgXCJtYWluXCIgcm93cyAoZS5nLiByb3dzIEEgYW5kIEIpICB3ZSBpbnNlcnQgY3JlYXRlQ29vcmRpbmF0ZXNSZXR1cm4gZmlsbGVyIHJvdyAoRikuXG4gKiBSb3cgRiBpcyBlZmZlY3RpdmVseSBjb3B5IG9mIEEgYnV0IHNoaWZ0ZWQgZmlyc3Qgc291dGggYW5kIHRoZW4gZWFzdCBieSB0aGUgcmFkaXVzIFIuIFRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGZpbGxlclxuICogcm93IGlzIHJlbW92ZWQgc2luY2UgaXQncyB0b28gZmFyIGZyb20gdGhlIGVhc3QgZW5kIG9mIHRoZSBib3VuZGluZyByZWN0YW5nbGUuXG4gKlxuICogQHBhcmFtIHtjcmVhdGVDb29yZGluYXRlc09wdHN9IG9wdGlvbnMuIC5kaXN0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBjZW50ZXJzIG9mIHR3byBjaXJjbGVzLiBpLmUuIGl0IGlzIHRoZSByYWRpdXMgb2YgY3JlYXRlQ29vcmRpbmF0ZXNSZXR1cm4gY2lyY2xlXG4gKiBAcmV0dXJuIHtjcmVhdGVDb29yZGluYXRlc1JldHVybn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvb3JkaW5hdGVzKG9wdGlvbnM6IGNyZWF0ZUNvb3JkaW5hdGVzT3B0cyk6IGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuIHtcbiAgICBjb25zdCByZXN1bHQ6IEwuTGF0TG5nW10gPSBbXSwgZmlsbGVyczogTC5MYXRMbmdbXSA9IFtdO1xuXG4gICAgY29uc3QgcmVjdEJvdW5kcyA9IG9wdGlvbnMuYm91bmRpbmdSZWN0YW5nbGUuZ2V0Qm91bmRzKCk7XG4gICAgY29uc3QgaW5pdGlhbFBvaW50ID0gT2JqZWN0LmZyZWV6ZShyZWN0Qm91bmRzLmdldE5vcnRoV2VzdCgpKTtcblxuICAgIGxldCBjdXJyZW50Q29vcmQ6IEwuTGF0TG5nID0gaW5pdGlhbFBvaW50O1xuICAgIGxldCBjdXJyZW50Um93SW5pdGlhbCA9IGN1cnJlbnRDb29yZDtcbiAgICBmb3IgKGxldCByb3cgPSAxOyA7IHJvdysrKSB7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRSb3dDaXJjbGVzQ29vcmRzID0gY2lyY2xlQ29vcmRzT2ZSb3cocmVjdEJvdW5kcywgY3VycmVudFJvd0luaXRpYWwsIG9wdGlvbnMuZGlzdGFuY2UpO1xuICAgICAgICByZXN1bHQucHVzaCguLi5jdXJyZW50Um93Q2lyY2xlc0Nvb3Jkcyk7XG5cbiAgICAgICAgbGV0IGZpbGxlckZpcnN0Q29vcmQgPSBtb3ZlVG9Tb3V0aEVhc3QoY3VycmVudFJvd0luaXRpYWwsIG9wdGlvbnMuZGlzdGFuY2UpO1xuXG4gICAgICAgIGlmICghaXNXaXRoaW5Cb3VuZHMoW3JlY3RCb3VuZHMuZ2V0Tm9ydGgoKSwgcmVjdEJvdW5kcy5nZXRTb3V0aCgpXSwgY3VycmVudENvb3JkLmxhdCkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGhlbHBlclJvd0Nvb3JkczogTC5MYXRMbmdbXSA9IGNpcmNsZUNvb3Jkc09mUm93KHJlY3RCb3VuZHMsIGZpbGxlckZpcnN0Q29vcmQsIG9wdGlvbnMuZGlzdGFuY2UpO1xuICAgICAgICAgICAgaGVscGVyUm93Q29vcmRzLnBvcCgpO1xuICAgICAgICAgICAgZmlsbGVycy5wdXNoKC4uLmhlbHBlclJvd0Nvb3Jkcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50Um93SW5pdGlhbCA9IGN1cnJlbnRDb29yZCA9IGNhbGN1bGF0ZU5leHRQb2ludChpbml0aWFsUG9pbnQsIG9wdGlvbnMuZGlzdGFuY2UgKiByb3csIEJlYXJpbmcuc291dGgpLnBvaW50O1xuICAgIH1cbiAgICByZXR1cm4ge21haW46IHJlc3VsdCwgZmlsbGVyczogZmlsbGVycywgY29tYmluZWQ6IHJlc3VsdC5jb25jYXQoZmlsbGVycyl9XG5cbn1cblxuLyoqXG4gKiAoZ2VuZXJhdGVzIHJvd3MgZm9yIGNyZWF0ZUNvb3JkaW5hdGVzKCkpXG4gKiBHZW5lcmF0ZSB0aGUgY29vcmRpbmF0ZXMgb2YgY2lyY2xlcyBvbiBjcmVhdGVDb29yZGluYXRlc1JldHVybiBnZW5lcmljIHJvdyAoaS5lLiB1c2VkIGZvciBib3RoIFwibWFpblwiL1wiZmlsbGVyXCIgcm93cykuXG4gKlxuICogVGhlIGZ1bmN0aW9uIHN0YXJ0cyBmcm9tIGNyZWF0ZUNvb3JkaW5hdGVzUmV0dXJuIGdpdmVuIEBpbml0aWFsQ29vcmQgYW5kIG1vdmVzIGVhc3QuIE9uIGVhY2ggaXRlcmF0aW9uIGl0IGNoZWNrcyBpZiB0aGUgY3VycmVudFxuICogY29vcmRpbmF0ZSBpcyB3aXRoaW4gdGhlIGxvbmdpdHVkZSBib3VuZHMgb2YgdGhlIHJlY3QgKGkuZS4gYXQgbW9zdCBvbmUgY2lyY2xlIGJleW9uZCB0aGUgZWFzdCBzaWRlIG9mIHRoZSByZWN0KS5cbiAqIElmIGl0J3MgYmV5b25kIC0gdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJvdy4gU2luY2Ugd2UgYWRkIHRvIHRoZSByZXN1bHQgYmVmb3JlIHdlIG1ha2UgdGhlIGJvdW5kIGNoZWNrLFxuICogd2UgYWxsb3cgZm9yIGF0IG1vc3Qgb25lIGNpcmNsZSBiZXlvbmQgdGhlIGJvdW5kcy5cbiAqXG4gKiBAcGFyYW0ge0xhdExuZ0JvdW5kc30gYm91bmRzIC0gdGhlIGJvdW5kcyBvZiB0aGUgYmlnIHJlY3RhbmdsZSBhcm91bmQgdGhlIGNpdHlcbiAqIEBwYXJhbSB7TGF0TG5nfSBpbml0aWFsQ29vcmQgLSB3aGVyZSBpcyB0aGUgY2VudHJlIG9mIHRoZSBmaXJzdCBjaXJjbGUgb24gdGhhdCByb3dcbiAqIEBwYXJhbSBkaXN0YW5jZSAtIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBjZW50ZXJzIG9mIHR3byBhZGphY2VudCBjaXJjbGVzIG9uIHRoaXMgcm93XG4gKiBAcmV0dXJuIHtMYXRMbmdbXX0gdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXJzIG9mIGFsbCBjaXJjbGVzIG9uIHRoaXMgcm93XG4gKi9cbmZ1bmN0aW9uIGNpcmNsZUNvb3Jkc09mUm93KGJvdW5kczogTC5MYXRMbmdCb3VuZHMsIGluaXRpYWxDb29yZDogTC5MYXRMbmcsIGRpc3RhbmNlKSB7XG4gICAgY29uc3QgZWFzdEJvdW5kID0gYm91bmRzLmdldEVhc3QoKTtcblxuICAgIGxldCByZXN1bHQ6IEwuTGF0TG5nW10gPSBbXTtcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uOiBMLkxhdExuZyA9IGluaXRpYWxDb29yZDtcbiAgICBmb3IgKDsgOykge1xuICAgICAgICByZXN1bHQucHVzaChjdXJyZW50UG9zaXRpb24pO1xuICAgICAgICAvKlxuICAgICAgICB1c2UgaW5pdGlhbENvb3JkLmxuZyBpbnN0ZWFkIG9mIFwid2VzdEJvdW5kXCIgYmVjYXVzZSBvZiBjcmVhdGVDb29yZGluYXRlc1JldHVybiBudW1lcmljYWwgZXJyb3IgcHJvcGFnYXRlZCB1cCBmcm9tIGNhbGN1bGF0ZU5leHRQb2ludCgpLlxuICAgICAgICB0aGUgZXJyb3IgaW5jcmVhc2VzIHRoZSBtb3JlIHdlIGdvIHNvdXRoIGZyb20gdGhlIG5vcnRoLXdlc3QgcG9pbnQgb2YgQGJvdW5kcy5cblxuICAgICAgICB0bDtkciBpdCdzIGR1ZSB0byB0aGUgZmFjdCB0aGF0IHRoZSBlYXJ0aCBoYXMgYW4gaW1wZXJmZWN0IHNoYXBlXG4gICAgICAgICovXG4gICAgICAgIGlmICghaXNXaXRoaW5Cb3VuZHMoW2luaXRpYWxDb29yZC5sbmcsIGVhc3RCb3VuZF0sIGN1cnJlbnRQb3NpdGlvbi5sbmcpKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IGNhbGN1bGF0ZU5leHRQb2ludChjdXJyZW50UG9zaXRpb24sIGRpc3RhbmNlLCBCZWFyaW5nLmVhc3QpLnBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vdmVUb1NvdXRoRWFzdChjdXJyZW50Um93SW5pdGlhbCwgZGlzdCkge1xuICAgIGxldCBzaGlmdFNvdXRoID0gY2FsY3VsYXRlTmV4dFBvaW50KGN1cnJlbnRSb3dJbml0aWFsLCBkaXN0IC8gMiwgQmVhcmluZy5zb3V0aCkucG9pbnQ7XG4gICAgcmV0dXJuIGNhbGN1bGF0ZU5leHRQb2ludChzaGlmdFNvdXRoLCBkaXN0IC8gMiwgQmVhcmluZy5lYXN0KS5wb2ludDtcbn1cblxuLy8gaS5lLiBkaXJlY3Rpb25cbmVudW0gQmVhcmluZyB7XG4gICAgZWFzdCA9IDkwLFxuICAgIHdlc3QgPSAtOTAsXG5cbiAgICBub3J0aCA9IDAsXG4gICAgc291dGggPSAxODBcbn1cblxuZW51bSBSZWN0YW5nbGVTaWRlIHtcbiAgICAvLyB0b2RvIGFkZCBvdGhlcnNcbiAgICBub3J0aFdlc3QgPSBcIk5vcnRoV2VzdFwiXG59XG5cblxuXG4iLCJpbXBvcnQge21hcCwgZHJhd0NpcmNsZXMsIGVuYWJsZURyYXdpbmd9IGZyb20gXCIuL21hcFwiXG5pbXBvcnQge0RFRkFVTFRfQ0lSQ0xFX1JBRElVUywgY3JlYXRlQ29vcmRpbmF0ZXN9IGZyb20gXCIuL2NvcmVcIlxuXG5kZWNsYXJlIGxldCAkOyAvLyBqcXVlcnkgYW5kIGxlYWZsZXQgYXJlIFwiaW1wb3J0ZWRcIiBpbiB0aGUgaHRtbCB2aWEgPHNjcmlwdD5cbmRlY2xhcmUgbGV0IEw7XG5cblxuLyoqXG4gKiBPcmNoZXN0cmF0ZSBpdCBhbGxcbiAqL1xuKGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAvLyB0aGUgbGVhZmxldCBsYXllciBvbiB3aGljaCB0aGUgY2lyY2xlcyBnZW5lcmF0ZWQgY2lyY2xlcyB3aWxsIGJlIGRyYXduXG4gICAgY29uc3QgY2lyY2xlc0xheWVyID0gbmV3IEwuRmVhdHVyZUdyb3VwKCkuYWRkVG8obWFwKTtcblxuICAgIC8vIHNldCBkZWZhdWx0IGNpcmNsZSByYWRpdXNcbiAgICAkKFwiI3JhZGl1cy1zaXplXCIpLmF0dHIoXCJ2YWx1ZVwiLCBERUZBVUxUX0NJUkNMRV9SQURJVVMpO1xuXG4gICAgLy8gYXR0YWNoIGEgY2FsbGJhY2sgdG8gdGhlIGV2ZW50IHdoZW4gYSB1c2VyIGhhcyBkcmF3biBhIHJlY3RhbmdsZSBvbiB0aGUgbWFwLlxuICAgIC8vIHRoZSBkZWZpbmluZyBjb29yZHMgb2YgdGhlIHJlY3RhbmdsZSBhcmUgdGhlbiBwYXNzZWQgdG8gYSBjYWxsYmFjayB0aGF0IHdlIHNldCBoZXJlXG4gICAgZW5hYmxlRHJhd2luZyhcbiAgICAgICAgb25DaXR5Qm91bmRhcnlSZWFkeS5iaW5kKG51bGwsIGNpcmNsZXNMYXllciksXG4gICAgICAgIGNpcmNsZXNMYXllci5jbGVhckxheWVycyk7XG59KSgpO1xuXG4vKipcbiAqIEdpdmVuIGEgYm91bmRpbmcgcmVjdGFuZ2xlIGFuZCBhIFwiY2FudmFzXCIsIGdlbmVyYXRlZCB0aGUgY2lyY2xlcyBhbmQgZmlsbCB0aGUgY2FudmFzIHdpdGggdGhlbVxuICpcbiAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBib3VuZGluZ1JlY3RhbmdsZVxuICogQHBhcmFtIGNpcmNsZXNMYXllciAtIHRoZSBcImNhbnZhc1wiXG4gKi9cbmZ1bmN0aW9uIHJlZ2VuZXJhdGUoYm91bmRpbmdSZWN0YW5nbGU6IEwuUmVjdGFuZ2xlLCBjaXJjbGVzTGF5ZXIpIHtcbiAgICAvLyB3aXBlIG91dCBleGlzdGluZyBjaXJjbGVzXG4gICAgY2lyY2xlc0xheWVyLmNsZWFyTGF5ZXJzKCk7XG5cbiAgICAvLyB0aGUgcmFkaXVzIG9mIHRoZSBjaXJjbGVzIHRoYXQgd2lsbCBmaWxsIHRoZSByZWN0YW5nbGVcbiAgICBjb25zdCBjaXJjbGVfcmFkaXVzID0gZ2V0VXNlclNlbGVjdGVkQ2lyY2xlUmFkaXVzKCk7IC8vIG1ldHJlc1xuICAgIGNvbnNvbGUubG9nKGAke2NpcmNsZV9yYWRpdXN9IGNpcmNsZSByYWRpdXNgKTtcblxuICAgIC8vIGdlbmVyYXRlIGFsbCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGNpcmNsZXMgd2l0aGluIHRoZSBib3VuZGluZyBhcmVhXG4gICAgLy8gKm9ubHkqIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgKmNlbnRlciogb2YgdGhlIGNpcmNsZXMgaXMgcmV0dXJuZWRcbiAgICBjb25zdCBjb29yZHMgPSBjcmVhdGVDb29yZGluYXRlcyh7XG4gICAgICAgIGJvdW5kaW5nUmVjdGFuZ2xlOiBib3VuZGluZ1JlY3RhbmdsZSxcbiAgICAgICAgZGlzdGFuY2U6IGNpcmNsZV9yYWRpdXMgKiAyLFxuICAgIH0pO1xuICAgIC8vIC5tYWluICYgLmZpbGxlcnMgaXMgdXNlZCB0byBkZWJ1ZyBlYXNpbHkuIFRoZSB1bmlvbiBvZiB0aGUgdHdvIHNldHMgb2YgY2lyY2xlc1xuICAgIC8vIGlzIGluIC5jb21iaW5lZFxuICAgIGRyYXdDaXJjbGVzKGNvb3Jkcy5tYWluLCBjaXJjbGVzTGF5ZXIsIGNpcmNsZV9yYWRpdXMpO1xuICAgIGRyYXdDaXJjbGVzKGNvb3Jkcy5maWxsZXJzLCBjaXJjbGVzTGF5ZXIsIGNpcmNsZV9yYWRpdXMsIHtjb2xvcjogJ2dyZWVuJ30pO1xuXG4gICAgbGV0IGRvd25sb2FkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkLWJ0bicpO1xuXG4gICAgY29uc29sZS5sb2coYGdlbmVyYXRlZCAke2Nvb3Jkcy5jb21iaW5lZC5sZW5ndGh9IGNpcmNsZXMgYCk7XG5cbiAgICBkb3dubG9hZEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0b1NhdmUgPSB7XG4gICAgICAgICAgICBjb29yZGluYXRlczogY29vcmRzLmNvbWJpbmVkLFxuICAgICAgICAgICAgY2lyY2xlUmFkaXVzOiBjaXJjbGVfcmFkaXVzXG4gICAgICAgIH07XG4gICAgICAgIHNhdmVGaWxlKEpTT04uc3RyaW5naWZ5KHRvU2F2ZSksIGBjb29yZHNfJHt0b1NhdmUuY29vcmRpbmF0ZXMubGVuZ3RofV9yJHtjaXJjbGVfcmFkaXVzfS5qc29uYCwgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB9O1xufVxuXG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgaGFzIGRyYXduIGEgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gY2lyY2xlc0xheWVyIHRoZSBsYXllciBvbiB3aGljaCB3ZSB3YW50IHRvIGRyYXcgdGhlIGdlbmVyYXRlZCBjaXJjbGVzXG4gKiBAcGFyYW0ge0xhdExuZ1tdfSBkcmF3blJlY3RhbmdsZVxuICovXG5mdW5jdGlvbiBvbkNpdHlCb3VuZGFyeVJlYWR5KGNpcmNsZXNMYXllciwgZHJhd25SZWN0YW5nbGU6IEwuUmVjdGFuZ2xlKSB7XG4gICAgY2lyY2xlc0xheWVyLmNsZWFyTGF5ZXJzKCk7XG5cbiAgICBjb25zdCByZWRyYXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnZW5lcmF0ZS1idG4nKTtcbiAgICByZWRyYXdCdG4ub25jbGljayA9IHJlZ2VuZXJhdGUuYmluZChudWxsLCBkcmF3blJlY3RhbmdsZSwgY2lyY2xlc0xheWVyKTtcbiAgICByZWRyYXdCdG4uY2xpY2soKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlclNlbGVjdGVkQ2lyY2xlUmFkaXVzKCkge1xuICAgIHJldHVybiBOdW1iZXIoJChcIiNyYWRpdXMtc2l6ZVwiKS52YWwoKSk7XG59XG5cblxuLyoqXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzM1NDI0OTlcbiAqIFNhdmUgYSBmaWxlIHRvIHRoZSBsb2NhbCBmaWxlc3lzdGVtXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIGZpbGVuYW1lXG4gKiBAcGFyYW0gY29udGVudFR5cGVcbiAqL1xuZnVuY3Rpb24gc2F2ZUZpbGUoZGF0YSwgZmlsZW5hbWUsIGNvbnRlbnRUeXBlKSB7XG4gICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0sIHt0eXBlOiBjb250ZW50VHlwZX0pO1xuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVuYW1lKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBlbGVtID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgZWxlbS5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGVsZW0uZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgZWxlbS5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9