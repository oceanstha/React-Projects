import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import AnimeDetail from './pages/animeDetail.jsx';
import Manga from  './pages/Manga.jsx';
function App() {
  

  return (
    <>
      <div>
      <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail' element={<AnimeDetail />}></Route>
      <Route path='/manga' element={<Manga />}></Route>
      </Routes>
  </Router>
      </div>
    </>
  )
}

export default App
