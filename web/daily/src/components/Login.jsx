function Login(){

    const LoginKakao = () =>{
        alert('hi')
    }

    return(
        <div>
            <div id='login-bg' className="flex flex-col w-full h-screen justify-center items-center bg-indigo-300">
                <img src="../public/menu_home.png" className="w-32 pb-10"/>
                <button onClick={LoginKakao}>
                    <img src="../public/kakao_login_large_narrow.png" className="w-52"/>
                </button>
            </div>
        </div>
    )

}

export default Login