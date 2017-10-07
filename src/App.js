import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

// Components
import Events from './components/Events';
import About from './components/About';
import Members from './components/Members';

class App extends Component {
  render() {
    return (
      <Tabs>
        <Tab key="about" label="À propos" >
          <About />
        </Tab>
        <Tab key="events" label="Évènements" >
          <Events />
        </Tab>
        <Tab key="members" label="Sexynoscope">
          <Members/>
        </Tab>
      </Tabs>
    );
  }
}

export default App;
