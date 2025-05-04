const config = {
  appId: "im.riot.app",
  productName: "Element",
  files: [
    "package.json",
    {
      from: ".hak/hakModules",
      to: "node_modules",
    },
    "lib/**",
  ],
  extraResources: [
    {
      from: "res/img",
      to: "img",
    },
    "webapp.asar",
  ],
  mac: {
    category: "public.app-category.social-networking",
    darkModeSupport: true,
    hardenedRuntime: false,
    gatekeeperAssess: false,
    entitlements: "./build/entitlements.mac.plist",
    icon: "build/icons/icon.icns",
    identity: null
  },
  electronFuses: {
    enableCookieEncryption: true,
    onlyLoadAppFromAsar: true,
    grantFileProtocolExtraPrivileges: false,
    runAsNode: false,
    enableNodeOptionsEnvironmentVariable: false,
    enableNodeCliInspectArguments: false,
    resetAdHocDarwinSignature: false,
    loadBrowserProcessSpecificV8Snapshot: false,
    enableEmbeddedAsarIntegrityValidation: false
  }
};

module.exports = config;

