import React, { Component } from 'react';
import {List} from 'material-ui/List';
import {Card, CardTitle, CardMedia, CardHeader, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';

export default class Members extends Component {
  state = {
    url: 'https://i.ytimg.com/vi/8s6xmolPuUo/maxresdefault.jpg',
    members: [
      'Sexy sax man',
      'Donaldine',
      'Tisane',
      'Sexy sax man',
      'Sexy sax man',
      'Caliméro',
      'Sexy sax man',
      'Guacarole',
      'Sexy sax man',
      'Camille',
      'Binouze',
      'Turner',
      'Sophie'
    ]
  };

  render() {
    return (
      <List key="past-Members">
        <Subheader>Membres du crew</Subheader>
        {this.state.members.map((name, index) => (
          <Card key={`${name}-${index}`}>
            <CardHeader
              title={name}
              subtitle="Sexy fanfare dude"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <p>Un peu roublard, ce Mike Diva. En novembre dernier, ce rigolo poste sur YouTube la vidéo Sexy Sax Man Serenade , une caméra cachée drôle et régressive sur fond de George Michael. La blague remporte un certain succès avec presque 800000 vues récoltées sur YouTube à ce jour. Des mois plus tard, à savoir le week end dernier, voilà un nouveau montage de la vidéo, cette fois-ci qualifié de Director's cut. Doit-on s'attendre à de nouvelles images ? Et non, la seule nouveauté ici est la suppression de l'introduction inutile et horripilante présente sur la première version, celle-ci allant directement dans le vif du sujet.</p>
              <CardMedia overlay={<CardTitle title="Sexy sax man" subtitle="Tribute to Georges Michael" />}>
                <img src={this.state.url} alt=""/>
              </CardMedia>
            </CardText>
          </Card>
        ))}
      </List>
    )
  }
}