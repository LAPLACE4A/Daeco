import React, { useState, useEffect } from "react";
import Footer_nav from "./Footer_nav";
import Loding from "./Loding";
import event from '../../../../application/data_generation/행사/event.json'

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

function Home() {

  const courseCards = [
    {
      title: "대구 달성군 여행",
      description: "자연과 함께하는 행복한 여행",
      image: "/home/course_local_1.jfif",
    },
    {
      title: "대구 중구 여행",
      description: "MZ 취향 저격 코스를 즐겨봐!",
      image: "/home/course_local_2.jfif",
    },
    {
      title: "대구 서구 여행",
      description: "서구의 유명한 어딘가",
      image: "/home/course_local_3.jfif",
    },
  ];

  const placeCards = [
    {
      title: "대구 북구 실내빙상장 어때요?",
      description:
        "대구 지역의 유일한 국제 규격의 스케이트장(실내스케이트장, 쇼트트랙, 피겨, 아이스하키, 컬링)",
      image: "/home/course_place_1.jfif",
    },
    {
      title: "대구 서구는 어때요?",
      description: "서구의 유명한 어딘가",
      image: "/home/course_place_2.jfif",
    },
  ];
  
  const festivalName = event[0].name
  const festivalPeriod = event[0].period[0] + " ~ " + event[0].period[1]

  // const [courseCards, setcourseCards] = useState([]);
  // const [placeCards, setPlaceCards] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fetchTravelData = async () => {
  //   try {
  //     const course = await fetch("https://daeco-d6m0.onrender.com/courses");
  //     const courseData = await course.json();
  //     setcourseCards(courseData);

  //     const placeResponse = await fetch(
  //       "https://daeco-d6m0.onrender.com/events"
  //     );
  //     const placeData = await placeResponse.json();
  //     setPlaceCards(placeData);

  //     setLoading(false);
  //   } catch (error) {
  //     setError(`Fetch error: ${error.message}. Stack: ${error.stack}`);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchTravelData();
  // }, []);

  // if (loading) {
  //   return <Loding/>
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    <div className="w-full h-full">
      <div id="home_contents" className="w-full h-full">
        <div
          id="img-scroll-banner"
          className="flex flex-row w-full h-1/3 bg-black-0"
        >
          <img src={"/home/메인화면_풍경.jpg"} className="object-cover" />
        </div>

        <div className="absolute p-5 bg-white rounded-t-3xl left-0 bottom-0 w-full h-2/3 mb-20 overflow-scroll scrollbar-hide">
          <div
            id="latest-daegu-festival"
            className="w-full h-10 mb-10 rounded-xl bg-clicked-menu shadow-lg text-center content-center"
          >
            <h1 className="font-LINESeedKR_Bd text-xl text-white">
              {festivalName} ( {festivalPeriod} )
            </h1>
            {/* festival 추가 */}
          </div>

          <div id="custom-fit-course" className="flex flex-col w-full bg-white">
            {/* 맞춤 여행 코스 */}
            <div
              id="custom-fit-course-local"
              className="flex flex-col p-3 mb-7 bg-gray-100 justify-around rounded-2xl shadow-lg"
            >
              <h1 className="font-LINESeedKR_Bd mb-5 text-xl border-b-2 border-gray-300">
                맞춤 여행 코스
              </h1>
              <TravelCardsHorizontal cards={courseCards} />
            </div>

            {/* 맞춤 여행 장소 */}
            <div
              id="custom-fit-course-place"
              className="flex flex-col p-3 bg-gray-100 justify-around rounded-2xl shadow-lg"
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
