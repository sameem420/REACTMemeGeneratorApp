import React from 'react';
import './style.css';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import FileSaver from 'file-saver';

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText : "",
            bottomText : "",
            randomImage : "http://i.imgflip.com/1bij.jpg",
            allMemeImages : []
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({
                allMemeImages: memes
            })
        });
    }

    changeHandler(event) {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }
    submitHandler(event) {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allMemeImages.length);
        const randMemeImg = this.state.allMemeImages[randNum].url;
        this.setState({ randomImage: randMemeImg });
    }
    download() {
        htmlToImage.toPng(document.getElementById('memeImg'))
        .then(function (dataUrl) {
            download(dataUrl, 'my-node.png');
        });
    }
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.submitHandler}>
                    <input type="text" name="topText" value={this.state.topText} onChange={this.changeHandler} />
                    <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.changeHandler} />   
                    <button>Generate</button>
                </form>
                <div className="meme" >
                    <img id="memeImg" src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                <button onClick={this.download}>Display</button>
            </div>
        );
    };
}

export default MemeGenerator;