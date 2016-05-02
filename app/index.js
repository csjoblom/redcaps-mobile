import React, {AppRegistry, Component} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import {getHomeRoute} from './router';
import NavBar from './components/NavBar.js';

export default class IHeartRedCaps extends Component {
    render() {
        return (<ExNavigator initialRoute={getHomeRoute()} renderNavigationBar={props => <NavBar {...props}/>} />)
    }
}
