import { Card } from "@/components/card";
import { db } from "@/lib/db";
import { notFound, redirect } from "next/navigation";
import { Gaechu } from "./gaechu";
import { Comment } from "./comment";
import { auth } from "@/lib/auth";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import { CommentMaker } from "./comment-maker";
import { categories } from "../page";
import Link from "next/link";
import { AdminPanel } from "./admin-panel";

const PostViewPage: React.FC<{
  params: {
    id: string;
  };
}> = async ({ params }) => {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  const post = await db.post.findUnique({
    where: {
      id: parseInt(params.id),
      deleted: session.user.admin ? undefined : false,
    },
    include: {
      author: true,
      comments: {
        include: {
          author: true,
        },
      },
      _count: {
        select: {
          gaechuedBy: true,
        },
      },
    },
  });

  if (!post) {
    return notFound();
  }

  return (
    <div className="space-y-4">
      <Card>
        <div className="text-dankook font-semibold text-sm">
          <Link href="/community">커뮤니티</Link>
          <span className="mx-2">/</span>
          <Link href={`/community?filter=${post.category}`}>
            {categories[post.category as keyof typeof categories]}
          </Link>
        </div>
        <div className="text-red-500 ">{post.deleted && "삭제된 게시물"}</div>
        <h1 className="text-xl font-bold mt-2">{post.title}</h1>
        <span className="text-gray-500 mt-2 text-sm">
          {post.author?.name ?? post.author?.email}
        </span>
        <div className="my-4">
          {" "}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[[rehypePrism, { ignoreMissing: true }]]}
            className="prose prose-neutral prose-sm max-w-none w-full h-full break-all"
          >
            {post.content}
          </ReactMarkdown>
        </div>
        <Gaechu gaechuCount={post._count.gaechuedBy} postId={post.id} />
      </Card>
      {session.user?.admin && <AdminPanel postId={post.id} />}

      <CommentMaker postId={post.id} />

      <Card>
        <h2 className="text-neutral-600 text-sm font-semibold">
          전체 댓글 {post.comments.length}개
        </h2>
        <div className=" divide-y">
          {post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
        {post.comments.length == 0 && (
          <div className="text-neutral-500 text-sm mt-4">
            댓글이 없습니다. 첫번째 댓글의 주인이 되어보세요.
          </div>
        )}
      </Card>
    </div>
  );
};

export default PostViewPage;
