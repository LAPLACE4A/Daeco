import KakaoMap from "./KakaoMap"
import Footer_nav from "./Footer_nav"

function Feed(){

    return(
        <div className="flex flex-col w-full h-full bg-white">
            <div id="feed-container" className="w-full h-screen bg-yellow-200">
                <div id="feed-ui" className="flex flex-row w-auto m-3 p-3 bg-green-200 justify-between">
                    <div id="feed-ui-texts" className="flex flex-col bg-violet-200">
                        <h1>여행 코스 Map</h1>
                        <p>원하는 지역의 여행 코스 확인하기</p>
                    </div>

                    <div id="feed-ui-icons" className="flex flex-row bg-indigo-200 items-center">
                        <img src="/feed_search.svg" className="size-6"/>
                        <img src="/feed_profile.svg" className="size-8"/>
                    </div>
                </div>

                <div id="feed-map-container" className="w-full h-3/4 p-5 pb-7">
                    <KakaoMap/>
                </div>

                <div id="feed-recommend" className="w-full h-auto bg-white overflow-scroll">
                    Hello
                </div>
            </div>
            <Footer_nav/>
        </div>
    )
}

export default Feed