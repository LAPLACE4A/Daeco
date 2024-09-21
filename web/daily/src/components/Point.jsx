import KakaoMap from "./KakaoMap"
import Footer_nav from "./Footer_nav"

const StoreCard = ({ stores }) => { //상호명, 지도, content 컴포넌트 추가
    return (
        <div id="point-uses" className="flex flex-row w-full h-screen p-10 overflow-x-scroll scrollbar-hide overflow-hidden">
            {stores.map((store, index)=>(
                <div key={index} className="min-w-[250px] max-w-[250px] min-h-[300px] max-h-[300px] bg-white rounded-lg shadow-lg flex-shrink-0 mr-10">
                    <KakaoMap addr={store.position} index_id={"store-map"+index}/>
                    <div className="p-4">
                        <h3 className="font-bold text-lg">{store.name}</h3>
                        <p className="text-gray-600">{store.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
  };

function Point(){

    const userPoints = {
            id:"김도붕",
            point:30000
        }

    const storesList = [
        {
            name:"도갈통",
            position:"대구 북구 산격로8길 34 1층",
            content:"(초심 잃어버림)"
        },

        {
            name:"우리집",
            position:"대구 달서구 선원남로 77",
            content:"(집인데 집가고싶다)"
        },

        {
            name:"반월당",
            position:"대구 중구 덕산동",
            content:"(사람 개많음)"
        },

        {
            name:"도갈통v2(우리분식)",
            position:"대구 북구 대현로19길 27",
            content:"(오삼불고기 개맛도리)"
        },
    ]

    return(
        <div className="w-full h-full">
            <div id="point-contents" className="flex flex-col w-full h-screen bg-white">
                <div id="point-ui" className="flex flex-row justify-between p-5 bg-white shadow-lg">
                    <h1 className="font-LINESeedKR_Bd text-2xl">코스 Point</h1>
                    <div id="point-ui-points" className="flex flex-row justify-around items-center">
                        <h1 className="font-LINESeedKR_Bd text-md pr-3">{userPoints.point}</h1>
                        <img src="/point_coin.svg" className="size-8"/>
                    </div>
                </div>
                <StoreCard stores={storesList}/>
            </div>
            <Footer_nav/>
        </div>
    )
}

export default Point