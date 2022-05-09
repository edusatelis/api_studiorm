import mongoose, { Document, Schema } from 'mongoose';
import { CashEnum } from './enums/cashEnum';


/**
 * @export
 * @interface CashModel
 * @extends {Document}
 */
export interface ICash extends Document {
    total: Number
}

const CashRegisterModel:Schema = new Schema({
    date: {type: Date, default: Date.now().toLocaleString('pt-br')},
    total: {type: Number, required: true},
    status: {enum: CashEnum, default: CashEnum.closed},
});


export default mongoose.model<ICash>('cashRegister',CashRegisterModel);