var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIGraydark_2 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_WETLANDSWATERBODIES_3 = new ol.format.GeoJSON();
var features_WETLANDSWATERBODIES_3 = format_WETLANDSWATERBODIES_3.readFeatures(json_WETLANDSWATERBODIES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WETLANDSWATERBODIES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WETLANDSWATERBODIES_3.addFeatures(features_WETLANDSWATERBODIES_3);
var lyr_WETLANDSWATERBODIES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WETLANDSWATERBODIES_3, 
                style: style_WETLANDSWATERBODIES_3,
                popuplayertitle: 'WETLANDS/WATERBODIES',
                interactive: true,
                title: '<img src="styles/legend/WETLANDSWATERBODIES_3.png" /> WETLANDS/WATERBODIES'
            });
var format_Location_4 = new ol.format.GeoJSON();
var features_Location_4 = format_Location_4.readFeatures(json_Location_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Location_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_4.addFeatures(features_Location_4);
cluster_Location_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Location_4
});
var lyr_Location_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Location_4, 
                style: style_Location_4,
                popuplayertitle: 'Location',
                interactive: true,
    title: 'Location<br />\
    <img src="styles/legend/Location_4_0.png" /> Existing<br />\
    <img src="styles/legend/Location_4_1.png" /> Not Found<br />' });
var format_TBDCM_5 = new ol.format.GeoJSON();
var features_TBDCM_5 = format_TBDCM_5.readFeatures(json_TBDCM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TBDCM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TBDCM_5.addFeatures(features_TBDCM_5);
var lyr_TBDCM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TBDCM_5, 
                style: style_TBDCM_5,
                popuplayertitle: 'TBDCM',
                interactive: true,
    title: 'TBDCM<br />\
    <img src="styles/legend/TBDCM_5_0.png" /> 4<br />\
    <img src="styles/legend/TBDCM_5_1.png" /> 5<br />\
    <img src="styles/legend/TBDCM_5_2.png" /> 6<br />\
    <img src="styles/legend/TBDCM_5_3.png" /> 7<br />\
    <img src="styles/legend/TBDCM_5_4.png" /> 8<br />' });
var format_DistrictBoundary_6 = new ol.format.GeoJSON();
var features_DistrictBoundary_6 = format_DistrictBoundary_6.readFeatures(json_DistrictBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictBoundary_6.addFeatures(features_DistrictBoundary_6);
var lyr_DistrictBoundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictBoundary_6, 
                style: style_DistrictBoundary_6,
                popuplayertitle: 'District Boundary',
                interactive: true,
                title: '<img src="styles/legend/DistrictBoundary_6.png" /> District Boundary'
            });
var format_StateBoundary_7 = new ol.format.GeoJSON();
var features_StateBoundary_7 = format_StateBoundary_7.readFeatures(json_StateBoundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateBoundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundary_7.addFeatures(features_StateBoundary_7);
var lyr_StateBoundary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBoundary_7, 
                style: style_StateBoundary_7,
                popuplayertitle: 'State Boundary',
                interactive: true,
                title: '<img src="styles/legend/StateBoundary_7.png" /> State Boundary'
            });
var group_AdministrativeBoundary = new ol.layer.Group({
                                layers: [lyr_DistrictBoundary_6,lyr_StateBoundary_7,],
                                fold: "open",
                                title: 'Administrative Boundary'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_ESRIGraydark_2.setVisible(true);lyr_WETLANDSWATERBODIES_3.setVisible(true);lyr_Location_4.setVisible(true);lyr_TBDCM_5.setVisible(true);lyr_DistrictBoundary_6.setVisible(true);lyr_StateBoundary_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_ESRIGraydark_2,lyr_WETLANDSWATERBODIES_3,lyr_Location_4,lyr_TBDCM_5,group_AdministrativeBoundary];
lyr_WETLANDSWATERBODIES_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'UN_ID': 'UN_ID', 'NAME': 'Name of Waterbodies', 'Y': 'Latitude', 'X': 'Longitude', 'District': 'District', 'Village': 'Village', 'Area': 'Area(Ha)', 'Khasra': 'Khasra No', 'Ownership': 'Land Ownership', });
lyr_Location_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'S_No': 'S_No', 'Wetland_Na': 'Wetland_Na', 'Y': 'Y', 'X': 'X', 'Village': 'Village', 'Remarks': 'Remarks', 'Status': 'Status', });
lyr_TBDCM_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'arcid': 'arcid', 'grid_code': 'grid_code', 'from_node': 'from_node', 'to_node': 'to_node', 'Shape_Length': 'Shape_Length', });
lyr_DistrictBoundary_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'shapeName': 'District (s)', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Area': 'Area(SQ.KM)', });
lyr_StateBoundary_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Name': 'Name', 'Area': 'Area(SQ.KM)', 'Population': 'Population(2021)', });
lyr_WETLANDSWATERBODIES_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'UN_ID': 'TextEdit', 'NAME': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'District': 'TextEdit', 'Village': 'TextEdit', 'Area': 'TextEdit', 'Khasra': 'TextEdit', 'Ownership': 'TextEdit', });
lyr_Location_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'S_No': 'TextEdit', 'Wetland_Na': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Village': 'TextEdit', 'Remarks': 'TextEdit', 'Status': 'TextEdit', });
lyr_TBDCM_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'arcid': 'Range', 'grid_code': 'Range', 'from_node': 'Range', 'to_node': 'Range', 'Shape_Length': 'TextEdit', });
lyr_DistrictBoundary_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'shapeName': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area': 'TextEdit', });
lyr_StateBoundary_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', 'Population': 'Range', });
lyr_WETLANDSWATERBODIES_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'UN_ID': 'hidden field', 'NAME': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'X': 'inline label - visible with data', 'District': 'inline label - visible with data', 'Village': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Khasra': 'inline label - visible with data', 'Ownership': 'inline label - visible with data', });
lyr_Location_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'S_No': 'hidden field', 'Wetland_Na': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Village': 'inline label - visible with data', 'Remarks': 'inline label - visible with data', 'Status': 'hidden field', });
lyr_TBDCM_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'arcid': 'hidden field', 'grid_code': 'inline label - visible with data', 'from_node': 'inline label - visible with data', 'to_node': 'inline label - visible with data', 'Shape_Length': 'hidden field', });
lyr_DistrictBoundary_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'shapeName': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Area': 'inline label - visible with data', });
lyr_StateBoundary_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Population': 'inline label - visible with data', });
lyr_StateBoundary_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});