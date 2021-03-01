// This component will display the movies
import './css/Display.css'
import React from "react";
require('isomorphic-fetch')

class DisplayMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            error :null,
            isLoaded:false,
            items:[]
        }
        this.movieAdd = this.movieAdd.bind(this)
    }
    // This is the fetch statement
    componentDidMount() {
        fetch(`/movies/?name=${localStorage.getItem('search')}`)
            .then(res => res.json())
            .then((result)=>{
                this.setState({
                    isLoaded:true,
                    items: result.movie
                })
            })
    }
    // This will add it to locale storage
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

    // This will render the page
    render() {
        const  {error,isLoaded,items} = this.state
        if(error) {return <div>Error: {error.message} </div>
        } else if(!isLoaded){ return <div>Loading...</div>
        }else {return (
            <div>
                <h2>Results</h2>
                    <div>
                        {items.map(movie =>
                            <div>
                                <div id={'div'+ movie.name} className='movie'>
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

        )}
    }

}
export default DisplayMovies