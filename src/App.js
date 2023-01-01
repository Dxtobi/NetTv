import { useState } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Anime } from './pages/Animie';
//import AuthPage from './pages/AuthPage';
//import { Game } from './pages/GameUi';
import TwitApi from './pages/TweetGenerator';
import Movie from './pages/Movie';
import { Movies } from './pages/Movies';
//import styles from './styles';


function App() {
  // eslint-disable-next-line no-unused-vars
  const [authenticated, setAuthenticated] = useState(false)
  const [darkMood, setSetDarkMood] = useState(false)

  return (
    <div className={`${darkMood ? 'dark' : ''} m-auto min-h-[100vh]`}>
      <div className={`min-h-[100vh] dark:text-white dark:bg-gray-900`}>
        <Header toggleTheme={setSetDarkMood} mood={darkMood} />
        <Routes>
          <Route path='/' exact element={<Movies />} />
          <Route path='/movie'  element={<Movie />} />
          <Route path='/anime'  element={<Anime/>}/>
          <Route path='/twit-imgs'  element={ <TwitApi/>}/>
          <Route path='*'  element={<Movies/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
