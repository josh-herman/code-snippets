This expression takes in a list a report layer and a list of layers, performs an Intersect on each one, and returns a feature set of the features in the report layer that intersect at least one feature from the list of layers. Designed for use in the Indicator in ArcGIS Operations Dashboards. 

```
var portal = Portal('https://www.arcgis.com');

// The layer that you want to report on
var reportLayerInfo = {
    itemId: "03d51c71dab4471d85c40f434d0c9cd3",
    layerIndex: 0,
    fields: ["*"],
    returnGeometry: true
};

// Add more objects to this array using the format below to include more layers.
var projectLayers = [
    {
        itemId: "7864df6c1f374845b42a6c471460d650",
        layerIndex: 0,
        fields: ["*"],
        returnGeometry: true
    },
    {
        itemId: "663fd6338ec74e43a57cafc4afda9b01",
        layerIndex: 0,
        fields: ["*"],
        returnGeometry: true
    },
];

var reportLayer = FeatureSetByPortalItem(portal, reportLayerInfo["itemId"], reportLayerInfo["layerIndex"], reportLayerInfo["fields"], reportLayerInfo["returnGeometry"]);

function stateInResults(oid) {
    for (var i in results) {
        if (oid == i) { return true; };
    };
    return false;
};

var results = [];

for (var state in reportLayer) {
    var oidText = Text(state.OBJECTID);

    if (stateInResults(oidText)) { break; };

    for (var layer in projectLayers) {

        var currentLayer = FeatureSetByPortalItem(portal, projectLayers[layer]["itemId"], projectLayers[layer]["layerIndex"], projectLayers[layer]["fields"], projectLayers[layer]["returnGeometry"]);
        for (var feature in currentLayer) {
            if (Intersects(state, feature)) {
                Push(results, Text(oidText));
                break;
            };
        };
    };
};

return Filter(reportLayer, `OBJECTID IN (${Concatenate(results, ',')})`);
```