//This will display podcasts
import './css/Display.css'
import React from "react";
require('isomorphic-fetch')

class DisplayPodcast extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            error :null,
            isLoaded:false,
            items:[]
        }
        this.podcastAdd=this.podcastAdd.bind(this);
    }
    // This is the fetch statement
    componentDidMount() {
        fetch(`/podcast/?name=${localStorage.getItem('search')}`)
            .then(res => res.json())
            .then((result)=>{
                this.setState({
                    isLoaded:true,
                    items: result.podcast
                })
            })
    }
    podcastAdd(e) {
        let podcast = localStorage.getItem('podcast')
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
            localStorage.setItem('podcast', JSON.stringify(finalObject))
            alert(`${object.name} is added to your list `)

        } else {
            let finalObject = JSON.parse(podcast)
            finalObject.result.push(object)
            localStorage.setItem('podcast', JSON.stringify(finalObject))
            alert(`${object.name} is added to your list `)

        }
    }

    // This will render the page
    render() {
        const  {error,isLoaded,items} = this.state
        if(error) {return <div>Error: {error.message} </div>
        } else if(!isLoaded){ return <div>Loading...</div>
        }else {return (
            <div>
                <h2>Results</h2>

                <div>
                    {items.map(podcast =>
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

        )}
    }

}
export default DisplayPodcast