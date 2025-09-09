"use client";

import Link from "next/link";
import Post from "@/components/post";
import Pagination from "@/modules/home/pagination";
import useQueryPostList from "@/hook/use-query-post-list";

const PostList = () => {
  const { data, isLoading, error } = useQueryPostList();
  const { posts = [], totalPages = 0 } = data || {};
  
  console.log('PostList data:', { data, posts, isLoading, error }); // Debug log
  
  return (
    <div className="mt-8">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading posts: {error.message}</div>}
      {!isLoading && error && <div>No posts available</div>}
      {posts.map((post: Post) => (
        <Link key={post.id} href={`/post/${post.id}`}>
          <Post post={post} />
        </Link>
      ))}
      {totalPages > 0 && (
        <div className="mt-8">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
};

export default PostList;
