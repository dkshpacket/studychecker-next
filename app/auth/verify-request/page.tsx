import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";

const VerifyRequest = () => {
  return (
    <div className="mt-16">
      <Mail className="text-center mx-auto" />
      <h1 className="text-xl text-center font-bold mt-2">이메일 인증</h1>

      <p className="mt-8 text-center">
        이메일에 있는 링크를 클릭하여 로그인 해주세요.
      </p>

      <p className="mt-4 text-center ">
        이메일을 받지 못했다면, 스팸함을 확인해주세요.
      </p>

      <Link
        href="/login"
        className={cn(buttonVariants(), "mx-auto block w-fit mt-8")}
      >
        다시 시도하기
      </Link>
    </div>
  );
};

export default VerifyRequest;
