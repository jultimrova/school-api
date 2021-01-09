import App from './app';

const SERVER_PORT = process.env.SERVER_PORT || 3000;

require('dotenv').config()

async function main() {
  const app = new App(SERVER_PORT);
  await app.listen();
}

main();