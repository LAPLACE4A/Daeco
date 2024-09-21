import { useNavigate } from "react-router-dom"
import Footer_nav from "./Footer_nav"

//feedCard 컴포넌트 생성
const FeedCard = ({ cards }) => {
    return (
        <div id="feed-recommend" className="w-full mb-20 bg-white overflow-x-scroll scrollbar-hide">
            {cards.map((card, index)=>(
                <div id="feed-container" key={index} className="flex flex-col w-full h-auto p-7 bg-white justify-around border-b-2 border-gray-300">
                    <div id="user-info" className="flex flex-row justify-start">
                        <img src={card.profile_picture} className="rounded-full size-10 mr-5"/>
                        <div id="user-info-text" className="flex flex-col">
                            <h1 className="font-LINESeedKR_Bd text-md">{card.id}</h1>
                            <p className="text-sm">대구중구_근대문화골목</p>
                        </div>
                    </div>

                    <img id="user-pic" src="/custom_course_1.jfif" className="w-full h-auto rounded-2xl my-2"/>
                    
                    <div id="user-context-container" className="flex flex-col w-full">
                        <div id="user-context-header" className="flex flex-row justify-between my-3">
                            <h1 id="user-context-viwer" className="font-LINESeedKR_Th text-sm">조회 {card.stars}명</h1>
                            <div id="user-context-icons" className="flex flex-row">
                                <button>
                                    <img src="/feed_share.svg" className="size-6 mr-3"/>
                                </button>
                                <button>
                                    <img src="/feed_filled_heart.svg" className="size-6"/>
                                </button>
                            </div>
                        </div>
                        
                            <h1 id="user-context-title" className="text-md">{card.id} | {card.title}</h1>
                            <h1 id="user-context-content" className="text-md">{card.content}</h1>
                            <h1 id="user-context-tag" className="font-LINESeedKR_Th text-md">{card.hashtag}</h1>
                        </div>
                </div>
            ))}
        </div>
    );
  };

function Feed(){
    // feed 데이터
    const feedCards = [
        {
            id: "ces_1jk",
            title: "대구 중구 골목 투어 : 근대 문화 골목을 여행하다.",
            content:"뭐시기 뭐시기",
            hashtag:["#1", "#2"],
            profile_picture:"/user_profile_1.jpg",
            content:"동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
            stars:30
        },
        {
            id: "ces_1jk",
            title: "대구 중구 골목 투어 : 근대 문화 골목을 여행하다.",
            content:"뭐시기 뭐시기",
            hashtag:["#1", "#2"],
            profile_picture:"/user_profile_2.jpg",
            content:"동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
            stars:30
        },
        {
            id: "ces_1jk",
            title: "대구 중구 골목 투어 : 근대 문화 골목을 여행하다.",
            content:"뭐시기 뭐시기",
            hashtag:["#1", "#2"],
            profile_picture:"/user_profile_1.jpg",
            content:"동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
            stars:30
        },
      ];
    
    const navigate = useNavigate()

    const gotoCourseMaker = () =>{
        navigate("/feed/maker")
    }

    return(
        <div className="flex flex-col w-full h-full bg-white">
            <div id="feed-container" className="flex flex-row w-full justify-between p-3 z-0 items-center shadow-lg">
                <div id="feed-ui-texts" className="flex flex-col">
                    <h1 className="font-LINESeedKR_Bd text-2xl">코스 추천 FEED</h1>
                    <p className="text-md">유저가 제작한 대구 코스 체험 평가</p>
                </div>
                <div id="feed-ui-icons" className="flex flex-row justify-around">
                    <button onClick={gotoCourseMaker} className="flex pr-3">
                            <img src="/feed_create.svg" className="size-10"/>
                    </button>
                </div>
            </div>

            <FeedCard cards={feedCards} />

            <Footer_nav/>
        </div>
    )
}

export default Feed