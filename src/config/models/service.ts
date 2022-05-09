import mongoose, { Document, Schema } from 'mongoose';
import { StatusEnum } from './enums/statusEnum';


/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface IService extends Document {
    name: String,
    desc: String,
    status: StatusEnum,
    price: Number,
    category: String   
}

const ServiceModel:Schema = new Schema({
    name: {type: String, required: true},
    desc: {type: String, required: true},
    date: {type: Date, default: Date.now().toLocaleString('pt-br')},
    status: {enum: StatusEnum, required: true, default: StatusEnum.pending},
    price: {type: Number, required: true},
    category: {type: String, required: true}
});


export default mongoose.model<IService>('Service',ServiceModel);