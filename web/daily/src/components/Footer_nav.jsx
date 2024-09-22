import { useNavigate } from "react-router-dom"

function Footer_nav(){

    const navigate = useNavigate();

    {/* 색 바꾸기 아직 생각중 #2C98F0
        if (nowLocation.pathname == pos){
            button.style.filter = 'invert(65%) sepia(58%) saturate(5599%) hue-rotate(184deg) brightness(99%) contrast(90%)'
        }
        else{
            button.style.filter = ''
        }
    */}

    const navHome = () =>{
        navigate("/")
    }
    const navFeed = () =>{
        navigate("/feed")
    }
    const navPoint = () =>{
        navigate("/point")
    }
    const navProfile = () =>{
        navigate("/profile")
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