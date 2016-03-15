'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  View
} from 'react-native';
import {
  Router,
  Route,
  Schema,
  Actions,
  Animations,
  TabBar
} from 'react-native-router-flux';
import Button from 'react-native-button';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={()=>Actions.report({data:"CustomReportData", title:'Report'})}
          containerStyle={styles.buttonContainer}
          style={styles.button}
        >
          REPORT
        </Button>
        <Button
          onPress={Actions.status}
          style={styles.button}
          containerStyle={styles.buttonContainer}
        >
          STATUS
        </Button>
        <Button
          onPress={Actions.signup}
          style={styles.button}
          containerStyle={styles.buttonContainer}
        >
          SIGNUP
        </Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    padding: 10
  },
  buttonContainer: {
    backgroundColor: '#F82040',
    padding: 10,
    margin: 2,
    height: 50,
    width: 268
  },
  button: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center'
  }
});