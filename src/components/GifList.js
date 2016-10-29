import React from 'react';
import GifItem from './GifItem';

export default function GifList(props) {
  const gifItems = props.gifs.map((image) => {
    return (
      <GifItem key={image.id} 
          gif={image}
          onGifSelect={props.onGifSelect}
      />
    )
  });
  return (
    <div className='gif-list'>{gifItems}</div>
  );
};