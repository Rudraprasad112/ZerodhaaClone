//import mongoose from 'mongoose';
import HoldingModel from './schema/HoldingsSchema.js';
import WatchListModel from "./schema/WatchList.js"
import PositionsModel from "./schema/PositionsSchema.js";

 const findHolding = (async (req, res) => {
    let data1 = await HoldingModel.find({});

    res.json(data1);
})

 const findPos = (async (req, res) => {
    const data2 = await PositionsModel.find({});

    res.json(data2);
})
 const findWatch = (async (req, res) => {
    let data3 = await WatchListModel.find({});

    res.json(data3);
})

export {findHolding,findPos,findWatch};
