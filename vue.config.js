const path = require("path")

module.exports = {
    chainWebpack: config => {
        const app = config.entry("app");
        app.clear();
        app.add("./src/main.ts");
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve("src"),
            }
        }
    },
    assetsDir: 'assets'
}