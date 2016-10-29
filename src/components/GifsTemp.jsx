import React from 'react';

export default function GifsTemp({gifs}) {
  const gifItems = gifs.map((gif) => {
    return (
      <li key={gif.id}><img src={gif.url} alt="gif"/></li>
    )
  })
  return (
    <ul className="gif-list">{gifItems}</ul>
  )
}