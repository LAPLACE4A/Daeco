import { useNavigate } from "react-router-dom";

function NotFound(){

    const navigate = useNavigate();

    const gotoHome = () =>{
        navigate("/")
    }

    return(
        <div id='bg' className="flex flex-col w-full h-screen justify-center items-center bg-gray-400">
            <h1 className="text-xl mb-10">존재하지 않는 페이지입니다.</h1>
            <button onClick={gotoHome} className="flex flex-row items-center p-3 rounded-2xl bg-slate-100">
                <h1 className="mr-5">홈으로 돌아가기</h1>
                <img src="/menu_home.svg"/>
            </button>
        </div>
    )
}

export default NotFound