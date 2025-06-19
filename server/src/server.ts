import app from './app';
import config from './config/config';

app.listen(config.port, () => {
    console.log(`Primrose server (${config.nodeEnv}) is listening at http://localhost:${config.port}`);
});