import Footer_nav from "./Footer_nav"

function Home(){

    return(
        <div className="w-full h-full">
            <div id='home_contents' className="w-full h-full">
                <div id="img-scroll-banner" className="absolute w-full h-1/3 bg-indigo-400">
                    <div className="flex flex-row">
                        <img src="풍경1.jpg" className="object-cover"/>
                        <img src="풍경2.jpg" className="object-cover overflow-hidden"/>
                        <img src="풍경3.jpg" className="object-cover overflow-hidden"/>
                    </div>
                </div>

                <div className="absolute p-7 bg-white rounded-t-3xl bottom-5 left-0 w-full h-2/3 overflow-scroll">
                    <div id='latest-daegu-festival' className="w-full h-10 mb-10 rounded-xl bg-gray-50 shadow-md text-center">
                            최신 대구 페스티벌
                    </div>

                    <div id='custom-fit-course' className="flex flex-col w-full bg-white">

                        <div id='custom-fit-course-local' className="flex flex-col py-3 mb-7 bg-gray-300 justify-around">
                            <h1 className="bg-yellow-50 mb-5">custom-fit-course-local</h1>
                            
                            <div id="custom-fit-course-local-lists" className="flex flex-row">
                                <div className="bg-red-400">
                                    이런
                                </div>

                                <div className="bg-green-300">
                                    저런
                                </div>
                            </div>
                        </div>

                        <div id='custom-fit-course-pos' className="flex flex-col py-3 bg-gray-500 justify-around">

                            <h1 className="bg-yellow-50 mb-5">custom-fit-course-pos</h1>

                            <div id="custom-fit-course-local-lists" className="flex flex-row">
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
            </div>

            <Footer_nav/>
        </div>
    )
}

export default Home