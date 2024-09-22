function Login(){

    return(
        <div>
            <div id='login-bg' className="flex flex-col w-full h-screen justify-center items-center bg-white">
                <img src="/menu/menu_home.svg" className="w-32 pb-10"/>
                <a href="https://daeco-d6m0.onrender.com/auth/google">
                    <img src="/logo/google_round_login_logo.svg" className="w-52"/>
                </a>
            </div>
        </div>
    )

}

export default Login