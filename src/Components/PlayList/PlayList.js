import React, { Component } from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={this.props.playlistName} />
        <TrackList
          isRemoval={true}
          onRemove={this.props.onRemove}
          tracks={this.props.playlist} 
        />
        <button className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</button>
    </div>
    )
  }
}

export default PlayList;