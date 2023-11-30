export default function Signup () {
  return(
    <>
    <div className="w-screen flex justify-center align-center">
      <div className="border border-BASIC_BLACK w-3/5 flex justify-center align-center my-32">
        <div className="w-2/3 py-12 flex flex-col justify-between align-center mx-auto gap-10">
          <h1 className="text-center text-xl font-bold">회원가입</h1>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            {/* width 값을 바꿔줘야하는데 스크립트 처리로 해야함. */}
            {/* input 4개 이므로 각 25% 씩 할당한다고 가정 */}
            <div className="bg-MAIN_COLOR h-2.5 rounded-full w-1/2"/>
          </div>
          <div className="">
            <h2 className="pb-2">사진 업로드</h2>
            {/* 사진 업로드시 받아온 파일을 배경색 대신 보여줘야 함. */}
            <div className="flex gap-2">
              <div className="w-28 h-28 relative bg-LIGHT_GRAY_COLOR rounded-md">
                <label htmlFor="chooseImage" className="absolute bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer text-BASIC_WHITE bg-gray-500 rounded-full w-20 text-center">등록</label>
              </div>
              <input type="file" id="chooseImage" className="hidden"></input>
              <div className="text-ETC_COLOR text-xs">
                <p className="text-left">! 10kb 미만의 사진을 업로드 해주세요!</p>
                <p className="text-left">! 등록하시지 않을 경우 기본 이미지가 업로드 됩니다.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="pb-2">이름<span className="text-ETC_COLOR">*</span></h2>
            <input type="text" placeholder="이름" className="border w-full rounded-md h-12 pl-3 border-BASIC_BLACK"></input>
          </div>
          <div>
            <h2 className="pb-2">이메일<span className="text-ETC_COLOR">*</span></h2>
            <input type="text" placeholder="이메일" className="border w-full rounded-md h-12 pl-3 border-BASIC_BLACK"></input>
            <div className="text-right pt-2">
              <button className="rounded-md bg-BTN_COLOR px-2 py-1 text-BASIC_WHITE">이메일 인증하기</button>
            </div>
          </div>
          <div>
            <h2 className="pb-2">비밀번호<span className="text-ETC_COLOR">*</span></h2>
            <input type="password" placeholder="비밀번호" className="border w-full rounded-md h-12 pl-3 border-BASIC_BLACK"></input>
            <p className="text-ETC_COLOR text-xs">! 영문, 숫자로 이루어진 8자리 이상 입력해주세요.</p>
          </div>
          <div>
            <h2 className="pb-2">비밀번호 재입력<span className="text-ETC_COLOR">*</span></h2>
            <input type="password" placeholder="비밀번호를 다시 입력해주세요." className="border w-full rounded-md h-12 pl-3 border-BASIC_BLACK"></input>
          </div>
          <button className="text-xl font-bold rounded-md bg-BTN_COLOR py-3 text-BASIC_WHITE">회원가입</button>
        </div>
      </div>
    </div>
    </>
  )
}