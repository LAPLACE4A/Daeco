function Login(){

    return(
        <div>
            <div id='login-bg' className="flex flex-col w-full h-screen justify-center items-center bg-white">
                <img src="/menu_home.svg" className="w-32 pb-10"/>
                <a href="https://exuberant-ofella-laplace4a-2263d6d1.koyeb.app/auth/kakao/callback">
                    <img src="/kakao_login_large_narrow.png" className="w-52"/>
                </a>
            </div>
        </div>
    )

}

export default Login