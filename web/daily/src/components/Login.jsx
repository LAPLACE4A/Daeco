function Login(){

    const handleLoginClick = () => {
        fetch('https://daeco-d6m0.onrender.com/auth/status', {
            method: 'GET',
            credentials: 'include',
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if (data.isAuthenticated) {
                console.log('Logged in as:', data.user);
                // 여기서 추가적인 동작을 수행할 수 있습니다
            } else {
                window.location.href = '/login'; // 로그인 페이지로 리디렉션
            }
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };

    return(
        <div>
            <div id='login-bg' className="flex flex-col w-full h-screen justify-center items-center bg-white">
                <img src="/menu/menu_home.svg" className="w-32 pb-10"/>
                <button onClick={handleLoginClick}>
                    <img src="/logo/google_round_login_logo.svg" className="w-52"/>
                </button>
            </div>
        </div>
    )

}

export default Login