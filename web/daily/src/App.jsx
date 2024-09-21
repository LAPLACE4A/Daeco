import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Feed from './components/Feed'
import CourseMaker from './components/CourseMaker'
import Point from './components/Point'
import Profile from './components/Profile'
import UserInfomation from './components/UserInfomation'
import Login from './components/Login'
import Logout from './components/Logout'
import NotFound from './components/NotFound'
//import Loding from './components/Loding'

function App() {
  return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/feed" element={<Feed />}></Route>
					<Route path="/feed/maker" element={<CourseMaker />}></Route>
					<Route path="/point" element={<Point />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/profile/change" element={<UserInfomation isUserInfoExist={true}/>}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/logout" element={<Logout />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  )
}

export default App
