import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Tailwind,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const VerificationEmail = ({ url }: { url: string }) => {
  const previewText = `단대소고 홈페이지에 로그인하세요.`;

  return (
    <Html>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto bg-white font-sans">
          <Container className="mx-auto mb-[40px] max-w-2xl p-[20px]">
            <Heading as="h1" className="text-3xl font-base">
              단붕이 <span className="font-bold">생활 도우미</span>
            </Heading>
            <Text className="text-base leading-[16px]"> 안녕하세요,</Text>
            <Text className="text-base">
              아래 링크를 눌러 단붕이 생활 도우미에 로그인해 주세요.
            </Text>
            <Button
              className="rounded-lg shadow px-8 py-3 bg-[#000000] font-semibold text-white no-underline"
              href={url}
            >
              로그인하기
            </Button>
            <Text className="mt-8 text-gray-600">
              made with ❤️ by 단대소고 창체동아리 PACKET
            </Text>
            <Text className="mt-8 text-gray-500">
              로그인 시도를 하지 않았다면, 이 이메일을 무시해 주세요.
            </Text>
          </Container>
          <Hr />
        </Body>
      </Tailwind>
    </Html>
  );
};
export default VerificationEmail;
