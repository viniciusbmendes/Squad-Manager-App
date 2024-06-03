import express from 'express';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    // Não remover essa rota
    this.app.get('/', (_req, res) => res.status(200).send('Squad Manager API no ar!'));
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Squad Manager API no ar na porta ${PORT}!`));
  }
}

export default App;

// const app = express();
// app.use(express.json());

// app.get('/', (_req, res) => res.status(200).json('Squad Manager API no ar!'));

// export default app;