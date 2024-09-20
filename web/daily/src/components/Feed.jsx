import KakaoMap from "./KakaoMap"
import Footer_nav from "./Footer_nav"

function Feed(){

    return(
        <div className="flex flex-col w-full h-full bg-white">
            <div id="feed-container" className="w-fill h-fill bg-yellow-200">
                <div id="feed-main" className="w-fill h-screen m-5 mb-0 bg-red-200">
                    <div id="feed-ui" className="flex flex-row w-full bg-green-200 justify-between">
                        <div id="feed-ui-texts" className="flex flex-col bg-violet-200">
                            <h1>여행 코스 Map</h1>
                            <p>원하는 지역의 여행 코스 확인하기</p>
                        </div>

                        <div id="feed-ui-icons" className="flex flex-row bg-indigo-200 items-center">
                            <img src="/feed_search.svg" className="size-6"/>
                            <img src="/feed_profile.svg" className="size-8"/>
                        </div>
                    </div>

                    <div id="feed-map-container" className="w-full h-1/2">
                        <KakaoMap/>
                    </div>
                </div>

                <div id="feed-recommend">
                    Hellow
                </div>
            </div>
            <Footer_nav/>
        </div>
    )
}

export default Feed