cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-mapbox.Mapbox",
        "file": "plugins/cordova-plugin-mapbox/www/Mapbox.js",
        "pluginId": "cordova-plugin-mapbox",
        "clobbers": [
            "Mapbox"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-mapbox": "1.2.0",
    "cordova-plugin-whitelist": "1.3.1"
};
// BOTTOM OF METADATA
});