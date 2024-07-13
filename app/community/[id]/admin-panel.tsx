"use client";
import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deletePost } from "./delete-post";

export const AdminPanel: React.FC<{
  postId: number;
}> = ({ postId }) => {
  return (
    <Card>
      <h2 className="text-red-500 font-bold "> 관리자 패널</h2>
      <div className="flex mt-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">삭제</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>진짜 삭제해요??</AlertDialogTitle>
              <AlertDialogDescription>
                삭제된 게시물은 일반 사용자에게 보이지 않습니다. 삭제된 게시물은
                관리자 패널에서 확인할 수 있습니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500 hover:bg-red-500/90"
                onClick={async () => {
                  deletePost(postId);
                }}
              >
                삭제
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Card>
  );
};
