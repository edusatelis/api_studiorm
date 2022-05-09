import mongoose, { Document, Schema } from 'mongoose';


/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface ICategory extends Document {
    name: String,
    desc: String
    
}

const CategoryModel:Schema = new Schema({
    name: {type: String, required: true},
    desc: {type: String, required: true}
});


export default mongoose.model<ICategory>('category',CategoryModel);