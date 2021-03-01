// This will search for a song
import './css/Display.css'
import React from "react";
require('isomorphic-fetch')

class DisplayMusic extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            error :null,
            isLoaded:false,
            items:[]
        }
        this.musicAdd=this.musicAdd.bind(this)

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
    // This is the fetch statement
    componentDidMount() {
        fetch(`/music/?name=${localStorage.getItem('search')}`)
            .then(res => res.json())
            .then((result)=>{
                this.setState({
                    isLoaded:true,
                    items: result.music
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

                <ul>
                    {items.map(music =>
                        <li>
                            <div className='music'>
                                <img id={'img'+ music.name} src={music.poster}/>
                                <h4 id={'name'+ music.name}>{music.name}</h4>
                                <h4 id={'album'+ music.name}>{music.album}</h4>
                                <h4 id={'genre'+ music.name}>{music.genre}</h4>
                                <h4 id={'description'+ music.name}>{music.description}</h4>
                                <button onClick={this.musicAdd} id={music.name}>My list</button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>

        )}
    }

}
export default DisplayMusic