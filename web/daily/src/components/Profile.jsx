import { useNavigate } from "react-router-dom"
import Footer_nav from "./Footer_nav"

function Profile(){

    const navigate = useNavigate();
    const nickname = "김도붕"

    const gotoLogin = () =>{
        navigate("/login")
    }

    return(
        <div className="flex flex-col w-full h-full">
            <div id='profile-bg' className="w-full h-1/3 bg-clicked-menu">
                <div id='profile-user' className="flex flex-col w-auto m-5 p-5 bg-white shadow-2xl rounded-xl">
                    <div id='user_image' className="m-auto p-5">
                        <img src="/menu_profile.svg" className="size-24"/> {/*카톡 로그인에서 이미지 가져오면 추가*/}
                    </div>
                    <div id='user_simple_info' className="flex flex-row justify-around">
                        <h1 className="font-LINESeedKR_Bd text-2xl">" {nickname} "</h1>
                    </div>
                </div>
            </div>

            <div id='profile-settings' className="flex flex-col w-full h-full px-3 pt-5 pb-2 mt-5 mb-20 bg-white overflow-scroll items-end">
                    <div id='profil-setting-item' className="w-full mb-3 p-5 border-black bg-white rounded-2xl shadow-md">
                        <h1 className="font-LINESeedKR_Bd text-md mb-5 border-b-2 border-gray-300">내 활동</h1>
                        <button onClick={gotoLogin} className="w-full text-left m-auto p-3 ">좋아요 한 피드</button>
                        <button onClick={gotoLogin} className="w-full text-left m-auto p-3">피드 검색 기록</button>
                    </div>

                    <div id='profil-setting-item' className="w-full mb-3 p-5 border-black bg-white rounded-2xl shadow-md">
                        <h1 className="font-LINESeedKR_Bd text-md mb-5 border-b-2 border-gray-300">개인정보</h1>
                        <button onClick={gotoLogin} className="w-full text-left m-auto p-3">내 정보 변경</button>
                        <button onClick={gotoLogin} className="w-full text-left m-auto p-3">로그인/로그아웃</button>
                    </div>
                </div>

            <Footer_nav/>
        </div>
    )
}

export default Profile

