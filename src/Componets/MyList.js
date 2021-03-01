// This is the component that will display my list
import './css/Display.css'
import React from "react";

class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'movies': JSON.parse(localStorage.getItem('movie')),
            'tv': JSON.parse(localStorage.getItem('tv')),
            'music': JSON.parse(localStorage.getItem('music')),
            'ebook': JSON.parse(localStorage.getItem('ebook')),
            'audiobook': JSON.parse(localStorage.getItem('audiobook')),
            'podcast': JSON.parse(localStorage.getItem('podcast'))
        }
        this.removeMovie = this.removeMovie.bind(this);
        this.removeTv = this.removeTv.bind(this);
        this.removeEbook = this.removeEbook.bind(this);
        this.removePodcast = this.removePodcast.bind(this)

    }
    // This will remove podcasts
    removePodcast(e){
        let id = e.target.id
        console.log(id)
        let podcast = JSON.parse(localStorage.getItem('podcast'));
        for (let c = 0 ; c < podcast.result.length ;c++){
            if(podcast.result[c].name === id){
                podcast.result.splice(c,1)
            }
        }
        localStorage.setItem('podcast',JSON.stringify(podcast))
        window.location.href= '/display/my%20list'
    }
    // This will remove audio books
    removeAudioBook(e){
        let id = e.target.id
        console.log(id)
        let audiobook = JSON.parse(localStorage.getItem('audiobook'));
        for (let c = 0 ; c < audiobook.result.length ;c++){
            if(audiobook.result[c].book === id){
                audiobook.result.splice(c,1)
            }
        }
        localStorage.setItem('audiobook',JSON.stringify(audiobook))
        window.location.href= '/display/my%20list'
    }

    //This will remove ebook
    removeEbook(e){
        let id = e.target.id
        console.log(id)
        let ebook = JSON.parse(localStorage.getItem('ebook'));
        for (let c = 0 ; c < ebook.result.length ;c++){
            if(ebook.result[c].book === id){
                ebook.result.splice(c,1)
            }
        }
        localStorage.setItem('ebook',JSON.stringify(ebook))
        window.location.href= '/display/my%20list'
    }
    //This will remove music
    removeMusic(e){
        let id = e.target.id
        let music = JSON.parse(localStorage.getItem('music'));
        for (let c = 0 ; c < music.result.length ;c++){
            if(music.result[c].name === id){
                music.result.splice(c,1)
            }
        }
        localStorage.setItem('music',JSON.stringify(music))
        window.location.href= '/display/my%20list'
    }
    //This will remove a movie
    removeMovie(e){
        let id = e.target.id
        let movie = JSON.parse(localStorage.getItem('movie'));
       for (let c = 0 ; c < movie.result.length ;c++){
            if(movie.result[c].name === id){
                movie.result.splice(c,1)
            }
        }
        localStorage.setItem('movie',JSON.stringify(movie))
        window.location.href= '/display/my%20list'
    }
    //this will remove a tv show
    removeTv(e){
        let id = e.target.id
        console.log(id)
        let tv = JSON.parse(localStorage.getItem('tv'));
        for (let c = 0 ; c < tv.result.length ;c++){
            if(tv.result[c].description === id){
                tv.result.splice(c,1)
            }
        }
        localStorage.setItem('tv',JSON.stringify(tv))
        window.location.href= '/display/my%20list'
    }

    // This will render the page
    render() {
        const items = {
            movies: this.state.movies,
            shows: this.state.tv,
            music: this.state.music,
            ebook: this.state.ebook,
            audiobook: this.state.audiobook,
            podcast: this.state.podcast
        }
        if (items.movies ===null){
            items.movies = {result:[]}
        }
        if (items.shows ===null){
            items.shows = {result:[]}
        } if (items.music ===null){
            items.music = {result:[]}
        } if (items.ebook ===null){
            items.ebook = {result:[]}
        } if (items.audiobook ===null){
            items.audiobook = {result:[]}
        }
        if (items.podcast ===null){
            items.podcast = {result:[]}
        }
        return (
            <div>
                <h2>My List</h2>
                <h2>Movies</h2>
                <div>
                    <div>
                        {items.movies.result.map(movie =>
                            <div>
                                <div className='movie'>
                                    <img id={'img' + movie.name} src={movie.poster}/>
                                    <h4 id={'name' + movie.name}>{movie.name}</h4>
                                    <h4 id={'ganre' + movie.name}>{movie.genre}</h4>
                                    <video id={'video' + movie.name} controls>
                                        <source id={'source' + movie.name} src={movie.trailer}/>
                                    </video>
                                    <h4 id={'age' + movie.name}>{movie.age}</h4>
                                    <h4 id={'description' + movie.name}>{movie.description}</h4>
                                    <button onClick={this.removeMovie} id={movie.name}>Remove</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <h2>Tv Shows</h2>
                <div className='category'>
                    <div>
                        {items.shows.result.map(tv =>
                            <div>
                                <div className='tv'>
                                    <img id={'img' + tv.description} src={tv.poster}/>
                                    <h4 id={'name' + tv.description}>{tv.name}</h4>
                                    <video id={'video' + tv.description} controls>
                                        <source id={'source' + tv.description} src={tv.trailer}/>
                                    </video>
                                    <h4 id={'episode' + tv.description}>Episode number {tv.episode}</h4>
                                    <h4 id={'description' + tv.description}>{tv.description}</h4>
                                    <button onClick={this.removeTv} id={tv.description}>Remove</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <h2>Music</h2>
                <div>
                    <div>
                        {items.music.result.map(music =>
                            <div>
                                <div className='music'>
                                    <img id={'img' + music.name} src={music.poster}/>
                                    <h4 id={'name' + music.name}>{music.name}</h4>
                                    <h4 id={'album' + music.name}>{music.album}</h4>
                                    <h4 id={'genre' + music.name}>{music.genre}</h4>
                                    <h4 id={'description' + music.name}>{music.description}</h4>
                                    <button onClick={this.removeMusic} id={music.name}>Remove</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <h2>Ebooks</h2>
                <div>
                    <div>
                        {items.ebook.result.map(ebook =>
                            <div>
                                <div className='ebook'>
                                    <img id={'img' + ebook.book} src={ebook.poster}/>
                                    <h4 id={'book' + ebook.book}>{ebook.book}</h4>
                                    <h4 id={'description' + ebook.book}>{ebook.description}</h4>
                                    <button onClick={this.removeEbook} id={ebook.book}>Remove</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <h2>Audiobooks</h2>
                <div>
                    <div>
                        {items.audiobook.result.map(audiobook =>
                            <div>
                                <div className='audiobook'>
                                    <img id={'img' + audiobook.book} src={audiobook.poster}/>
                                    <h4 id={'book' + audiobook.book}>{audiobook.book}</h4>
                                    <h4 id={'description' + audiobook.book}>{audiobook.description}</h4>
                                    <button onClick={this.removeAudioBook} id={audiobook.book}>Remove</button>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <h2>Podcast</h2>
                <div>
                    <div>
                        {items.podcast.result.map(podcast =>
                            <div>
                                <div className='podcast'>
                                    <img id={'img'+ podcast.name} src={podcast.poster}/>
                                    <h4  id={'name'+ podcast.name}>{podcast.name}</h4>
                                    <h4 id={'description'+ podcast.name} >{podcast.description}</h4>
                                    <h4 id={'genre'+ podcast.name}>{podcast.genre}</h4>
                                    <button onClick={this.removePodcast} id={podcast.name}>Remove</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
export default MyList