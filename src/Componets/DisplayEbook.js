// this will display the ebook search
import './css/Display.css'
import React from "react";
require('isomorphic-fetch')

class DisplayEbook extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            error :null,
            isLoaded:false,
            items:[]
        }
        this.ebookAdd = this.ebookAdd.bind(this)
    }
    // This is the fetch statement
    componentDidMount() {
        fetch(`/ebook/?name=${localStorage.getItem('search')}`)
            .then(res => res.json())
            .then((result)=>{
                this.setState({
                    isLoaded:true,
                    items: result.ebook
                })
            })
    }
    //This will add ebooks tiy your list
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

    // This will render the page
    render() {
        const  {error,isLoaded,items} = this.state
        if(error) {return <div>Error: {error.message} </div>
        } else if(!isLoaded){ return <div>Loading...</div>
        }else {return (
            <div>
                <h2>Results</h2>

                <div>
                    {items.map(ebook =>
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

        )}
    }

}
export default DisplayEbook