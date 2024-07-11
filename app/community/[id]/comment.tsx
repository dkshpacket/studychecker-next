import moment from "moment";

export const Comment = ({ comment }) => {
  return (
    <div className="py-3 ">
      <div className="text-gray-600 text-xs">
        {comment.author?.name ?? comment.author.username}
      </div>
      <div>{comment.content}</div>

      <span className="mt-4 text-neutral-500 text-xs">
        {moment(comment.createdAt).format("MM.DD HH:mm")}
      </span>
    </div>
  );
};
