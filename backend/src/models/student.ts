import mongoose, { Schema, Document} from 'mongoose';
import Phone, {IPhone} from "./phone";

//Modelo de objeto que se guarda en la BBDD de MongoDB
const studentSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phones: [{
        type: Object,
        ref: Phone
    }]
});

//Interfaz para tratar respuesta como documento
export interface IStudent extends Document {
    name: string;
    address: string;
    phones: Array<IPhone>;
}

//Exportamos modelo para poder usarlo 
//Mongoose#model(name, [schema], [collection], [skipInit])
export default mongoose.model<IStudent>('Student', studentSchema,'Students');