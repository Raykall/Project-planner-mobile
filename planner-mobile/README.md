## Planner Mobile - Frontend

An interesting and comprehensive mobile application for communication and user interaction. Therefore, I will provide everything necessary to take advantage of and execute this project.

### 🚀 Getting Started

Prerequisites:
- Node.js 18+ and npm 9+ (or Yarn/Pnpm)
- Expo CLI (optional) and an Android/iOS emulator or Expo Go app

Installation:
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run in development mode (Expo Dev Tools):
   ```bash
   npm run start
   ```
3. Specific platforms:
   - Android (emulator/device):
     ```bash
     npm run android
     ```
   - iOS (macOS):
     ```bash
     npm run ios
     ```
   - Web (preview):
     ```bash
     npm run web
     ```

Available scripts (via `package.json`):
- `start`: starts Expo server
- `android`: build/run Android
- `ios`: build/run iOS
- `web`: starts in browser


### 📦 Production PreBuild (Android)
With Expo prebuild + android (recommended):
```bash
npx expo prebuild
npx expo run:android --> after dev build (local native build.)
```

### ❗ Observations

> Every time you start the server (back-end), observe the IP of your machine to make the connection, after that modify the IP in the "./src/server/api.ts" file.

> If you want to install native CLI dependencies, use dev-client, more information in the official React-Native documentation.