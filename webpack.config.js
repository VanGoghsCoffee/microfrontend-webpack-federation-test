const {
  withModuleFederationPlugin,
  shareAll,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",
  filename: "remoteEntry.js",

  exposes: {
    "./UsersModule": "./src/app/user-list/user-list.module.ts",
    "./AuthModuleModule":
      "./src/app/_modules/auth-module/auth-module.module.ts",
    "./GreetingCard":
      "./src/app/_modules/component-library/card/greeting-card/greeting-card.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
