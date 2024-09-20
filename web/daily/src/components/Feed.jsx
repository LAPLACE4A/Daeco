import KakaoMap from "./KakaoMap"
import Footer_nav from "./Footer_nav"

function Feed(){
    const user_nickname = "ces_1jk"
    const viewer = "329,243"
    const tags = ['뭐가 많음']
    const heart_count = 12381

    return(
        <div className="flex flex-col w-full h-full bg-white">
            <div id="feed-container" className="flex flex-row w-full justify-between mt-5 mb-2 px-3 items-center shadow-md">
                <div id="feed-ui-texts" className="flex flex-col">
                    <h1 className="font-LINESeedKR_Bd text-2xl">코스 추천 FEED</h1>
                    <p className="font-LINESeedKR_Th text-md">유저가 제작한 대구 코스 체험 평가</p>
                </div>
                <div id="feed-ui-icons" className="flex flex-row justify-around">
                    <button className="flex items-center p-3">
                            <img src="/feed_create.svg" className="size-7"/>
                    </button>
                </div>
            </div>

            <div id="feed-recommend" className="w-full h-full mb-20 bg-white overflow-scroll">

                <div id="feed-container" className="flex flex-col w-full h-auto p-7 bg-white justify-around border-b-2 border-gray-300">
                        <div id="user-info" className="flex flex-row justify-start">
                            <img src="/user_profile_1.jpg" className="rounded-full size-10 mr-5"/>
                            <div id="user-info-text" className="flex flex-col">
                                <h1 className="text-md">{user_nickname}</h1>
                                <p className="font-LINESeedKR_Th text-sm">대구중구_근대문화골목</p>
                            </div>
                        </div>


                        <img id="user-pic" src="/custom_course_1.jfif" className="w-full h-auto rounded-2xl my-2"/>
                        
                        <div id="user-context-container" className="flex flex-col w-full">
                        <div id="user-context-header" className="flex flex-row justify-between my-3">
                            <h1 id="user-context-viwer" className="font-LINESeedKR_Th text-sm">조회 {viewer}명</h1>
                            <div id="user-context-icons" className="flex flex-row">
                                <img src="/feed_share.svg" className="size-6 mr-3"/>
                                <img src="/feed_filled_heart.svg" className="size-6"/>
                            </div>
                        </div>
                            <h1 id="user-context-title" className="text-md">{user_nickname} 대구 중구 골목 투어 : 근대 문화 골목을 여행하다.</h1>
                            <h1 id="user-context-tag" className="font-LINESeedKR_Th text-md">{tags[0]}</h1>
                        </div>

                    </div>

                <div id="feed-container" className="flex flex-col w-full h-auto p-7 bg-white justify-around border-b-2 border-gray-300">
                    <div id="user-info" className="flex flex-row justify-start">
                        <img src="/user_profile_2.jpg" className="rounded-full size-10 mr-5"/>
                        <div id="user-info-text" className="flex flex-col">
                            <h1 className="text-md">{user_nickname}</h1>
                            <p className="font-LINESeedKR_Th text-sm">대구중구_근대문화골목</p>
                        </div>
                    </div>


                    <img id="user-pic" src="/custom_course_2.jfif" className="w-full h-auto rounded-2xl my-2"/>
                    
                    <div id="user-context-container" className="flex flex-col w-full">
                    <div id="user-context-header" className="flex flex-row justify-between my-3">
                        <h1 id="user-context-viwer" className="font-LINESeedKR_Th text-sm">조회 {viewer}명</h1>
                        <div id="user-context-icons" className="flex flex-row">
                            <img src="/feed_share.svg" className="size-6 mr-3"/>
                            <img src="/feed_unfilled_heart.svg" className="size-6"/>
                        </div>
                    </div>
                        <h1 id="user-context-title" className="text-md">{user_nickname} 대구 중구 골목 투어 : 근대 문화 골목을 여행하다.</h1>
                        <h1 id="user-context-tag" className="font-LINESeedKR_Th text-md">{tags[0]}</h1>
                    </div>

                </div>
                

                {/*feed 추가*/}
            </div>
            <Footer_nav/>
        </div>
    )
}

export default Feed