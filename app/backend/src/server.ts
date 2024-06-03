import App from './app';

const PORT = process.env.APP_PORT || 3001;

new App().start(PORT);

// const server = app.listen(PORT, () => {
//   console.log(`Squad Manager API no ar na porta ${PORT}!`);
// });