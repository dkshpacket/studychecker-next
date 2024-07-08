import { Card } from "@/components/card";
import { Post } from "./post";

const Community = () => {
  return (
    <Card>
      <h1 className="text-xl font-bold">커뮤니티</h1>

      <div className="mt-2 divide-y ">
        <Post title={"hi"} desc={"안녕하세요 "} />
        <Post title={"hello"} desc={"안녕하세요 "} />
        <Post title={"hi"} desc={"안녕하세요 "} />
        <Post title={"hi"} desc={"안녕하세요 "} />
      </div>
    </Card>
  );
};

export default Community;
