import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {snapshot} from 'react-snapshot';

import call from '../facebook';

export default class About extends Component {
  state = {
    name: '',
    picture: { data: {} },
    cover: {},
    description: '',
  };

  componentWillMount() {
    snapshot(() => call('', 'fields=name,picture,cover,description'))
      .then((data) => {
        this.setState(data);
      });
  }

  render() {
    const {
      name = '',
      picture = { data: {} },
      cover = {},
      description = '',
    } = this.state;

    return (
      <Card>
        <CardHeader
          title={name}
          subtitle="Fanfare de Saxophonistes sexy"
          avatar={picture.data.url}
        />
        <CardMedia
          overlay={<CardTitle title="Facebook cover" subtitle="This is texas couscous's facebook cover" />}
        >
          <img src={cover.source} alt="" />
        </CardMedia>
        <CardTitle title="Présentation" subtitle="Lorem ipsum" />
        <CardText>{description}</CardText>
      </Card>
    );
  }
}
