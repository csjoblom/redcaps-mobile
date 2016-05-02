import React, {
    AppRegistry,
    Component,
    Navigator,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux';

export default class Status extends Component {
    render() {
        return (
            <Text>Hi</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
});
