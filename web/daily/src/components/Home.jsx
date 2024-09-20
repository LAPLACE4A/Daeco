import React from "react";
import Footer_nav from "./Footer_nav";

const TravelCardsHorizontal = ({ cards }) => {
  return (
    <div className="overflow-x-scroll flex space-x-4 p-4 scrollbar-hide">
      {cards.map((card, index) => (
        <div
          key={index}
          className="min-w-[250px] max-w-[250px] bg-white rounded-lg shadow-lg flex-shrink-0"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Home 컴포넌트
function Home() {
  // 맞춤 여행 코스 카드 리스트
  const localCards = [
    {
      title: "대구 달성군 여행",
      description: "자연과 함께하는 행복한 여행",
      image: "/course_local_1.jfif", // 이미지 경로 수정 필요
    },
    {
      title: "대구 중구 여행",
      description: "MZ 취향 저격 코스를 즐겨봐!",
      image: "/course_local_2.jfif", // 이미지 경로 수정 필요
    },
    {
      title: "대구 서구 여행",
      description: "서구의 유명한 어딘가",
      image: "/course_local_3.jfif", // 이미지 경로 추가 필요
    },
  ];

  // 맞춤 여행 장소 카드 리스트
  const placeCards = [
    {
      title: "대구 북구 실내빙상장 어때요?",
      description:
        "대구 지역의 유일한 국제 규격의 스케이트장(실내스케이트장, 쇼트트랙, 피겨, 아이스하키, 컬링)",
      image: "/course_place_1.jfif", // 이미지 경로 수정 필요
    },
    {
      title: "대구 서구는 어때요?",
      description: "서구의 유명한 어딘가",
      image: "/course_place_2.jfif", // 이미지 경로 수정 필요
    },
  ];

  return (
    <div className="w-full h-full">
      <div id="home_contents" className="w-full h-full bg-yellow-300">
        <div
          id="img-scroll-banner"
          className="flex flex-row w-full h-1/3 bg-indigo-400 z-0"
        >
          <img src="풍경1.jpg" className="object-cover" />
          <img src="풍경2.jpg" className="object-cover overflow-hidden" />
          <img src="풍경3.jpg" className="object-cover overflow-hidden" />
        </div>

        <div className="absolute p-5 bg-white rounded-t-3xl bottom-5 left-0 w-full h-2/3 mb-20 overflow-scroll">
          <div
            id="latest-daegu-festival"
            className="w-full h-10 mb-10 rounded-xl bg-clicked-menu shadow-md text-center content-center"
          >
            <h1 className="font-LINESeedKR_Bd text-xl text-white">
              최신 대구 페스티벌
            </h1>
            {/* festival 추가 */}
          </div>

          <div id="custom-fit-course" className="flex flex-col w-full bg-white">
            {/* 맞춤 여행 코스 */}
            <div
              id="custom-fit-course-local"
              className="flex flex-col p-3 mb-7 bg-gray-100 justify-around rounded-2xl shadow-md"
            >
              <h1 className="font-LINESeedKR_Bd mb-5 text-xl border-b-2 border-gray-300">
                맞춤 여행 코스
              </h1>
              <TravelCardsHorizontal cards={localCards} />
            </div>

            {/* 맞춤 여행 장소 */}
            <div
              id="custom-fit-course-place"
              className="flex flex-col p-3 bg-gray-100 justify-around rounded-2xl shadow-md"
            >
              <h1 className="font-LINESeedKR_Bd mb-5 text-xl border-b-2 border-gray-300">
                맞춤 여행 장소
              </h1>
              <TravelCardsHorizontal cards={placeCards} />
            </div>
          </div>
        </div>
      </div>

      <Footer_nav />
    </div>
  );
}

export default Home;
