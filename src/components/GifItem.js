import React from 'react';

export default function GifItem(image) {
  return (
    <li>
      <img src={image.gif.url} alt="gif"/>
    </li>
  )
}