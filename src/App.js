import './App.css'

import { BrowserRouter, Route } from 'react-router-dom'
import DisplayMovies from "./Componets/DisplayMovies";
import DisplayTv from "./Componets/DisplayTv";
import AudioBookDisplay from "./Componets/AudioBookDisplay";
import DisplayEbook from "./Componets/DisplayEbook";
import DisplayPodcast from "./Componets/DisplayPodcast";
import DisplayMusic from "./Componets/DispalyMusic";
import DisplayAll from "./Componets/DisplayAll";
import SearchAll from "./Componets/SearchAll";
import Header from "./Componets/Header/Header";
import MyList from "./Componets/MyList";

// This is the main app.js file
function App() {

  return (
      <BrowserRouter>
          <Header/>
          <Route exact={true} path='/search/all'><SearchAll redirect='/display/all' heading='Search for Movies,Tv Shows,Music,Audiobooks,eBooks and books'/></Route>
          <Route exact={true} path='/search/music'><SearchAll redirect='/display/music' heading='Search for music '/></Route>
          <Route exact={true} path='/search/movie'><SearchAll redirect='/display/movie' heading='Search for movies'/></Route>
          <Route exact={true} path='/search/tv'><SearchAll redirect='/display/tv' heading='Search for tv shows'/></Route>
          <Route exact={true} path='/search/audiobook'><SearchAll redirect='/display/audiobook' heading='Search for audiobooks'/></Route>
          <Route exact={true} path='/search/ebook'><SearchAll redirect='/display/ebook' heading='Search for ebooks'/></Route>
          <Route exact={true} path='/search/podcast'><SearchAll redirect='/display/podcast' heading='Search for podcasts'/></Route>
          <Route exact={true} path='/display/movie'><DisplayMovies/></Route>
          <Route exact={true} path='/display/tv'><DisplayTv/></Route>
          <Route exact={true} path='/display/audiobook'><AudioBookDisplay/></Route>
          <Route exact={true} path='/display/ebook'><DisplayEbook/></Route>
          <Route exact={true} path='/display/podcast'><DisplayPodcast/></Route>
          <Route exact={true} path='/display/music'><DisplayMusic/></Route>
          <Route exact={true} path='/display/all'><DisplayAll/></Route>
          <Route exact={true} path='/display/my list'><MyList/></Route>
      </BrowserRouter>
  );
}

export default App;
