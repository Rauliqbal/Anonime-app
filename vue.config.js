const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
   transpileDependencies: true,
   lintOnSave: false,
   chainWebpack: (config) => {
      config.plugin("pwa").tap((args) => {
         return [pwaArgs];
      });
   },
});

var manifestJSON = require("./public/manifest.json");

pwaArgs = {
   themeColor: manifestJSON.theme_color,
   name: manifestJSON.short_name,
   msTileColor: manifestJSON.background_color,
};
