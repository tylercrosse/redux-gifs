import React from 'react';

export default class SearchBar extends React.Component {
  onInputChange(term) {
    this.props.onTermChange(term);
  }
  render() {
    return (
      <div className="search">
        <input onChange={(e) => this.onInputChange(e.target.value)} />
      </div>
    )
  }
}