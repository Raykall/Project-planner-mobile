// metro.config.js é um arquivo de configuração para o Metro, que é o bundler padrão usado em projetos React Native e Expo. Ele define como os arquivos do projeto devem ser processados e empacotados para execução no dispositivo ou emulador.

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './src/styles/global.css' })