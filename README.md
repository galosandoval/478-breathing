# 478-breathing
A simple app to help people relax in just a couple minutes.
- Site: https://478-breathing.vercel.app/

## How to navigate this project
- All my stateful logic is on the App component to ensure there is one source of truth: https://github.com/galosandoval/478-breathing/blob/main/src/App.js#L47
- Extensive use of useEffect for the timers: https://github.com/galosandoval/478-breathing/blob/main/src/features/instructions/Instructions.jsx#L19
- Converted css to styled components: https://github.com/galosandoval/478-breathing/blob/main/src/features/modal/Modal.styles.js#L82

## Why I built the project this way
- Since state can be managed on one component, there was no need for Redux.
- Styled components is a great library for styling. Out of the box, it includes auto-prefixes, uses scoped classes, and integrates nicely with JS.

## If I had more time I would change this
- Add tests
- Convert this to a mobile app

## Available scripts
```
npm start
```