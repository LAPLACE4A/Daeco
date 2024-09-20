import Footer_nav from "./Footer_nav"

function Home(){
    const course_local = ['대구 달성군 여행', '대구 중구 여행', '대구 서구 여행']
    const course_place = ['대구 북구 실내빙상장 어때요?']

    return(
        <div className="w-full h-full">
            <div id='home_contents' className="w-full h-full bg-yellow-300">
                <div id="img-scroll-banner" className="flex flex-row w-full h-1/3 bg-indigo-400 z-0">
                    <img src="풍경1.jpg" className="object-cover"/>
                    <img src="풍경2.jpg" className="object-cover overflow-hidden"/>
                    <img src="풍경3.jpg" className="object-cover overflow-hidden"/>
                </div>

                <div className="absolute p-5 bg-white rounded-t-3xl bottom-5 left-0 w-full h-2/3 mb-20 overflow-scroll">
                    <div id='latest-daegu-festival' className="w-full h-10 mb-10 rounded-xl bg-clicked-menu shadow-md text-center content-center">
                            <h1 className="font-LINESeedKR_Bd text-xl text-white">최신 대구 페스티벌</h1>{/*festival 추가*/}
                    </div>

                    <div id='custom-fit-course' className="flex flex-col w-full bg-white">

                        <div id='custom-fit-course-local' className="flex flex-col p-3 mb-7 bg-gray-100 justify-around rounded-2xl shadow-md">
                            <h1 className="font-LINESeedKR_Bd mb-5 text-xl border-b-2 border-gray-300">맞춤 여행 코스</h1>
                            
                            <div id="custom-fit-course-local-lists" className="flex flex-row">
                                <div id="custom-course-container" className="flex flex-col w-28 mr-5 bg-white overflow-hidden rounded-2xl shadow-xl">
                                    <img src="/course_local_1.jfif" className="object-contain size-fit"/>
                                    <div id="custom-course-container-text" className="flex flex-col py-2">
                                        <h1 className="text-md">대구 달성군 여행</h1>
                                        <p className="font-LINESeedKR_Th text-sm">자연과 함께하는 행복한 여행</p>
                                    </div>
                                    {/*local-course 추가*/}
                                </div>

                                <div id="custom-course-container" className="flex flex-col w-28 mr-5 bg-white overflow-hidden rounded-2xl shadow-xl">
                                    <img src="/course_local_2.jfif" className="object-contain size-fit"/>
                                    <div id="custom-course-container-text" className="flex flex-col py-2">
                                        <h1 className="text-md">대구 중구 여행</h1>
                                        <p className="font-LINESeedKR_Th text-sm">MZ 취향 저격 코스를 즐겨봐!</p>
                                    </div>
                                    {/*local-course 추가*/}
                                </div>
                            </div>
                        </div>


                        <div id='custom-fit-course-place' className="flex flex-col p-3 bg-gray-100 justify-around rounded-2xl shadow-md">

                            <h1 className="font-LINESeedKR_Bd mb-5 text-xl border-b-2 border-gray-300">맞춤 여행 장소</h1>

                            <div id="custom-fit-course-place-container" className="flex flex-row">
                                    <div id="custom-course-place" className="flex flex-col w-64 mr-5 bg-white overflow-hidden rounded-2xl shadow-xl">
                                        <img src="/course_place_1.jfif" className="object-contain size-fit"/>
                                        <div id="custom-course-place-text" className="flex flex-col py-2">
                                            <h1 className="text-md">대구 북구 실내빙상장 어때요?</h1>
                                            <p className="font-LINESeedKR_Th text-sm">대구 지역의 유일한 국제 규격의 스케이트장(실내스케이트장, 쇼트트랙, 피겨, 아이스하키, 컬링)</p>
                                        </div>{/*local-place 추가*/}
                                    </div>
                            </div>

                            <div id="custom-fit-course-place-container" className="flex flex-row">
                                    <div id="custom-course-place" className="flex flex-col w-64 mr-5 bg-white overflow-hidden rounded-2xl shadow-xl">
                                        <img src="/course_place_2.jfif" className="object-contain size-fit"/>
                                        <div id="custom-course-place-text" className="flex flex-col py-2">
                                            <h1 className="text-md">대구 서구는 어때요?</h1>
                                            <p className="font-LINESeedKR_Th text-sm">서구의 유명한 어딘가</p>
                                        </div>{/*local-place 추가*/}
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