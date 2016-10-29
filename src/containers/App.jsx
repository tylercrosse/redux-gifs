import React      from 'react';
import request    from 'superagent';
import GifList    from '../components/GifList.jsx'
import GifModal   from '../components/GifModal.jsx'
import SearchBar  from '../components/SearchBar.jsx'
import                 '../styles/app.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }
  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    })
  }
  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`
    
    request.get(url, (err,res) => {
      this.setState({gifs: res.body.data})
    })
  }
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange}/>
        <GifList gifs={this.state.gifs} 
          onGifSelect={selectedGif => this.openModal(selectedGif)}
        />
        <GifModal modalIsOpen={this.state.modalIsOpen}
          selectedGif={this.state.selectedGif}
          onRequestClose={this.closeModal}
        />
      </div>
    )
  }
}