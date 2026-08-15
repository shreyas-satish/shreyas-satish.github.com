(function () {
  var world = new WorldView({
    mapid: "map",
    imagesPath: "/media/wv_images/",
    cssPath: "/css/map.css",
    layers: { OSM: {} },
    initialCoordinates: { lon: 6.056181, lat: 46.233988 },
    initialZoom: 16
  });

  window.world = world;

  var vectorLayer = new WorldView.VectorLayer(world.map, {
    events: true,
    featureSelected: onFeatureSelect,
    featureUnselected: onFeatureUnselect
  });

  var marker = vectorLayer.addMarker({
    lon: 6.056181,
    lat: 46.233988,
    style: {
      externalGraphic: "/media/wv_images/marker.png",
      graphicHeight: 25,
      graphicWidth: 15,
      graphicOpacity: 1.0
    }
  });

  function onFeatureSelect() {
    vectorLayer.addPopup({
      feature: marker,
      content: "<div style='color:red;margin-top:20px;'>This is CERN.</div>",
      width: 100,
      height: 100
    });
  }

  function onFeatureUnselect() {}

  world.initToolbar({
    vectorLayer: vectorLayer,
    controls: {
      navigate: {},
      point: {},
      line: {},
      polygon: {},
      drag: {}
    }
  });

  WorldView.Toolbar.featureAdded = function (feature) {
    alert(feature.geometry);
  };
}());
