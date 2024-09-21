import Footer_nav from "./Footer_nav";

const CourseCard = ({ cards }) => { //Course example content 컴포넌트 추가
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

function CourseMaker(){

    const cards = [{
            
        },
    ]

    return(
        <div className="w-full h-full">
        <div id="point-contents" className="flex flex-col w-full h-screen bg-white">
            <div id="point-ui" className="flex flex-row justify-between p-5 bg-white shadow-lg">
                <h1 className="font-LINESeedKR_Bd text-2xl">코스 Point</h1>
                <div id="point-ui-points" className="flex flex-row justify-around items-center">
                    <h1 className="font-LINESeedKR_Bd text-md pr-3">{userPoints.point}</h1>
                    <img src={"/feed/icon/feed_point.svg"} className="size-10"/>
                </div>
            </div>
            <CourseCard cards={cards}/>
        </div>
        <Footer_nav/>
    </div>
    )
}

export default CourseMaker