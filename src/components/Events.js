import React, { Component } from 'react';
import {List} from 'material-ui/List';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import {snapshot} from 'react-snapshot';

import call from '../facebook';

export default class Events extends Component {
  state = {
    events: {}
  };

  componentWillMount() {
    snapshot(() => call('/events'))
      .then((events) => {
        this.setState({ events });
      });
  }

  formatDate(time) {
    return new Date(time).toLocaleString();
  }

  getMapsUrl({ name, location }) {
    return `https://www.google.fr/maps/place/${name}/@${location.latitude},${location.longitude}z`;
  }

  render() {
    const { data = [] } = this.state.events;

    return (
      <div>
        <List key="future-events">
          <Subheader>Évènements à venir</Subheader>
        </List>
        <List key="past-events">
          <Subheader>Évènements passés</Subheader>
          {data.map(event => (
            <Card key={event.id}>
              <CardHeader
                title={event.name}
                subtitle={this.formatDate(event.start_time)}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardText expandable={true}>
                <p>{event.description}</p>
                {event.place && event.place.location && (
                  <div>
                    <h3>{event.place.name}</h3>
                    <a href={this.getMapsUrl(event.place)}>
                      {event.place.location.street}, {event.place.location.city}
                    </a>
                  </div>
                )}
              </CardText>
            </Card>
          ))}
        </List>
      </div>
    )
  }
}