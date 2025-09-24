// babel.config.js é um arquivo de configuração para o Babel, que é um transpilador JavaScript amplamente utilizado em projetos React Native e Expo. Ele define como o código JavaScript deve ser transformado antes de ser executado no ambiente de destino.

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      "react-native-reanimated/plugin",
    ],
  };
};