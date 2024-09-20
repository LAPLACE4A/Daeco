import Footer_nav from "./Footer_nav"

function Point(){
    
    const point = 0

    return(
        <div className="w-full h-full">
            <div id="point-contents" className="w-full h-screen bg-indigo-300">
                <div id="point-ui" className="flex flex-row justify-between p-5 bg-white shadow-md">
                    <h1 className="font-LINESeedKR_Bd text-2xl">코스 Point</h1>
                    <div id="point-ui-points" className="flex flex-row justify-around items-center">
                        <h1 className="font-LINESeedKR_Bd text-md pr-3">{point}</h1>
                        <img src="/point_coin.svg" className="size-8"/>
                    </div>

                </div>

                <div id="point-uses" className="grid w-full h-full overflow-scroll">
                    {/* 사용처 리스트 */}
                </div>
            </div>
            <Footer_nav/>
        </div>
    )
}

export default Point