const leaflet = (function () {
    let map;
    let layerForUserRectangles;

    function init() {
        map = L.map('map').setView([42.697930, 23.321628], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <createCoordinatesReturn href="http://openstreetmap.org">OpenStreetMap</createCoordinatesReturn> contributors, <createCoordinatesReturn href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</createCoordinatesReturn>, Imagery © <createCoordinatesReturn href="http://mapbox.com">Mapbox</createCoordinatesReturn>',
            maxZoom: 18,
            id: 'mapbox.streets-basic',
            accessToken: 'pk.eyJ1IjoiY2hpcHNhbiIsImEiOiJqa0JwV1pnIn0.mvduWzyRdcHxK_QIOpetFg'
        }).addTo(map);


        // the collapsible sidebar with redraw/download etc. custom buttons
        L.control.sidebar('sidebar').addTo(map);

        // where we draw rectangles
        layerForUserRectangles = new L.FeatureGroup();
        map.addLayer(layerForUserRectangles);

        let drawControl = new L.Control.Draw({
            edit: {
                featureGroup: layerForUserRectangles
            },
            draw: {
                circle: false,
                circlemarker: false,
                marker: false,
                polygon: false,
                polyline: false,
            }
        });
        map.addControl(drawControl);

    }


    function enableDrawing(callbackOnRectDrawn: (rectangle: L.Rectangle) => any, callbackOnDelete: () => void) {
        // todo handle "edited" too
        leaflet.map.on('draw:created', function (e) {
            let type = e.layerType,
                layer = e.layer;
            if (type !== "rectangle") {
                return true
            }
            layerForUserRectangles.clearLayers();
            console.log(type)
            let latlngs = layer.getLatLngs()[0];
            layerForUserRectangles.addLayer(layer);
            console.log(JSON.stringify(latlngs));

            // convert the result
            const rectangleBounds: L.LatLngBounds = L.latLngBounds(latlngs.map(function (coord): [number, number] {
                return [coord.lat, coord.lng]
            }));
            const boundingRectangle: L.Rectangle = L.rectangle(rectangleBounds);

            // pass the drawn rectangle to the callback
            callbackOnRectDrawn(boundingRectangle);
        });
        leaflet.map.on("draw:deleted", callbackOnDelete)

    }

    /**
     * Given a layer, coordinates of the center of circles and the radius of the circle,
     * draw the circles on the layer
     * @param {LatLng[]} coords
     * @param {LayerGroup} layer
     * @param {number} circleRadius
     * @param {{}} circleOptions
     */
    function drawCircles(coords: L.LatLng[], layer: L.LayerGroup, circleRadius = 300, circleOptions = {}) {
        let opts = {
            color: "red",
            ...circleOptions
        };
        coords.forEach((coord: L.LatLng) => {
            new L.Circle(coord, circleRadius, opts).addTo(layer)
        })
    }


    init()
    return {
        map: map,
        enableDrawing: enableDrawing,
        drawCircles: drawCircles
    }
})();