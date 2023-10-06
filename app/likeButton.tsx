"use client";

import { useState } from "react";

export type LikeButtonProps = {
  gifID: string;
  isLiked?: boolean;
};

export default function LikeButton({
  gifID,
  isLiked = false,
}: LikeButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/likes/${gifID}`, {
        method: "POST",
      });
      const json = await response.json();
      console.log({ json });
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="bg-black p-2 hover:bg-gray-900 disabled:opacity-50"
      title="Like"
    >
      {isLiked ? "🤍" : "♡"}
    </button>
  );
}
