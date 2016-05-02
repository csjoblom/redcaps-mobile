import React, {AppRegistry, Component, StyleSheet, Text, ScrollView, View} from 'react-native';

export default class StatusPage extends Component {
  constructor(props, context) {
    super(props,context);
    console.log(props);
    this.prettyReport = JSON.stringify(this.props.report);
    this.handleTryAgain = this.handleTryAgain.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleTryAgain() {
    console.log('try again');
  }

  handleComplete() {
    console.log('complete');
  }

  // renderSuccess() {
  //   return (
  //
  //   )
  // }
  //
  // renderFailure() {
  //   return (
  //
  //   )
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.prettyReport}</Text>
      </ScrollView>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  }
})
