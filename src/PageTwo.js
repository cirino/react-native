import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PageOne extends Component {
  render() {
    return (
        <View style={{margin: 128}}>
        <Text>Pagina 2!</Text>
        <Text>{this.props.text}</Text>
        </View>
    )
  }
}