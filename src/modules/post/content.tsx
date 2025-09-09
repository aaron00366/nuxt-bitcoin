"use client";

import Post from "@/components/post";
import useQueryPost from "@/hook/use-query-post";
import { useParams, useRouter } from "next/navigation";

const Content = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data, isLoading, error } = useQueryPost();

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="text-sm text-white font-bold"
      >
        {"← Back"}
      </button>
      <Post post={data} />
    </div>
  );
};

export default Content;
