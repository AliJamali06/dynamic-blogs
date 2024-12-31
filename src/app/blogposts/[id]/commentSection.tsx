"use client";

import { useState } from "react";

const CommentsSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Comments</h2>
      <div className="mb-4">
        {comments.map((comment, index) => (
          <p key={index} className="border-b py-2">{comment}</p>
        ))}
      </div>
      <div className="flex gap-2 justify-center text-center">
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
        className="border p-2 w-64"
      />
       <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add Comment
        </button>
      </div>
    </section>
  );
};

export default CommentsSection;
