import React from 'react';

export default function GifItem({gif, onGifSelect}) {
  return (
    <div className='gif-item' onClick={() => onGifSelect(gif)}>
      <img src={gif.images.downsized.url} alt="gif"/>
    </div>
  )
}