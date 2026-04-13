"use client";

import { useState, useEffect } from "react";

type CommentType = {
  _id: string;
  name: string;
  comment: string;
  createdAt: string;
};

export default function Comments({ projectId }: { projectId: string }) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchComments();
  }, [projectId]);

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comments?projectId=${projectId}`);
      if (!res.ok) throw new Error("Failed to fetch comments");
      const data = await res.json();
      setComments(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      projectId,
      name: formData.get("name"),
      comment: formData.get("comment"),
    };

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || "Failed to post comment");
      }

      await fetchComments();
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || "Something went wrong. Have you configured MongoDB?");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-16 pt-10 border-t border-gray-200">
      <h3 className="text-3xl font-extrabold text-[#164343] mb-8">Discussion</h3>

      <form onSubmit={handleSubmit} className="mb-12 bg-gray-50 border border-gray-200 p-6 rounded-2xl">
        <h4 className="text-lg font-bold text-[#164343] mb-4">Leave a Comment</h4>
        {error && <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg mb-4">{error}</div>}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              required 
              placeholder="Your Name" 
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1ea173]"
            />
          </div>
          <div>
            <label htmlFor="comment" className="sr-only">Comment</label>
            <textarea 
              name="comment" 
              id="comment"
              required 
              rows={4}
              placeholder="What do you think about this project?" 
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1ea173] resize-none"
            />
          </div>
          <button 
            type="submit" 
            disabled={submitting}
            className="px-8 py-3 bg-[#1ea173] text-white font-bold rounded-xl hover:bg-[#164343] transition-colors disabled:opacity-70"
          >
            {submitting ? "Posting..." : "Post Comment"}
          </button>
        </div>
      </form>

      {loading ? (
        <p className="text-gray-500">Loading comments...</p>
      ) : comments.length === 0 ? (
        <p className="text-gray-500 italic">No comments yet. Be the first to start the discussion!</p>
      ) : (
        <div className="space-y-6">
          {comments.map((c) => (
            <div key={c._id} className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-bold text-[#164343]">{c.name}</h5>
                <span className="text-xs text-gray-400">
                  {new Date(c.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{c.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
