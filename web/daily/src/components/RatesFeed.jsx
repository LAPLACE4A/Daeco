import { useState } from "react"

function RatesFeed({ isOpen, closeModal }){

    const [rates, setRates] = useState(5)

    const handelChange = (event) =>{
        setRates(event.target.value)
    }


    return(
        <div id="rates-container" className={`fixed top-0 left-0 w-full h-full z-30 ${isOpen ? 'block' : 'hidden'}`}>
            
            <div className="flex justify-center items-center h-full">
                <div className="relative rounded-lg p-5 shadow-lg max-w-md w-3/4 min-w-[300px] min-h-[200px] bg-opacity-95 bg-gray-200">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <h1 className="text-lg font-LINESeedKR_Bd ">어떠셨나요?</h1>
                                <h1 className="text-lg font-LINESeedKR_Bd ">이 피드를 평가해주세요!</h1>
                            </div>
                            <button onClick={closeModal} className="mb-4 text-sm p-2 rounded-2xl shadow-xl">저장</button> {/* 백으로 전달 */}
                        </div>

                        <div className="flex flex-col w-full h-auto items-center overflow-hidden">
                            <div className="flex flex-row w-auto h-20 justify-around rounded-xl items-center bg-black bg-opacity-70 my-5 px-5">
                                {[1, 2, 3, 4, 5].map((rate) => (
                                        <img key={rate} id={`rate_${rate}`} src={rate <= rates ? "/feed/icon/feed_filled_star.svg" : "/feed/icon/feed_unfilled_star.svg"} className="size-1/2"/>
                                ))}
                            </div>
                            <input type="range" min="1" max="5" value={rates} onChange={handelChange} className="flex w-full h-full accent-clicked-menu"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RatesFeed