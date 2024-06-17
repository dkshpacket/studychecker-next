const SigninPage = () => (
  <main className="px-4 max-w-xl mx-auto relative h-full min-h-dvh bg-gradient-to-br">
    <h1 className="text-5xl italic font-extrabold block">
      단붕이 생활<br /> 도우미 V1
    </h1>
    <p className="mt-8 text-gray-700 text-lg">
      단붕이로서 성실히 살아가는데 필요한 모든 정보를 한곳에서 편리하게
      확인하세요.
    </p>
    <div className="absolute  bottom-32 inset-x-8">
      <p className="text-center text-gray-600">Built with ❤️ by 2024 PACKET</p>
      <a
        href="/signin-flow"
        className="text-xl block text-center mt-2 rounded-xl bg-indigo-500 border w-full py-2 text-white font-semibold"
      >
        &larr; 렛츠고도리 &rarr;
      </a>
    </div></main>
)
export default SigninPage