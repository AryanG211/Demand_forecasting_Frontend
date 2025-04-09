import { connectionStr } from "@/lib/db";
import { Deals } from "@/lib/model/marketDeal";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionStr);
    const data = await Deals.find();
    console.log(data);

    return NextResponse.json({ result: true })
}