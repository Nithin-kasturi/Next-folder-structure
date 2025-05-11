import Topic from '../../models/topic'
import connectMongoDB from '../../libs/mongodb';
import { NextResponse } from 'next/server';
export async function POST(request) {
    const {title, desc}= await request.json();
    await connectMongoDB();
    await Topic.create({title,desc});
    return NextResponse.json({message:"Topic created"},{status:201});
}
export async function GET(req,res) {
    await connectMongoDB();
    const topics= await Topic.find();
    console.log(topics)
    return NextResponse.json({topics})
}
export async function DELETE(request) {
    const id= request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Delted"},{status:200})
}