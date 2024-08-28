
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element ={<Layout/>}>
          {/* <Route path="/parents" element ={<Layout/>}> */}
          <Route index element ={<Main/>}/>
          <Route path="login" element ={<Login/>}/>
          <Route path="mypage" element ={<MyPage/>}/>
          </Route>

        </Routes>
      
      
      </BrowserRouter>
    </>
  );
}

export default App;
