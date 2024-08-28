import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import Layout from './layouts/Layout';
import Error from './pages/Error';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="mypage" element={<MyPage />} />
            <Route index element={<Main />} />
            <Route path="main" element={<Main />} />

          </Route>
          <Route path="*" element={<Error />} /> /* 레이아웃 바깥으로 에러페이지 띄우기*/
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
