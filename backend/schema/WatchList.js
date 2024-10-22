import  { Schema ,model} from "mongoose";

const WatchlistSchema = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})
const WatchList = new model("watchilist",WatchlistSchema);

export default   WatchlistSchema ;