import { Comment as CommentType } from "@prisma/client";
import moment from "moment";

export const Comment: React.FC<{
  comment: any;
}> = ({ comment }) => {
  return (
    <div className="py-3 ">
      <div className="text-gray-600 text-xs">
        {comment.author?.name ?? comment.author.email}
      </div>
      <div>{comment.content}</div>

      <span className="mt-4 text-neutral-500 text-xs">
        {moment(comment.createdAt).format("MM.DD HH:mm")}
      </span>
    </div>
  );
};
