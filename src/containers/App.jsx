import React      from 'react';
import { connect } from 'react-redux';
// import request    from 'superagent';
// import GifList    from '../components/GifList.jsx'
// import GifModal   from '../components/GifModal.jsx'
// import SearchBar  from '../components/SearchBar.jsx'
// import                 '../styles/app.css'
import GifsTemp from '../components/GifsTemp';

class App extends React.Component {
  render() {
    return (
      <div>
        <GifsTemp gifs={ this.props.gifs } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  }
}

export default connect(mapStateToProps)(App);