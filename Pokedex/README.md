# Pokedex (Pokemons Info App)

A simple React Native + Expo app that fetches Pokemon data from the public PokeAPI and displays basic details (name, image, index, types). Each Pokemon links to a details screen.

Key features
- Fetches a list of Pokemons (default limit: 12) from https://pokeapi.co
- Fetches detailed data per Pokemon (sprite image, game index, types)
- Color-coded cards by primary Pokemon type
- Tap a Pokemon to open its details screen via Expo Router

Project structure (relevant)
- app/index.tsx — main screen that lists Pokemons and fetches data

How it works
- On mount the app calls the PokeAPI endpoint to get a list of Pokemon entries.
- For each entry the app fetches details (sprites, game_indices, types) and stores them in state.
- The UI maps over the fetched list and renders a card with image, name and index. Cards are colored by the Pokemon's first type.

Running locally
1. Install dependencies: `npm install` or `yarn`
2. Start Expo: `npx expo start` or `expo start`

Notes
- Uses the public PokeAPI (no auth). Be mindful of rate limits for large requests.
- The code app/index.tsx contains simple inline styles and TypeScript interfaces for basic typing.

License
- MIT

