import About from './pages/About'
import Main from './pages/Main'
import {Menu} from './pages/Menu'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// export : 컴포넌트를 다른 파일에서 사용하고 싶을 때 내보내는 역할
            // 1) function 바로 옆에 붙이면 객체로 묶어서 내보내기 때문에
            // import 할 때 구조분해할당을 해주어야 한다.
            // 2) 하단에 export default [컴포넌트 이름]으로 사용할 때는 default로 지정하기 때문에
            // import 할 때 구조분해 할당을 하지 않아도 된다. 
// import : 외부에 있는 컴포넌트를 가져오는 역할
//          ./ : 현재 파일의 위치
//          ../ : 상위폴더 위치를 의미

// function App() {
//   return (
//     <>
//      <Main/>
//      <About/>
//      <Menu/>
//     </>
//   );
// }

/*
  라우팅
    : 어떤 요청을 어디로 안내 및 매핑을 할 것인지를 정해놓고 진행하는 것
      리액트에서는 요청에 따라 요청에 매핑된 컴포넌트를 렌더링 한다.


*/

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Main/>}/> */}
        <Route index element={<Main/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>


      </Routes>
    
    </BrowserRouter>
    
    </>
  )
}


export default App;
