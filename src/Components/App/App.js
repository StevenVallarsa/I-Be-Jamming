import React, {Component} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Wild Boys",
          artist: "Duran Duran",
          album: "Arena",
          id: "0001"
        },
        {
          name: "Hungry Like the Wolf",
          artist: "Duran Duran",
          album: "Rio",
          id: "0002"
        },
        {
          name: "Is There Something I Should Know",
          artist: "Duran Duran",
          album: "Duran Duran",
          id: "0003"
        }],
        
        playlistName: "My New Playlist",
        
        playlist: [
          {
            name: "The Reflex",
            artist: "Duran Duran",
        album: "Seven and the Ragged Tiger",
        id: "0004"
      },
      {
        name: "Somebody",
        artist: "Bryan Adams",
        album: "Reckless",
        id: "0005"
      }],
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
    
  addTrack(track) {
    const tracks = this.state.playlist;
    if (tracks.find(item => item.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlist: tracks})
  }

  removeTrack(track) {
    const newPlaylist = this.state.playlist.filter(item => item.id !== track.id);
    this.setState({ playlist: newPlaylist });
  }  

  updatePlaylistName(newPlaylistName) {
    this.setState({ playlistName: newPlaylistName });
  }

  savePlaylist() {
    const trackURIs = this.state.playlist;
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div>
        <h1>I Be Ja<span className4="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults} 
            />
            <PlayList
              onRemove={this.removeTrack}
              playlistName={this.state.playlistName}
              playlist={this.state.playlist}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
