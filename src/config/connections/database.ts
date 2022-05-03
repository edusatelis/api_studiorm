import  mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const mongoUri: string = process.env.MONGODB_URI || '';

export const db: any= mongoose.connect(mongoUri , (err)=>{
    if(err)

        console.log(`I can't connect in MongoDB ${err}`);
    else
        console.log('MongoDB ::: Connected');
});