import { useNavigate } from "react-router-dom"

function Footer_nav(){

    const navigate = useNavigate();

    const navHome = () =>{
        navigate("/")
    }
    const navFeed = () =>{
        navigate("/feed")
    }
    const navPoint = () =>{
        navigate("/point")
    }
    const navProfile = () => {
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
                alert("hi")
                console.log('Logged in as:', data.user);
                navigate("/profile")
            } else {
                window.location.href = '/login'; // 로그인 페이지로 리디렉션
            }
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        })
    }

    return(
        <div id='footer_menu' className="fixed w-screen bottom-0 border-t-2 border-gray-200 text-white z-30">
        <nav className="flex flex-row justify-around">

            <button onClick={navHome} className="flex flex-col w-1/4 min-w-20 h-20 bg-white text-unclick-text items-center justify-center border-r-2 border-gray-200">
                <img src='/menu/menu_home.svg' className="size-10 pb-3"/>
                <p className="text-sm">home</p>
            </button>
            <button onClick={navFeed} className="flex flex-col w-1/4 min-w-20 h-20 bg-white text-unclick-text items-center justify-center border-r-2 border-gray-200">
                <img src='/menu/menu_feed.svg' className="size-10 pb-3"/>
                <p className="text-sm">feed</p>
            </button>
            <button onClick={navPoint} className="flex flex-col w-1/4 min-w-20 h-20 bg-white text-unclick-text items-center justify-center border-r-2 border-gray-200">
                <img src='/menu/menu_point.svg' className="size-10 pb-3"/>
                <p className="text-sm">point</p>
            </button>
            <button onClick={navProfile} className="flex flex-col w-1/4 min-w-20 h-20 bg-white text-unclick-text items-center justify-center">
                <img src='/menu/menu_profile.svg' className="size-10 pb-3"/>
                <p className="text-sm">profile</p>
            </button>

        </nav>
    </div>
    )
}

export default Footer_nav