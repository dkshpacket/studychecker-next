import { Card } from "@/components/card";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const SigninPage = async () => {
  const session = await auth();

  if (session) {
    return redirect("/");
  }

  return (
    <div className="flex  items-center h-full min-h-dvh">
      <Card className=" p-8 py-12 text-center  max-w-xl mx-auto relative h-full bg-gradient-to-br">
        <h1 className="text-4xl font-bold">단붕이 생활 도우미</h1>
        <p className="mt-4 text-gray-700 text-lg text-balance">
          단붕이로서 성실히 살아가는데 필요한 <br /> 모든 정보를 한 곳에서
          편리하게 확인하세요.
        </p>
        <div className="mt-24 ">
          <p className="text-center text-sm text-gray-600">
            Built with ❤️ by 2024 PACKET
          </p>
          <a
            href="/signin-flow"
            className="text-xl mt-2 block text-center mt-2 rounded-xl bg-primary border w-full py-2 text-white font-semibold"
          >
            &larr; 렛츠고도리 &rarr;
          </a>
        </div>
      </Card>
    </div>
  );
};
export default SigninPage;
