// This component will display audiobooks
import './css/Display.css'
import React from "react";
require('isomorphic-fetch')

class AudioBookDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            error :null,
            isLoaded:false,
            items:[]
        }
    }
    // This is the fetch statement
    componentDidMount() {
        fetch(`/audiobook/?name=${localStorage.getItem('search')}`)
            .then(res => res.json())
            .then((result)=>{
                this.setState({
                    isLoaded:true,
                    items: result.audiobook
                })
                this.audioBookAdd=this.audioBookAdd.bind(this)
            })
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

    // This will render the page
    render() {
        const  {error,isLoaded,items} = this.state
        if(error) {return <div>Error: {error.message} </div>
        } else if(!isLoaded){ return <div>Loading...</div>
        }else {return (
            <div>
                <h2>Results</h2>
                <div>
                    {items.map(audiobook =>
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

        )}
    }

}
export default AudioBookDisplay