import React, { Component } from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';
import '../style/Library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
  render() {
   return (
     <section className='library'>
     {
       this.state.albums.map( (album, index) =>
       <Link to={`/album/${album.slug}`} key={index} className='album-link' >
           <img src={album.albumCover} alt={album.title}   className='album-cover-art'/>
           <div className='album-desc'>
             <div  className='album'>{album.title}</div>
             <div  className='artist'>{album.artist}</div>
             <div  className='songCount'>{album.songs.length} songs</div>
          </div>
       </Link>

       )
     }
     </section>
    );
  }
}

export default Library;
