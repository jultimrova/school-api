import express, {Application} from 'express';
import morgan from 'morgan';

// Routes
import IndexRoutes from './routes/index.routes';
import TeachersRoutes from './routes/teacher.routes';
import bodyParser from 'body-parser';

class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}))
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/teachers', TeachersRoutes);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}

export default App;