import mongoose from 'mongoose';

export interface IComment extends mongoose.Document {
  projectId: string;
  name: string;
  comment: string;
  createdAt: Date;
}

const CommentSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: [true, 'Please provide a project ID.'],
    index: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  comment: {
    type: String,
    required: [true, 'Please provide a comment.'],
    maxlength: [500, 'Comment cannot be more than 500 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);
