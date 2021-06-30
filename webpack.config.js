const path = require("path");

const themeEntries = require('./MapStore2/build/themes.js').themeEntries;
const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;
const ModuleFederationPlugin = require('./MapStore2/build/moduleFederation').plugin;

module.exports = require('./MapStore2/build/buildConfig')({
        'topiomaps': path.join(__dirname, "js", "app"),
        'topiomaps-embedded': path.join(__dirname, "js", "embedded"),
        'topiomaps-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api"),
        'geostory-embedded': path.join(__dirname, "js", "geostoryEmbedded"),
        "dashboard-embedded": path.join(__dirname, "js", "dashboardEmbedded")
    }, {
        "themes/default": path.join(__dirname, "themes", "default", "theme.less")
    }, {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    [extractThemesPlugin, ModuleFederationPlugin],
    false,
    "dist/",
    '.topiomaps',
    [], {
        "@mapstore": path.resolve(__dirname, "MapStore2", "web", "client"),
        "@js": path.resolve(__dirname, "js")
    }, {
        '/rest': {
            target: "http://cld06.georepublic.net/topiomaps",
            secure: false,
            headers: {
                host: "cld06.georepublic.net"
            }
        },
        '/pdf': {
            target: "http://cld06.georepublic.net/topiomaps",
            secure: false,
            headers: {
                host: "cld06.georepublic.net"
            }
        },
        '/mapstore/pdf': {
            target: "http://cld06.georepublic.net/",
            secure: false,
            headers: {
                host: "cld06.georepublic.net"
            }
        },
        '/proxy': {
            target: "http://cld06.georepublic.net/topiomaps",
            secure: false,
            headers: {
                host: "cld06.georepublic.net"
            }
        },
        '/docs': {
            target: "http://cld06.georepublic.net",
            pathRewrite: {'/docs': '/topiomaps/docs'}
        }
    }
);
