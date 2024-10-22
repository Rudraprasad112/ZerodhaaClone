import { Schema,model } from'mongoose';

const HoldingSchema = new Schema({

    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});
const HoldingModel =  new model("Holding",HoldingSchema);

export default  HoldingModel ;