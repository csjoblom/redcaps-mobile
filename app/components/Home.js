'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  View
} from 'react-native';
import Button from 'react-native-button';
import {getReportRoute} from '../router';

export default class Home extends Component {
  render() {
    return (
      <Image source={require('../assets/background.png')} style={styles.mainContainer}>
        <Image
                style={styles.logo}
                source={require('../assets/guideslogo400.png')}
            />
        <Button
          onPress={() => {
            // Get a route object from the router
            let route = getReportRoute();
            // `navigator` is passed into your scene component when you have
            // implemented getSceneClass in your route
            this.props.navigator.push(route);
          }}
          containerStyle={styles.buttonContainer}
          style={styles.button}
        >
          REPORT
        </Button>
        <Button
          style={styles.button}
          containerStyle={styles.buttonContainer}
        >
          STATUS
        </Button>
        <Button
          style={styles.button}
          containerStyle={styles.buttonContainer}
        >
          SIGNUP
        </Button>
      </Image>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
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
  },
  logo: {
    width: 268,
    height: 335,
    marginBottom: 20
  }
});