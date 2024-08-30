import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/>}>
          <Route index element={ <Main/>} />
          <Route path="pokemons" element={ <Pokemon/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;