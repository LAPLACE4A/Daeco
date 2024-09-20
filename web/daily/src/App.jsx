import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Feed from './components/Feed'
import Point from './components/Point'
import Profile from './components/Profile'
import Login from './components/Login'
import NotFound from './components/NotFound'

function App() {
  return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/feed" element={<Feed />}></Route>
					<Route path="/point" element={<Point />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/login" element={<Login />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  )
}

export default App
