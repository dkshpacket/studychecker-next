"use client";
import { Card } from "@/components/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Editor from "./editor";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/submit-button";
import { submitPost } from "./submit-post";
import { useSession } from "next-auth/react";
import { useFormState } from "react-dom";

const NewPost = () => {
  const [error, formAction] = useFormState(submitPost, null);

  const { data: session } = useSession();

  if (!session) {
    return redirect("/login");
  }

  return (
    <div>
      <Card className="w-full">
        <h1 className="font-bold text-xl">글 쓰기</h1>

        <form id="newpost" action={formAction} className="mt-8 w-full">
          <Select name="category" defaultValue="chat">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="chat">자유</SelectItem>
              <SelectItem value="question">질문</SelectItem>
              <SelectItem value="study">공부</SelectItem>
            </SelectContent>
          </Select>

          <div className="mt-4 space-y-1">
            <Label htmlFor="title">제목</Label>
            <Input name="title" placeholder="제목을 입력해주세요" />
          </div>

          <div className="mt-4 space-y-1">
            <Label htmlFor="title">내용</Label>
            <Editor />
          </div>

          <p aria-live="polite" className="text-red-500">
            {error}
          </p>
          <div className="w-full flex justify-end mt-2">
            <SubmitButton size={"lg"}>등록</SubmitButton>
          </div>
        </form> 
      </Card>
    </div>
  );
};

export default NewPost;
