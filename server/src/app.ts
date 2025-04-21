import express from 'express';
import authRoutes from './modules/auth/routes/auth_routes'
import { lost } from './modules/helpers/responseHelper';

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/company', authRoutes);

app.get('/', (_, res) => {
    return lost(res);
});

export default app;