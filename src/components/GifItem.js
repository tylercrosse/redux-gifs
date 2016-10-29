import React from 'react';

export default function GifItem(image) {
  return (
    <div className='gif-item'>
      <img src={image.gif.images.downsized.url} alt="gif"/>
    </div>
  )
}