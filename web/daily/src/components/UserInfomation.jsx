import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function UserInfomation({isUserInfoExist}){

    const mbti = ['enfp', 'enfj', 'entp', 'entj', 'esfp', 'esfj', 'estp', 'estj', 'infp', 'infj', 'intp', 'intj', 'isfp', 'isfj', 'istp', 'istj']

    const [isSelectedMale, setGender] = useState(true)

    const navigate = useNavigate()

    const ToggleGender = () =>{
        setGender(isSelectedMale => !isSelectedMale)
    }

    const submitUserInfo = () =>{
        const name = document.getElementById('ui-forms-name').value
        const age = document.getElementById('ui-forms-age').value
        const gender = (isSelectedMale ? 'male' : 'female')
        const mbti = document.getElementById('ui-forms-mbti-select').value

        navigate("/")
    }

    return(
        <>
            <div id="maker-container" className="w-full h-screen p-5 bg-white">
                <div id="ui-header" className="flex flex-row items-center p-5 pb-10">
                    <img src="/logo/logo.svg" className="size-16 rounded-full mr-10"/>
                    <div id="ui-header-text" className="flex flex-col">
                        <h1 className="font-LINESeedKR_Bd text-2xl">Daeco</h1>
                        <h1 className="text-lg">사용자님의 기본 정보를 입력해주세요.</h1>
                    </div>
                </div>
                <div id="ui-forms" className="flex flex-col">
                    <div id="ui-fomrs-name" className="w-full h-auto py-10 justify-between items-center">
                            <h1 className='font-LINESeedKR_Bd text-xl'>이름</h1>
                            <div className='flex flex-row justify-between'>
                                <input id="ui-forms-name" type="text" required className="w-full h-10 border-t-0 border-l-0 border-r-0 border-b-4 border-gray-400"/>
                            </div>
                    </div>
                    

                    <div id="ui-fomrs-age-gender" className="w-full h-auto py-10 justify-between items-center">
                        <h1 className='font-LINESeedKR_Bd text-xl'>나이</h1>
                        <div className='flex flex-row justify-between'>
                            <input id="ui-forms-age" type="number" required className="w-56 h-10 border-t-0 border-l-0 border-r-0 border-b-4 border-gray-400"/>
                            <div id="ui-forms-gender" className='ml-5'>
                                <button id="gender-male" onClick={ToggleGender} className={`w-11 h-11 rounded-l-2xl font-LINESeedKR_Bd text-xl ${isSelectedMale ? 'bg-yellow-300' : 'bg-gray-200'}`}>남</button>
                                <button id="gender-female" onClick={ToggleGender} className={`w-11 h-11 rounded-r-2xl font-LINESeedKR_Bd text-xl ${isSelectedMale ? 'bg-gray-200' : 'bg-yellow-300'}`}>여</button>
                            </div>
                        </div>
                    </div>

                    <div id="ui-forms-mbti" className='flex flex-row w-full py-10 justify-between items-center'>
                        <h1 className='font-LINESeedKR_Bd text-xl mr-5'>MBTI</h1>
                        <select required id="ui-forms-mbti-select" className='w-64 h-12 p-auto border-b-4 border-gray-400'>
                            {mbti.map((item, index) =>(
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div id="ui-forms-button" className='flex w-full h-auto p-auto justify-between'>
                        <button onClick={submitUserInfo} className='w-40 h-24 mx-auto my-24 rounded-2xl shadow-lg bg-yellow-300'>
                            <h1 className="font-LINESeedKR_Bd text-2xl">완료</h1>
                        </button>
                        {isUserInfoExist ? 
                            <button onClick={submitUserInfo} className='w-40 h-24 mx-auto my-24 rounded-2xl shadow-lg bg-yellow-300'>
                                <h1 className="font-LINESeedKR_Bd text-2xl">돌아가기</h1>
                            </button> : null}
                </div>

            </div>
        </>
    )
}

export default UserInfomation