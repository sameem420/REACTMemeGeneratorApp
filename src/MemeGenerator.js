import React from 'react';

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText : "",
            bottomText : "",
            randomImage : "http://i.imgflip.com/1bij.jpg",
            allMemeImages : []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes[0])
            this.setState({
                allMemeImages: memes
            })
        });
    }

    changeHandler() {
        this.setState({
            
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input type="text" name="topText" value={this.state.bottomText} onChange={this.changeHandler} />
                    <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.changeHandler} />   
                    <button>Generate</button>
                </form>
            </div>
        );
    };
}

export default MemeGenerator;