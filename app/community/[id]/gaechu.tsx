import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { useOptimistic } from "react";
import { cn } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { useFormStatus } from "react-dom";
import { GaechuButton } from "./gaechu-button";

export const Gaechu = async ({ postId, gaechuCount }) => {
  const session = await auth();

  const gaechus = await db.post.findUnique({
    where: {
      id: postId,
      gaechuedBy: {
        some: {
          id: session?.user?.id,
        },
      },
    },
  });
  const gaechued = gaechus != null;

  return (
    <form
      action={async () => {
        "use server";

        if (gaechued) {
          await db.post.update({
            data: {
              gaechuedBy: {
                disconnect: {
                  id: session?.user?.id,
                },
              },
            },
            where: {
              id: postId,
            },
          });
        } else {
          await db.post.update({
            data: {
              gaechuedBy: {
                connect: {
                  id: session?.user?.id,
                },
              },
            },
            where: {
              id: postId,
            },
          });
        }

        revalidatePath(`/community/${postId}`);
      }}
    >
      <div className="grid  grid-cols-3 w-full mx-auto max-w-48  p-2 rounded-lg items-center">
        <span className="text-red-500 text-xl font-bold">{gaechuCount}</span>
        <GaechuButton gaechued={gaechued} />
      </div>
    </form>
  );
};
