import Footer_nav from "./Footer_nav";

const CourseCard = ({ cards }) => { //Course example content 컴포넌트 추가
    return (
        <div id="course-template" className="flex flex-wrap w-full h-screen p-10 overflow-y-scroll scrollbar-hide overflow-hidden justify-center">
            {cards.map((card, index)=>(
                <button key={index}>
                    <div className="min-w-[250px] max-w-[250px] min-h-[300px] max-h-[300px] bg-emerald-300 rounded-lg shadow-lg flex-shrink-0 mb-24 m-10">
                        <div className="p-4">
                            <img src='/home/풍경1.jpg' className="mb-5"/>
                            <h3 className="font-bold text-lg">{card.name}</h3>
                            <p className="text-gray-600">{card.content}</p>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
  };

function CourseMaker(){

    const courseCards = [
        {
            name: "1번 템플릿",
            content: "1번템플릿임",
            url:"template_1"
        },
        {
            name: "2번 템플릿",
            content: "2번템플릿임"
        },
        {
            name: "3번 템플릿",
            content: "3번템플릿임"
        },
        {
            name: "4번 템플릿",
            content: "4번템플릿임"
        },
    ]

    return(
        <div className="w-full h-full">
        <div id="maker-container" className="flex flex-col w-full h-screen bg-white z-10">
            <div id="maker-ui" className="flex flex-row justify-between p-5 bg-white shadow-lg">
                <h1 className="font-LINESeedKR_Bd text-2xl">맞춤 코스 메이커</h1>
            </div>
            <CourseCard cards={courseCards}/>
        </div>
        <Footer_nav/>
    </div>
    )
}

export default CourseMaker