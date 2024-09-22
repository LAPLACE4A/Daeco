import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer_nav from "./Footer_nav";
import Loding from "./Loding";

const CourseCards = ({ courses, showDelete }) => { //상호명, 지도, content 컴포넌트 추가
    return (
        <div id="maker-ui-fomrs-place_list" className="flex flex-wrap w-full h-auto bg-gray-100 border-t-0 border-l-0 border-r-0 border-b-4 border-gray-400 shadow-lg rounded-2xl rounded-b-none justify-between">
            {courses.map((course, index)=>(
                <div key={index} className="flex flex-col max-w-[250px] min-w-[250px] max-h-[300px] bg-gray-50 rounded-2xl shadow-lg flex-shrink-0 mx-auto my-10">
                    <div className="relative w-full h-full bg-yellow-200">
                        <div className={`absolute w-7 h-7 -top-3 -right-3 bg-red-400 rounded-full ${showDelete ? 'block' : 'hidden'}`}/>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-lg text-center py-5">{index+1}번 장소</h3>
                    </div>
                    <div className="w-full h-full bg-gray-300 rounded-b-2xl">
                        <p className="text-gray-600 p-10">{course.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
  };

function CourseMaker(){

    const courseCards = [
        {
            name: "봉자막창",
            content: "1번템플릿임",
        },
        {
            name: "아리츠",
            content: "2번템플릿임"
        },
        {
            name: "르폴뒤",
            content: "3번템플릿임"
        },
        {
            name: "빠다를뺑프랑스",
            content: "4번템플릿임"
        },
        {
            name: "소명커피바",
            content: "5번템플릿임5번템플릿임5번템플릿임"
        },
        {
            name: "딥커피로스터스",
            content: "5번템플릿임5번템플릿임5번템플릿임"
        },
        {
            name: "달서별빛캠핑장",
            content: "5번템플릿임5번템플릿임5번템플릿임"
        },
        {
            name: "대구미술관",
            content: "5번템플릿임5번템플릿임5번템플릿임"
        },
        {
            name: "고미텐",
            content: "5번템플릿임5번템플릿임5번템플릿임"
        },
        {
            name: "나비다드 481-1",
            content: "5번템플릿임5번템플릿임5번템플릿임"
        },
    ]

    const [showDelete, setShowDelete] = useState("false")
    const navigate = useNavigate();

    const toggleDelete = () => {
        setShowDelete(!showDelete)
    };

    const [title, setTitle] = useState("코스 1");
    const [place_list, setPlace_list] = useState([]);
    const [time_list, setTime_list] = useState([]);
    const [weather, setWeather] = useState("");
    const [concept, setConcept] = useState("indoor");
    
    const weather_list = ["sunny-hot", "sunny-warm", "sunny-cool", "sunny-cold", "cloudy-hot", "cloudy-warm", "cloudy-cool", "cloudy-cold", "rainy-hot", "rainy-warm", "rainy-cool", "rainy-cold", "snowy-hot", "snowy-warm", "snowy-cool", "snowy-cold"]
    const concept_list = ["activity", "indoor", "experience", "healing", "culture", "food", "photo", "shopping"]

    const location = useLocation();
    const feedCard = location.state?.feedCards || [];

    const PostCourseMaker = () =>{
        navigate("/feed")
    }

    // const [courseCards, setcourseCards] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // const fetchTravelData = async () => {
    //     try {
    //     const course = await fetch("https://daeco-d6m0.onrender.com/course/"+feedCard.course_id);
    //     const courseData = await course.json();
    //     setcourseCards(courseData);

    //     setLoading(false);
    //     } catch (error) {
    //     setError(`Fetch error: ${error.message}. Stack: ${error.stack}`);
    //     setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     fetchTravelData();
    //   }, []);    

    // if (loading) {
    //     return <Loding/>
    // }
    // if (error) {
    //     return <p>{error}</p>;
    // }

    return(
        <div className="w-full h-full">
        <div id="maker-container" className="flex flex-col w-full h-screen bg-white z-10">
            <div id="maker-ui" className="flex flex-col w-full h-full">
                <div id="maker-ui-title" className="w-full h-auto justify-between p-5 bg-white shadow-lg">
                    <h1 className="font-LINESeedKR_Bd text-2xl">맞춤 코스 메이커</h1>
                </div>
                <div id="maker-ui-container" className="w-full h-full mb-20 bg-white overflow-scroll">

                    <div id="maker-ui-forms" className="flex flex-col w-full h-full px-12">
                        <div className="w-full h-auto py-10 justify-between items-center">
                                <h1 className='font-LINESeedKR_Bd text-xl mb-5'>제목</h1>
                                <div className='flex flex-row justify-between'>
                                    <input required id="maker-ui-fomrs-title" type="text" defaultValue={title} className="w-full h-16 bg-gray-100 border-t-0 border-l-0 border-r-0 border-b-4 border-gray-400 shadow-lg rounded-2xl rounded-b-none"/>
                                </div>
                        </div>
                        <div className="w-full h-auto py-10 justify-between items-center">
                            <div className="flex flex-row justify-between mb-5">
                                <h1 className='flex flex-col font-LINESeedKR_Bd text-xl justify-around items-center'>장소 목록</h1>
                                    <button onClick={toggleDelete}>
                                        <h1 className='font-LINESeedKR_Bd text-sm text-red-700 p-5 rounded-2xl bg-gray-200'>수정</h1>
                                    </button>
                            </div>

                            <div className='flex flex-row justify-between'>
                                <CourseCards courses={courseCards} showDelete={showDelete}/>
                            </div>
                        </div>
                        <div className="flex flex-row w-full h-auto py-10 justify-between items-center">
                            <div>
                                <h1 className='font-LINESeedKR_Bd text-xl mb-5'>시작 시간</h1>
                                    <div className='flex flex-row justify-between'>
                                        <input required id="maker-ui-fomrs-time_start" type="datetime-local" className="w-full h-16 bg-gray-100 border-t-0 border-l-0 border-r-0 border-b-4 border-gray-400 shadow-lg rounded-2xl rounded-b-none"/>
                                    </div>
                            </div>
                            <div>
                                <h1 className='font-LINESeedKR_Bd text-xl mb-5'>종료 시간</h1>
                                    <div className='flex flex-row justify-between'>
                                        <input required id="maker-ui-fomrs-time_end" type="datetime-local" className="w-full h-16 bg-gray-100 border-t-0 border-l-0 border-r-0 border-b-4 border-gray-400 shadow-lg rounded-2xl rounded-b-none"/>
                                    </div>
                            </div>
                        </div>
                        <div className="w-full h-auto py-10 justify-between items-center">
                                <h1 className='font-LINESeedKR_Bd text-xl mb-5'>날씨</h1>
                                <div className='flex flex-row justify-between'>
                                    <select required id="maker-ui-fomrs-weather-select" defaultValue={weather} className='w-64 h-12 p-auto border-b-4 border-gray-400'>
                                        {weather_list.map((item, index) =>(
                                            <option key={index} defaultValue={weather} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>
                        </div>
                        <div className="w-full h-auto py-10 justify-between items-center">
                                <h1 className='font-LINESeedKR_Bd text-xl mb-5'>컨셉</h1>
                                <div className='flex flex-row justify-between'>
                                    <select required id="maker-ui-fomrs-concept" defaultValue={concept} className='w-full h-16 bg-gray-100 border-t-0 border-l-0 border-r-0 border-b-4 border-gray-400 shadow-lg rounded-2xl rounded-b-none'>
                                            {concept_list.map((item, index) =>(
                                                <option key={index} value={item}>{item}</option>
                                            ))}
                                    </select>
                                </div>
                        </div>       
                        <div id="maker-ui-forms-button" className="flex w-full h-auto justify-center">
                            <button onClick={PostCourseMaker} className='w-40 h-24 my-10 rounded-2xl shadow-lg bg-yellow-300'>
                                <h1 className="font-LINESeedKR_Bd text-2xl">완료</h1>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer_nav/>
    </div>
    )
}

export default CourseMaker