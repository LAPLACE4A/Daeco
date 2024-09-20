import Footer_nav from "./Footer_nav"

function Home(){

    return(
        <div className="w-full h-full bg-slate-800">
            <div id='home_contents-bg' className="absolute bottom-0 left-0 w-full h-2/3 bg-indigo-300 overflow-scroll">
                <div id='home-contents' className="absolute w-full px-7 pt-7">
                    <div id='latest-daegu-festival' className="w-full mb-10 bg-white">
                            최신 대구 페스티벌
                    </div>

                    <div id='custom-fit-course' className="flex flex-col w-full mb-5 bg-white">
                        <div id='custom-fit-course-local' className="flex flex-row mb-10 pb-7 bg-gray-300 justify-around">
                            <div className="bg-red-400">
                                이런
                            </div>
                            <div className="bg-green-300">
                                저런
                            </div>
                        </div>

                        <div id='custom-fit-course-pos' className="flex flex-row pb-7 bg-gray-500 justify-around">
                             <div className="bg-red-400">
                                장소가
                            </div>
                            <div className="bg-green-300">
                                있음
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer_nav/>
        </div>
    )
}

export default Home