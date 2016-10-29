import React from 'react';
import GifItem from './GifItem';

export default function GifList(props) {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />
  });
  return (
    <div className='gif-list'>{gifItems}</div>
  );
};