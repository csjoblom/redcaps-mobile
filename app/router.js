import React, { StyleSheet } from 'react-native';
import Button from 'react-native-button';
import Home from './components/Home';
import Report from './components/Report';
import StatusPage from './components/StatusPage';
import {Icon,} from 'react-native-icons';

export function getHomeRoute() {
    return {

        hideNavBar: true,
        // Return a React component class for the scene. It receives a prop
        // called `navigator` that you can use to push on more routes.
        getSceneClass() {
            return Home
        },

        // When this scene receives focus, you can run some code. We're just
        // proxying the `didfocus` event that Navigator emits, so refer to
        // Navigator's source code for the semantics.
        onDidFocus(event) {
            //console.log('Home Scene received focus.');
        },

        // Return a string to display in the title section of the navigation bar.
        // This route's title is displayed next to the back button when you push
        // a new route on top of this one.
        getTitle() {
            return '';
        },
    };
};

export function getReportRoute() {
    return {
        hideNavBar: false,
        // Return a React component class for the scene. It receives a prop
        // called `navigator` that you can use to push on more routes.
        getSceneClass() {
            return Report
        },

        // When this scene receives focus, you can run some code. We're just
        // proxying the `didfocus` event that Navigator emits, so refer to
        // Navigator's source code for the semantics.
        onDidFocus(event) {
            //console.log('Home Scene received focus.');
        },

        // Return a string to display in the title section of the navigation bar.
        // This route's title is displayed next to the back button when you push
        // a new route on top of this one.
        getTitle() {
            return 'File a Report';
        },

        // Render the view to display on the right side of the navigation bar. It
        // is typically a button but doesn't have to be.
        renderRightButton() {
          return (
            <Button style={styles.button} onPress={() => { console.log('Tapped right button'); }}>
              Dispatch
            </Button>
          );
        },
    };
};

export function getStatusPage(report) {
  return {
    hideNavBar: false,

    renderScene(navigator) {
        return <StatusPage navigator={navigator} report={report} />;
    },
    // Return a React component class for the scene. It receives a prop
    // called `navigator` that you can use to push on more routes.
    // getSceneClass() {
    //     return StatusPage
    // },

    // When this scene receives focus, you can run some code. We're just
    // proxying the `didfocus` event that Navigator emits, so refer to
    // Navigator's source code for the semantics.
    onDidFocus(event) {
        //console.log('Home Scene received focus.');
    },

    // Return a string to display in the title section of the navigation bar.
    // This route's title is displayed next to the back button when you push
    // a new route on top of this one.
    getTitle() {
        return 'Report Status';
    },

    report: report,
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  }
});
