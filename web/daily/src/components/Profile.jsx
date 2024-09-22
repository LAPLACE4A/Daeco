import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Footer_nav from "./Footer_nav"
import Loding from "./Loding"

function Profile(){

    const navigate = useNavigate()

    {/*
    const userProfile = {
        id:"김도붕",
        profile_picture:"/menu/menu_profile.svg"
    }
        */}
    const gotoRatedFeedList = () =>{
        navigate("/")
    }

    const gotoChangeUserProfile = () =>{
        navigate("/profile/change")
    }

    const gotoLogin = () =>{
        navigate("/login")
    }

    const gotoLogOut = () =>{
        navigate("/auth/logout")
    }

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTravelData = async () => {
        try {
          const usersResponse = await fetch(
            "https://daeco-d6m0.onrender.com/users"
          );
          const usersData = await usersResponse.json();
          setUsers(usersData);
    
          setLoading(false);
        } catch (error) {
          setError(`Fetch error: ${error.message}. Stack: ${error.stack}`);
          setLoading(false);
        }
      };
  
      useEffect(() => {
          fetchTravelData();
        }, []);
      
        if (loading) {
          return <Loding/>
        }
      
        if (error) {
          return <p>{error}</p>;
        }

    return(
        <div className="flex flex-col w-full h-full">
            <div id='profile-bg' className="w-full h-1/3 bg-clicked-menu">
                <div id='profile-user' className="flex flex-col w-auto m-5 p-5 bg-white shadow-2xl rounded-xl">
                    <div id='user_image' className="m-auto p-5">
                        <img src={users.profile_picture} className="size-24"/>
                    </div>
                    <div id='user_simple_info' className="flex flex-row justify-around">
                        <h1 className="font-LINESeedKR_Bd text-2xl">" {users.id} "</h1>
                    </div>
                </div>
            </div>

            <div id='profile-settings' className="flex flex-col w-full h-full px-3 pt-5 pb-2 mt-5 mb-20 bg-white overflow-scroll items-end scrollbar-hide">
                    <div id='profil-setting-item' className="w-full mb-3 p-5 border-black bg-white rounded-2xl shadow-lg">
                        <h1 className="font-LINESeedKR_Bd text-md mb-5 border-b-2 border-gray-300">내 활동</h1>
                        <button onClick={gotoRatedFeedList} className="w-full text-left m-auto p-3 ">내가 만든 피드?</button>
                    </div>

                    <div id='profil-setting-item' className="w-full mb-3 p-5 border-black bg-white rounded-2xl shadow-lg">
                        <h1 className="font-LINESeedKR_Bd text-md mb-5 border-b-2 border-gray-300">개인정보</h1>
                        <button onClick={gotoChangeUserProfile} className="w-full text-left m-auto p-3">내 정보 변경</button>
                        <button onClick={gotoLogin} className="w-full text-left m-auto p-3">로그인</button>
                        <button onClick={gotoLogOut} className="w-full text-left m-auto p-3">로그아웃</button>
                    </div>
                </div>

            <Footer_nav/>
        </div>
    )
}

export default Profile

