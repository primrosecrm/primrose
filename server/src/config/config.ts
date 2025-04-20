import dotenv from 'dotenv';

dotenv.config();

interface Config {
    port: number;
    nodeEnv: String;
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development'
};

export default config;