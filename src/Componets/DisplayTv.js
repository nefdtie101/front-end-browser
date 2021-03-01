// This component will display tv show
import './css/Display.css'
import React from "react";
require('isomorphic-fetch')

class DisplayTv extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            error :null,
            isLoaded:false,
            items:[]
        }
        this.tvAdd=this.tvAdd.bind(this)

    }

    // This is the fetch statement
    componentDidMount() {
        fetch(`/shows/?name=${localStorage.getItem('search')}`)
            .then(res => res.json())
            .then((result)=>{
                this.setState({
                    isLoaded:true,
                    items: result.shows
                })
            })
    }
    //This will add tv to your list
    tvAdd(e) {
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


    // This will render the page
    render() {
        const  {error,isLoaded,items} = this.state
        if(error) {return <div>Error: {error.message} </div>
        } else if(!isLoaded){ return <div>Loading...</div>
        }else {return (
            <div>
                <h2>Results</h2>

                <div>
                    {items.map(tv =>
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

        )}
    }

}
export default DisplayTv