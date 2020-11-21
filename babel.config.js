module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            "tests": ["./tests/"],
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@atoms": "./src/components/atoms",
            "@molecules": "./src/components/molecules",
            "@organisms": "./src/components/organisms",
            "@navigations": "./src/navigations",
            "@scenes": "./src/scenes",
            "@services": "./src/services",
            "@styles": "./src/styles",
            "@utils": "./src/utils"
          }
        }
      ]
    ]
  };
};
