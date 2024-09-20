import KakaoMap from "./KakaoMap"
import Footer_nav from "./Footer_nav"

function Feed(){

    return(
        <div className="flex flex-col w-full h-full bg-white">
            <div id="feed-container" className="flex flex-row w-full bg-yellow-200 justify-between my-5 px-3 items-center">
                <div id="feed-ui-texts" className="flex flex-col bg-indigo-200 ">
                    <h1>코스 추천 FEED</h1>
                    <p>유저가 제작한 대구 코스 체험 평가</p>
                </div>
                <div id="feed-ui-icons" className="flex flex-row justify-around">
                    <button className="flex bg-indigo-200 items-center p-3">
                            <img src="/feed_search.svg" className="size-8"/>
                    </button>
                    <button className="flex bg-indigo-200 items-center p-3">
                            <img src="/feed_create.svg" className="size-9"/>
                    </button>
                </div>
            </div>

            <div id="feed-recommend" className="w-full h-auto bg-white overflow-scroll">
                Hello
                {/*feed 추가*/}
            </div>
            <Footer_nav/>
        </div>
    )
}

export default Feed