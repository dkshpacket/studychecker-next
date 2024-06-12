const SigninFlow = () => {
    return (
        <form className="flex flex-col mt-8 max-w-sm space-y-4">
            <div>
                <label className="block" htmlFor="studentid">학번</label>
                <input className="px-4 py-2 rounded-lg border" type="text" placeholder="20909" required />
            </div>
            <div>
                <label className="block" htmlFor="name">이름</label>
                <input className="px-4 py-2 rounded-lg border" type="text" name="name" placeholder="이재하" required />
            </div>
            <div>
                <label className="block" htmlFor="password">비밀번호</label>
                <input className="px-4 py-2 rounded-lg border" type="password" name="비밀번호" placeholder="비밀번호" />
            </div>

            <button
                type="submit"
                className="px-4 py-2 mt-8 rounded-lg bg-indigo-500 text-white"
            >
                시작하기
            </button>
        </form>
    )
}

export default SigninFlow