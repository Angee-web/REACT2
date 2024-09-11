React Player List
A React application that displays a list of football players using React-Bootstrap cards. The project demonstrates how to use TypeScript with React components, manage player data, and render it dynamically.

Features
Player Component: Displays individual player details in a card format.
Players List: Renders a list of players by mapping through an array of player objects.
Bootstrap Styling: Utilizes React-Bootstrap for card styling.

File Structure
src/players.ts: Contains an array of player objects with their details.
src/Player.tsx: A component that renders a player's details using a React-Bootstrap card.
src/PlayersList.tsx: A component that maps through the player array and renders each Player component.
src/App.tsx: The root component that renders the PlayersList component.
Default Props
The Player component has default props defined for cases where data might be missing
