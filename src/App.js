import './App.scss';
import Footer from "./companents/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Popular from "./page/Popular";
import TopRated from "./page/TopRated";
import MovieDetails from "./companents/MovieDetails";
import ActorDetails from "./companents/ActorDetails";
import ActorMovie from "./companents/ActorMovie";
import Search from "./page/Search";
import Header from "./companents/Header";
function App() {
  return (
    <div id="App">
        <Header/>
        <Routes>
            <Route path={"/"} element={ <Home/>}/>
            <Route path={"/popular"} element={ <Popular/> }/>
            <Route path={"/topRated"} element={ <TopRated/> }/>
            <Route path={"/movie/movie_details/:id"} element={ <MovieDetails/>}/>
            <Route path={"/actor/actor_details/:personId"} element={ <ActorDetails/>}/>
            <Route path={"/actor/actor_movie/:personId"} element={ <ActorMovie/>}/>
            <Route path={"/movie/movie/:movieİmg"} element={ <Home/>}/>
            <Route path={"/search/search_movie/:movieName"} element={ <Search/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
