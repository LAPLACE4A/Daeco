import { useState } from 'react';
import Footer_nav from "./Footer_nav"

function CourseMaker(){

    const mbti = ['enfp', 'enfj', 'entp', 'entj', 'esfp', 'esfj', 'estp', 'estj', 'infp', 'infj', 'intp', 'intj', 'isfp', 'isfj', 'istp', 'istj']

    const [isSelectedMale, setGender] = useState(false)

    const ToggleGender = () =>{
        setGender(isSelectedMale => !isSelectedMale)
    }

    return(
        <>
                <div id="maker-container" className="w-full h-screen p-10 bg-white">
            <div id="ui-header" className="flex flex-row items-center p-5">
                <img src="/logo.jpg" className="size-16 rounded-full mr-10"/>
                <div id="ui-header-text" className="flex flex-col">
                    <h1 className="font-LINESeedKR_Bd text-2xl">Daeco</h1>
                    <h1 className="text-xl">코스 메이커 정보 입력 </h1>
                </div>
            </div>
            <div id="ui-forms" className="flex flex-col m-5">
                <div id="ui-fomrs-age-gender" className="flex flex-col">
                    <h1 className='font-LINESeedKR_Bd text-xl'>나이</h1>
                    <div className='flex flex-row justify-between'>
                        <input id="ui-forms-age" type="number" required className="w-56 h-10 border-t-0 border-l-0 border-r-0 border-b-4 border-gray-400"/>
                        <div id="ui-forms-gender" className='ml-5'>
                            <button id="gender-male" onClick={ToggleGender} className={`w-10 h-10 font-LINESeedKR_Bd text-xl ${isSelectedMale ? 'bg-yellow-300' : 'bg-gray-200'}`}>남</button>
                            <button id="gender-female" onClick={ToggleGender} className={`w-10 h-10 font-LINESeedKR_Bd text-xl ${isSelectedMale ? 'bg-gray-200' : 'bg-yellow-300'}`}>여</button>
                        </div>
                    </div>

                </div>

                <div id="ui-forms-mbti" className='flex flex-row w-full py-10 justify-between items-center'>
                    <h1 className='font-LINESeedKR_Bd text-xl mr-5'>MBTI</h1>
                    <select required className='w-64 h-12 p-auto border-b-4 border-gray-400'>
                        {mbti.map((item, index) =>(
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div id="ui-forms-role">

                </div>
                <div>
                    
                </div>
            </div>

        </div>
        <Footer_nav/>
        </>
    )
}

export default CourseMaker