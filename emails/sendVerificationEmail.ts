"use server";
import { resend } from "./resend";
import { VerificationEmail } from "./verificationEmail";

export const sendVerificationRequest = async (params: {
  identifier: string;
  url: string;
  provider: { server: string; from: string };
}) => {
  console.log("sending email");
  try {
    await resend.emails.send({
      from: "단붕이 생활 도우미 <dksh@kaiwa.jcde.xyz>",
      to: params.identifier,
      subject: "단붕이 생활 도우미에 로그인하기",
      react: VerificationEmail({ url: params.url }),
    });
  } catch (error) {
    console.error({ error });
  }
};
