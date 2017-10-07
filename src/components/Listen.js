import React, { Component } from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import PlayCircleButton from 'material-ui/svg-icons/av/play-circle-outline';
import PauseCircleButton from 'material-ui/svg-icons/av/pause-circle-outline';
import Stop from 'material-ui/svg-icons/av/stop';
import IconButton from 'material-ui/IconButton';
import CircularProgress from 'material-ui/CircularProgress';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

export default class Listen extends Component {
  state = {
    baseUrl: 'http://texascouscous.com/musique/mp3/',
    sounds: [
      'atchoumligloo.mp3',
      'aventurier.mp3',
      'battle.mp3',
      'beggin.mp3',
      'bella.mp3',
      'didi.mp3',
      'hava.mp3',
      'killing.mp3',
      'marcia.mp3',
      'message.mp3',
      'mix.mp3',
      'mixrap.mp3',
      'thriller.mp3'
    ],
    currentSound: null,
    state: 'STOPPED'
  };

  constructor(props) {
    super(props);

    this.stop = this.stop.bind(this);
  }

  componentDidMount() {
    const bind = (event, state) => this.audio.addEventListener(
      event, () => this.setState({ state })
    );

    bind('playing', 'PLAYING');
    bind('pause', 'PAUSED');
    bind('loadstart', 'PENDING');
    bind('seeking', 'PENDING');
  }

  playSound(filename) {
    this.setState({ currentSound: filename });
    this.audio.setAttribute('src', `${this.state.baseUrl}${filename}`);
  };

  stop() {
    this.setState({ currentSound: null, state: 'STOPPED' });
    this.audio.pause();
    this.audio.setAttribute('src', null);
  }

  getText(filename) {
    return filename.replace('.mp3', '');
  }

  render() {
    const { currentSound, sounds, state } = this.state;

    return (
      <div>
        <div style={{ display: 'flex' }}>
          {state === 'PENDING' && (
            <CircularProgress style={{ padding: 15 }} thickness={2} size={20} />
          )}
          {['PLAYING', 'PAUSED'].includes(state) && (
            <IconButton onClick={this.stop}>
              <Stop />
            </IconButton>
          )}
          {state === 'STOPPED' && (
            <IconButton disabled>
              <Stop />
            </IconButton>
          )}
          <audio
            ref={(audio) => this.audio = audio}
            style={{ flex: 1 }}
            controls
            autoPlay
          />
        </div>
        <SelectableList defaultValue={null}>
          {sounds.map((filename, index) => (
            <ListItem
              value={index}
              style={{ textTransform: 'capitalize' }}
              key={filename}
              primaryText={this.getText(filename)}
              leftIcon={state === 'PLAYING' && currentSound === filename ? <PauseCircleButton/> : <PlayCircleButton />}
              onClick={() => this.playSound(filename)}
            />
          ))}
        </SelectableList>
      </div>
    );
  }
}