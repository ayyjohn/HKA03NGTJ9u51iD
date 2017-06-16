import React, { Component } from 'react';
import './App.css';
import { receiveImages } from './image_actions';
import $ from 'jquery';

class App extends Component {

  constructor(props) {
    super(props);
    // ensure correct context for all functions
    this.getImages = receiveImages.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);
    this.getImageUrls = this.getImageUrls.bind(this);
    // ensure that re-rendering happens on store change
    this.props.store.subscribe(this.forceUpdate);
  }

  componentDidMount() {
    $.ajax({
      url: "https://api.imgur.com/3/gallery/top/viral/day/page?showViral=showViral&album_previews=albumPreviews",
      headers: {
        Authorization: "Client-ID **INSERT ID HERE**"
      },
      method: "GET",
      success: (images) => {
        this.props.store.dispatch(receiveImages(images));
      }
    });
  }

  getImageUrls() {
    // extract all photos that are not albums, and create an array of list elements with images.
    // the key prop is for react, it helps with fast-re-rendering.
    const notAlbums = this.props.store.getState().images.data.filter( image => !image.is_album );
    const images = notAlbums.map( image => <img key={image.id} alt={image.title} src={image.link}></img>);
    return images;
  }

  render() {
    let images;
    if (this.props.store.getState().images) {
      images = this.getImageUrls();
    }
    return (
      <div className="App">
        <ul>
          {images}
        </ul>
      </div>
    );
  }
}

export default App;
