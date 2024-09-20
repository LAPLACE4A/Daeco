function NotFound(){
    return(
        <div id='bg' className="flex w-full h-screen justify-center items-center bg-gray-400">
            <p>존재하지 않는 페이지입니다.</p>
            <button>
                <div>
                    <img src="./src/assets/menu_home.png"/>
                    <p>홈으로 돌아가기</p>
                </div>
            </button>
        </div>
    )
}

export default NotFound