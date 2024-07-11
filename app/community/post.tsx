import { User } from "@prisma/client";
import { categories } from "./page";
import Link from "next/link";

export const Post: React.FC<{
  post: any;
}> = ({ post }) => {
  return (
    <Link
      href={`/community/${post.id}`}
      className="py-3 flex gap-3  items-center "
    >
      <div className=" text-gray-400">
        {categories[post.category as "chat" | "question" | "study"]}
      </div>
      <div className=" font-semibold">{post.title}</div>
      <div className="ml-auto text-gray-400">
        {post.author?.name ?? post.author?.email}
      </div>
    </Link>
  );
};
