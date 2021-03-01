// This will display All
import './css/Display.css'
import React from "react";
require('isomorphic-fetch')


class DisplayAll extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            error :null,
            isLoaded:false,
            items:[]
        }
        this.movieAdd = this.movieAdd.bind(this);
        this.tvAdd = this.tvAdd.bind(this);
        this.ebookAdd = this.ebookAdd.bind(this);
        this.audioBookAdd=this.audioBookAdd.bind(this);
        this.podcastAdd=this.podcastAdd.bind(this);
        this.musicAdd=this.musicAdd.bind(this);
    }
    musicAdd(e) {
        let podcast = localStorage.getItem('music')
        let id = e.target.id;
        console.log(id)
        let poster = document.getElementById('img' + id).src;
        let name = document.getElementById('name' + id).innerText;
        let album = document.getElementById('album' + id).innerText;
        let description = document.getElementById('description' + id).innerText
        let genre = document.getElementById('genre' + id).innerText
        let object = {
            "poster": poster,
            "name": name,
            'album':album,
            'genre':genre,
            'description': description
        }
        if (podcast === null) {
            let finalObject = {'result': [object]}
            localStorage.setItem('music', JSON.stringify(finalObject))
            alert(`${object.name} is added to your list `)

        } else {
            let finalObject = JSON.parse(podcast)
            finalObject.result.push(object)
            localStorage.setItem('music', JSON.stringify(finalObject))
            alert(`${object.name} is added to your list `)

        }
    }
    podcastAdd(e) {
        let podcast = localStorage.getItem('ebook')
        let id = e.target.id;
        console.log(id)
        let poster = document.getElementById('img' + id).src;
        let name = document.getElementById('name' + id).innerText;
        let description = document.getElementById('description' + id).innerText
        let genre = document.getElementById('genre' + id).innerText
        let object = {
            "poster": poster,
            "name": name,
            'genre':genre,
            'description': description
        }
        if (podcast === null) {
            let finalObject = {'result': [object]}
            localStorage.setItem('podcast ', JSON.stringify(finalObject))
            alert(`${object.name} is added to your list `)

        } else {
            let finalObject = JSON.parse(podcast)
            finalObject.result.push(object)
            localStorage.setItem('podcast', JSON.stringify(finalObject))
            alert(`${object.name} is added to your list `)

        }
    }
    audioBookAdd(e) {
        let ebook = localStorage.getItem('ebook')
        let id = e.target.id;
        console.log(id)
        let poster = document.getElementById('img' + id).src;
        let book = document.getElementById('book' + id).innerText;
        let description = document.getElementById('description' + id).innerText
        let object = {
            "poster": poster,
            "book": book,
            'description': description
        }
        if (ebook === null) {
            let finalObject = {'result': [object]}
            localStorage.setItem('audiobook', JSON.stringify(finalObject))
            alert(`${object.book} is added to your list `)

        } else {
            let finalObject = JSON.parse(ebook)
            finalObject.result.push(object)
            localStorage.setItem('audiobook', JSON.stringify(finalObject))
            alert(`${object.book} is added to your list `)

        }
    }
    // This will add ebooks to my list
    ebookAdd(e) {
        let ebook = localStorage.getItem('ebook')
        let id = e.target.id;
        console.log(id)
        let poster = document.getElementById('img' + id).src;
        let book = document.getElementById('book' + id).innerText;
        let description = document.getElementById('description' + id).innerText
        let object = {
            "poster": poster,
            "book": book,
            'description': description
        }
        if (ebook === null) {
            let finalObject = {'result': [object]}
            localStorage.setItem('ebook', JSON.stringify(finalObject))
            alert(`${object.book} is added to your list `)

        } else {
            let finalObject = JSON.parse(ebook)
            finalObject.result.push(object)
            localStorage.setItem('ebook', JSON.stringify(finalObject))
            alert(`${object.book} is added to your list `)

        }
    }

    //This will add tv to your list
    tvAdd(e){
        let tv = localStorage.getItem('tv')
        let id = e.target.id;
        let poster = document.getElementById('img'+id).src;
        let name =  document.getElementById('name'+id).innerText;
        let video= document.getElementById('source'+id).src
        let episode = document.getElementById('episode'+id).innerText
        let description= document.getElementById('description'+id).innerText
        let object = {
            "poster":poster,
            "name":name,
            'video':video,
            'episode':episode,
            'description':description
        }
        if (tv === null) {
            let finalObject = {'result': [object]}
            localStorage.setItem('tv', JSON.stringify(finalObject))
            alert(`${object.name} is added to your list `)

        } else {
            let finalObject = JSON.parse(tv)
            finalObject.result.push(object)
            localStorage.setItem('tv', JSON.stringify(finalObject))
            alert(`${object.name} is added to your list `)

        }


    }
    movieAdd(e) {
        let movie = localStorage.getItem('movie')
        let id = e.target.id;
        let poster = document.getElementById('img'+id).src;
        let name =  document.getElementById('name'+id).innerText;
        let ganre = document.getElementById('ganre'+id).innerText
        let video= document.getElementById('source'+id).src
        let age= document.getElementById('age'+id).innerText
        let description= document.getElementById('description'+id).innerText
        let object = {
            "poster":poster,
            "name":name,
            'ganre':ganre,
            'video':video,
            'age':age,
            'description':description
        }
        if (movie === null) {

            let finalObject = {'result': [object]}
            localStorage.setItem('movie', JSON.stringify(finalObject))
            alert(`${object.name} is added to your list `)

        } else {
            let finalObject = JSON.parse(movie)
            console.log(finalObject)
            finalObject.result.push(object)
            localStorage.setItem('movie', JSON.stringify(finalObject))
            alert(`${object.name} is added to your list `)

        }




    }
    // This is the fetch statement
    componentDidMount() {
        fetch(`/all/?name=${localStorage.getItem('search')}`)
            .then(res => res.json())
            .then((result)=>{
                this.setState({
                    isLoaded:true,
                    items: result
                })
            })
    }

    // This will render the page
    render() {
        const  {error,isLoaded,items} = this.state
        if(error) {return <div>Error: {error.message} </div>
        } else if(!isLoaded){ return <div>Loading...</div>
        }else {return (
            <div>
                <h2>Results</h2>
                <h2>Movies</h2>
                <div>
                    <div>
                        {items.movies.map(movie =>
                            <div>
                                <div className='movie'>
                                    <img id={'img'+movie.name} src={movie.poster}/>
                                    <h4 id={'name'+movie.name}>{movie.name}</h4>
                                    <h4 id={'ganre'+movie.name}>{movie.genre}</h4>
                                    <video id={'video'+movie.name} controls>
                                        <source id={'source'+movie.name} src={movie.trailer}/>
                                    </video>
                                    <h4 id={'age'+movie.name}>{movie.age}</h4>
                                    <h4 id={'description'+movie.name}>{movie.description}</h4>
                                    <button onClick={this.movieAdd} id={movie.name}>My list</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <h2>Tv Shows</h2>
                <div className='category'>
                    <div>
                        {items.shows.map(tv =>
                            <div>
                                <div className='tv'>
                                    <img id={'img'+tv.description} src={tv.poster}/>
                                    <h4 id={'name'+tv.description} >{tv.name}</h4>
                                    <video id={'video'+tv.description} controls>
                                        <source id={'source'+tv.description} src={tv.trailer}/>
                                    </video>
                                    <h4 id={'episode'+tv.description}>Episode number {tv.episode}</h4>
                                    <h4 id={'description'+tv.description}>{ tv.description}</h4>
                                    <button onClick={this.tvAdd} id={tv.description}>My list</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <h2>Music</h2>
                <div>
                    <div>
                        {items.music.map(music =>
                            <div>
                                <div className='music'>
                                    <img id={'img'+ music.name} src={music.poster}/>
                                    <h4 id={'name'+ music.name}>{music.name}</h4>
                                    <h4 id={'album'+ music.name}>{music.album}</h4>
                                    <h4 id={'genre'+ music.name}>{music.genre}</h4>
                                    <h4 id={'description'+ music.name}>{music.description}</h4>
                                    <button onClick={this.musicAdd} id={music.name}>My list</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <h2>Ebooks</h2>
                <div>
                    <div>
                        {items.ebook.map(ebook =>
                            <div>
                                <div className='ebook'>
                                    <img id={'img'+ ebook.book} src={ebook.poster}/>
                                    <h4 id={'book'+ebook.book}>{ebook.book}</h4>
                                    <h4 id={'description'+ebook.book}>{ebook.description}</h4>
                                    <button onClick={this.ebookAdd} id={ebook.book}>My list</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <h2>Audiobooks</h2>
                <div>
                    <div>
                        {items.audiobook.map(audiobook =>
                            <div>
                                <div className='audiobook'>
                                    <img id={'img'+ audiobook.book} src={audiobook.poster}/>
                                    <h4 id={'book'+audiobook.book}>{audiobook.book}</h4>
                                    <h4 id={'description'+audiobook.book}>{audiobook.description}</h4>
                                    <button onClick={this.audioBookAdd} id={audiobook.book}>My list</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <h2>Podcast</h2>
                <div>
                    <div>
                        {items.podcast.map(podcast =>
                            <div>
                                <div className='podcast'>
                                    <img id={'img'+ podcast.name} src={podcast.poster}/>
                                    <h4  id={'name'+ podcast.name}>{podcast.name}</h4>
                                    <h4 id={'description'+ podcast.name} >{podcast.description}</h4>
                                    <h4 id={'genre'+ podcast.name}>{podcast.genre}</h4>
                                    <button onClick={this.podcastAdd} id={podcast.name}>My list</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        )}
    }

}
export default DisplayAll