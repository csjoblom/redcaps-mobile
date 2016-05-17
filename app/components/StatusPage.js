import React, {AppRegistry, Component, StyleSheet, Text, ScrollView, View} from 'react-native';
import Button from 'react-native-button';

export default class StatusPage extends Component {
  constructor(props, context) {
    super(props,context);
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

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Your report has been been submitted.</Text>
        <Button onPress= { () => {
            this.props.navigator.pop();
          } }
          containerStyle={styles.buttonContainer}
          style={styles.button}
        >Submit Another Report</Button>
      <Text style={styles.reportText}>{this.prettyReport}</Text>

      </ScrollView>
    )

  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 64,
      padding: 55,
    },
    buttonContainer: {
        backgroundColor: '#F82040',
        marginTop: 24,
        padding: 15,
        height: 55,
        width: 268
    },
    button: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
    text: {
      margin: 12,
      fontSize: 22,
      textAlign: 'center'
    },
    reportText: {
      marginTop: 48,
      fontSize: 8
    },
});
