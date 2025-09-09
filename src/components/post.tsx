interface PostProps {
  post?: Post;
}

const Post = ({ post }: PostProps) => {
  const { title = "--", content = "-", createdAt = 0 } = post || {};
  return (
    <div className="w-full border-b border-white/10 py-6">
      <h3 className="text-sm text-white font-bold">{post?.title}</h3>
      <p className="text-sm text-white/50 mt-2">{post?.content}</p>
      <p className="text-sm text-white/50 mt-2">
        {new Date(post?.createdAt || 0).toLocaleString()}
      </p>
    </div>
  );
};

export default Post;
