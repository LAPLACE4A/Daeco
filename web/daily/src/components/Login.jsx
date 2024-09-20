function Login(){

    const LoginKakao = () =>{

        fetch('/auth/kakao/callback')
    }

    return(
        <div>
            <div id='login-bg' className="flex flex-col w-full h-screen justify-center items-center bg-indigo-300">
                <img src="/menu_home.svg" className="w-32 pb-10"/>
                <a href="https://daeco.vercel.app/auth/kakao/callback">
                    <img src="/kakao_login_large_narrow.png" className="w-52"/>
                </a>
            </div>
        </div>
    )

}

export default Login