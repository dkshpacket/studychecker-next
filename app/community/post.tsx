export const Post = ({ title, desc }) => {
  return (
    <div className="py-4">
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm">{desc}</p>
    </div>
  );
};
