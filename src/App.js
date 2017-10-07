import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import LibraryMusic from 'material-ui/svg-icons/av/library-music';
import Face from 'material-ui/svg-icons/action/face';
import Event from 'material-ui/svg-icons/action/event';
import Info from 'material-ui/svg-icons/action/info';

// Components
import Events from './components/Events';
import About from './components/About';
import Members from './components/Members';
import Listen from './components/Listen';

const style = {
  tab: {
    fontSize: 10
  }
};

class App extends Component {
  render() {
    return (
      <Tabs initialSelectedIndex={0}>
        <Tab icon={<Info />} label="À propos" style={style.tab}>
          <About />
        </Tab>
        <Tab icon={<Event />} label="Évènements" style={style.tab}>
          <Events />
        </Tab>
        <Tab icon={<Face />} label="Trombinoscope" style={style.tab}>
          <Members/>
        </Tab>
        <Tab icon={<LibraryMusic />} label="Écouter" style={style.tab}>
          <Listen/>
        </Tab>
      </Tabs>
    );
  }
}

export default App;
