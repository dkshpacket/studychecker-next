"use server";
import { SendVerificationRequestParams } from "next-auth/providers/email";
import { resend } from "./resend";
import { VerificationEmail } from "./verificationEmail";

export const sendVerificationRequest = async (
  params: SendVerificationRequestParams
) => {
  console.log("sending email");
  try {
    await resend.emails.send({
      from: "단대소고 <dksh@kaiwa.jcde.xyz>",
      to: params.identifier,
      subject: "단대소고에 로그인하기",
      react: VerificationEmail({ url: params.url }),
    });
  } catch (error) {
    console.error({ error });
  }
};
