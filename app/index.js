'use strict';

import React, {AppRegistry, Component} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import {getHomeRoute} from './router';

export default class IHeartRedCaps extends Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (<ExNavigator initialRoute={getHomeRoute()} style={{
            flex: 1
        }}/>)
    }
}
