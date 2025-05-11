import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topic";
export  async function PUT(request,{params}){
    console.log("request",request);
    console.log(params);
    const {id}= params;
    const {newTitle:title,newDesc:desc}=await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id,{title,desc});
    return NextResponse.json({message:"Updated"},{status:200});
}
export async function GET(request,{params}) {
    const {id}=params;
    await connectMongoDB();
    const topic= await Topic.findById(id);
    return NextResponse.json({topic},{status:200})
}