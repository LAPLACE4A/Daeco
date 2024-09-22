import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Footer_nav from "./Footer_nav"
import RatesFeed from "./RatesFeed";
import Loding from "./Loding";

//feedCard 컴포넌트 생성
const FeedCard = ({ cards, openRatesModal, gotoCourseMaker }) => {
    return (
        <div id="feed-recommend" className="w-full mb-20 bg-white overflow-x-scroll scrollbar-hide">
            {cards.map((card, index)=>(
                    <div id="feed-container" key={index} className="flex flex-col w-full h-auto p-7 bg-white justify-around border-b-2 border-gray-300">
                        <button onClick={() => gotoCourseMaker(card)} className="">
                            <div id="user-info" className="flex flex-row">
                                <img src="/logo/logo.svg" className="rounded-full size-10 mr-5"/>
                                <div id="user-info-text" className="flex flex-col">
                                    <h1 className="font-LINESeedKR_Bd text-md">{card.user_id}</h1>
                                    <p className="text-sm">{card._id}</p>
                                </div>
                            </div>
                                <img id="user-pic" src={card.profile_picture} className="w-full h-auto rounded-2xl my-2"/> {/* src 바꿔야함 */}
                            <div id="user-context-container" className="flex flex-col w-full">
                                <div id="user-context-header" className="flex flex-row justify-between items-center">
                                    <div id="user-context-icons" className="items-center">
                                        <button className="flex flex-row ">
                                            <h1 className="font-LINESeedKR_Bd text-md pr-3">{card.stars}</h1>
                                            <img src="/feed/icon/feed_filled_star.svg" onClick={openRatesModal} className="size-6 mr-3"/>
                                        </button>
                                    </div>
                                    <h1 id="user-context-tag" className="font-LINESeedKR_Rg text-md text-gray-500">{card.hashtag}</h1>
                                </div>
                                    <h1 id="user-context-content" className="text-md pt-5">{card.content}</h1>
                                </div>
                            </button>
                    </div>
            ))}
        </div>
    );
  };

function Feed(){
    // feed 데이터
    // const feedCards = [
    //     {
    //         id: "ces_1jk",
    //         title: "대구 중구 골목 투어 : 근대 문화 골목을 여행하다.",
    //         hashtag:["#1", "#2", "#1", "#2", "#1", "#2"],
    //         profile_picture:"/profile/user_profile_1.jpg",
    //         content:"동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    //         stars:30,
    //         isGivedRate:true
    //     },
    //     {
    //         id: "ces_1jk",
    //         title: "대구 중구 골목 투어 : 근대 문화 골목을 여행하다.",
    //         hashtag:["#1", "#2"],
    //         profile_picture:"/profile/user_profile_2.jpg",
    //         content:"동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    //         stars:30,
    //         isGivedRate:true
    //     },
    //     {
    //         id: "ces_1jk",
    //         title: "대구 중구 골목 투어 : 근대 문화 골목을 여행하다.",
    //         hashtag:["#1", "#2"],
    //         profile_picture:"/profile/user_profile_1.jpg",
    //         content:"동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    //         stars:30,
    //         isGivedRate:false
    //     },
    //   ];

    const [feedCards, setfeedCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTravelData = async () => {
        try {
        const feeds = await fetch("https://daeco-d6m0.onrender.com/ratings");
        const feedsData = await feeds.json();
        setfeedCards(feedsData);

        setLoading(false);
        } catch (error) {
        setError(`Fetch error: ${error.message}. Stack: ${error.stack}`);
        setLoading(false);
        }
    };

    const navigate = useNavigate()
    const gotoCourseMaker = (feedCards) =>{
        navigate("/feed/maker", { state: { feedCards } })
    }

    const [isModalOpen, setModalOpen] = useState(false);
    function openRatesModal(){
        setModalOpen(true)
    }
    function closeRatesModal(){
        setModalOpen(false)
    }

    useEffect(() => {
        fetchTravelData();
        if (isModalOpen) {
            document.body.style.overflow = "hidden"; // 스크롤 비활성화
        } else {
            document.body.style.overflow = "auto"; // 스크롤 활성화
        }

        return () => {
            document.body.style.overflow = "auto"; // 컴포넌트 언마운트 시 기본값으로 복원
        };
    }, []);

    if (loading) {
        return <Loding/>
    }
    if (error) {
        return <p>{error}</p>;
    }

    return(
        <div className="flex flex-col w-full h-full bg-white">
            <RatesFeed isOpen={isModalOpen} closeModal={closeRatesModal}/>
            <div id="feed-container" className="flex flex-row w-full justify-between p-3 z-0 items-center shadow-lg">
                <div id="feed-ui-texts" className="flex flex-col">
                    <h1 className="font-LINESeedKR_Bd text-2xl">코스 추천 FEED</h1>
                    <p className="text-md">유저가 제작한 대구 코스 체험 평가</p>
                </div>
                {/*
                <div id="feed-ui-icons" className="flex flex-row justify-around">
                    <button onClick={gotoCourseMaker} className="flex pr-3">
                        <img src={"/feed/icon/feed_create.svg"} className="size-10"/>
                    </button>
                </div>
                */}
            </div>

            <FeedCard cards={feedCards} openRatesModal={openRatesModal} gotoCourseMaker={gotoCourseMaker} />

            <Footer_nav/>
        </div>
    )
}

export default Feed