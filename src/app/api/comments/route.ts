import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Comment from '@/models/Comment';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get('projectId');

    if (!projectId) {
      return NextResponse.json({ error: "Missing projectId" }, { status: 400 });
    }

    const conn = await dbConnect();
    if (!conn) {
       return NextResponse.json([], { status: 200 }); // Return empty array if DB not configured yet
    }

    const comments = await Comment.find({ projectId }).sort({ createdAt: -1 });
    return NextResponse.json(comments, { status: 200 });
  } catch (error: any) {
    console.error('Comments GET Error:', error);
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const conn = await dbConnect();
    if (!conn) {
      return NextResponse.json({ error: "Database not configured yet. Set MONGODB_URI." }, { status: 503 });
    }

    const body = await req.json();
    const { projectId, name, comment } = body;

    if (!projectId || !name || !comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newComment = await Comment.create({
      projectId,
      name,
      comment,
    });

    return NextResponse.json(newComment, { status: 201 });
  } catch (error: any) {
    console.error('Comments POST Error:', error);
    return NextResponse.json({ error: 'Failed to post comment', details: error.message }, { status: 500 });
  }
}
