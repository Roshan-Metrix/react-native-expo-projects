# React Native Expo Projects

This repository contains many small-to-medium React Native projects built with Expo. Projects cover UI screens, device features (camera, notifications), state management, and sample apps such as a Pokedex, Todo lists, and sample navigation patterns.

Click any folder name below to open that project.

## Projects (folders)

- [01-basic-screens](01-basic-screens) — Collection of small screens and layout examples (headers, lists, forms).
- [02-navigation-examples](02-navigation-examples) — Stack, tabs and drawer navigation patterns.
- [03-camera-and-media](03-camera-and-media) — Camera capture, image picker and media playback samples.
- [04-push-notifications](04-push-notifications) — Expo push notifications setup and examples.
- [05-pokedex](05-pokedex) — Pokedex app: lists Pokémon, shows details and stores images locally (example of image caching and remote fetching).
- [06-state-management](06-state-management) — Examples using Context, Redux and Zustand.
- [07-animations](07-animations) — Reanimated and LayoutAnimation demos.
- [08-forms-and-validation](08-forms-and-validation) — Formik, React Hook Form and validation samples.
- [09-accessibility-and-testing](09-accessibility-and-testing) — Accessibility checks and basic Jest/React Native Testing Library tests.

## Example: Pokedex

The Pokedex project demonstrates:

- A responsive list of Pokémon with thumbnails and search/filtering.
- Detail screen with larger images, types, abilities and stats.
- Image caching/local storage so the app can show saved images offline.
- Usage of Expo Asset and remote API fetching.

Open the `05-pokedex` folder to run it with Expo: `expo start`.

## Run any project

1. cd into the project folder, e.g. `cd 05-pokedex`
2. Install dependencies: `yarn` or `npm install`
3. Start Expo: `expo start`

## Contributing

Add new example folders following the numeric-prefix pattern and update this README with a short description.

---
If a folder listed above does not exist yet, create it and add the sample project files.
