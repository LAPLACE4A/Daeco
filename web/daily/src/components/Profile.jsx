import { useNavigate } from "react-router-dom"
import Footer_nav from "./Footer_nav"

function Profile(){

    const navigate = useNavigate();

    const gotoLogin = () =>{
        navigate("/login")
    }

    return(
        <div className="flex flex-col w-full h-full bg-white">
            <div id='profile-bg' className="w-full h-1/3 top-0 left-0 bg-white">
                <div id='profile-user' className="flex flex-col w-auto m-10 p-5 bg-green-300">
                    <div id='user_image' className="m-auto p-5">
                        <img src="public/menu_home.png" className="size-auto"/>
                    </div>
                    <div id='user_simple_info' className="flex flex-row justify-around">
                        <h1>나이</h1>
                        <h1>성별</h1>
                        <h1>취미</h1>
                        <h1>MBTI</h1>
                    </div>
                </div>
            </div>

            <div id='profile-settings' className="flex flex-col w-full h-full px-10 pt-5 pb-2 mb-10 bg-red-300 overflow-scroll">
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        <button onClick={gotoLogin} className="w-full h-full">Login</button>
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                    <div id='profil-setting-item' className="w-full mx-auto mb-3 border-black bg-yellow-300">
                        hi
                    </div>
                </div>

            <Footer_nav/>
        </div>
    )
}

export default Profile

