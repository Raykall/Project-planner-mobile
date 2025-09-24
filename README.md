# Planner Mobile

A mobile application for trip/activity planning, built with Expo, React Native and TypeScript. The app organizes trips, participants and activities, displaying calendar and details for each itinerary.

### ✨ Key Features
- **Trip Registration**: creation and local storage of trips
- **Participants**: participant management and invitation links
- **Activities**: list, creation and daily visualization
- **Calendar**: date selection with `react-native-calendars`
- **Modern Interface**: `nativewind` (Tailwind) and `lucide-react-native` icons

### 🧰 Tech Stack
- **Expo** `~54` with **React Native** `0.81`
- **React** `19`
- **TypeScript** `~5.9`
- **Expo Router** `~6`
- **NativeWind (Tailwind)**
- **Day.js** for dates
- **Zod** for validation
- **Async Storage** for local persistence

### 📁 Project Structure (overview)
```
src/
  app/                # Routes (Expo Router)
    _layout.tsx
    index.tsx
    trip/
      [id].tsx        # Trip screen
      activities.tsx  # Activities
      details.tsx     # Details
  components/         # Reusable UI components
  server/             # Service layer (APIs/abstractions)
  storage/            # Local persistence (AsyncStorage)
  styles/             # Colors, fonts and global styles
  utils/              # Utilities (dates, validations)
```

### ⚙️ Additional Configuration
- Tailwind/NativeWind already configured (`tailwind.config.js` and `nativewind-env.d.ts`).
- Fonts with `@expo-google-fonts/inter` (loaded via `expo-font`).
- Calendar localized in `src/utils/localeCalendarConfig.ts` and `dayjsLocaleConfig.ts`.

### 🧪 Quality and Standards
- Strict TypeScript where applicable
- Prettier Tailwind plugin for class ordering
- Cohesive component structure and descriptive function names

### 🛠️ Architecture (quick overview)
- UI layer in `src/components` and screens in `src/app`
- Data services in `src/server` (fetch/axios, Zod validations)
- Local persistence in `src/storage`
- Date/validation utilities in `src/utils`

### 🤝 Contributing
1. Create a branch from `main`
2. Make small and descriptive commits
3. Open a Pull Request explaining the motivation and changes

---
If you have questions or suggestions, open an issue. Thanks for checking out Planner Mobile!