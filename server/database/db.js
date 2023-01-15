import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-pfurexi-shard-00-00.pk5ol1x.mongodb.net:27017,ac-pfurexi-shard-00-01.pk5ol1x.mongodb.net:27017,ac-pfurexi-shard-00-02.pk5ol1x.mongodb.net:27017/?ssl=true&replicaSet=atlas-ae0b77-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL, {useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })

}

export default Connection;