import mongoose from "mongoose";

const marketDeals = new mongoose.Schema({
    companyId: {
        type: Number,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    crop: {
        type: String,
        required: true,
    },
    requiredQuintals: {
        type: Number,
        required: true,
    },
    pricePerQuintal: {
        type: Number,
        required: true,
    },


}, { timestamps: true });

export const Deals = mongoose.models.MarketDeals || mongoose.model("MarketDeals", marketDeals)