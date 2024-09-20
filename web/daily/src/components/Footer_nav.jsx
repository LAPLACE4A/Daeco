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
    const navProfile = () =>{
        navigate("/profile")
    }

    return(
        <div id='footer_menu' className="fixed w-full bottom-0 text-white">
        <nav className="flex flex-row justify-around">

            <button onClick={navHome} className="flex flex-col w-1/4 min-w-15 h-12 bg-yellow-400 text-unclick-text items-center justify-center overflow-hidden">
                <img src='./src/assets/menu_home.png' className="size-4"/>
                <p className="text-sm">home</p>
            </button>
            <button onClick={navFeed} className="flex flex-col w-1/4 min-w-15 h-12 bg-white text-unclick-text items-center justify-center overflow-hidden">
                <img src='./src/assets/menu_feed.png' className="size-4"/>
                <p className="text-sm">feed</p>
            </button>
            <button onClick={navPoint} className="flex flex-col w-1/4 min-w-15 h-12 bg-white text-unclick-text items-center justify-center overflow-hidden">
                <img src='./src/assets/menu_point.png' className="size-4"/>
                <p className="text-sm">point</p>
            </button>
            <button onClick={navProfile} className="flex flex-col w-1/4 min-w-15 h-12 bg-white text-unclick-text items-center justify-center overflow-hidden">
                <img src='./src/assets/menu_profile.png' className="size-4"/>
                <p className="text-sm">profile</p>
            </button>

        </nav>
    </div>
    )
}

export default Footer_nav