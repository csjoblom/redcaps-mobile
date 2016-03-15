'use strict';

import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import {
  Router,
  Route,
  Schema,
  Animations,
  Actions,
  TabBar
} from 'react-native-router-flux';

import Error from './app/components/Error';
import Home from './app/components/Home';
import Report from './app/components/Report';
import Status from './app/components/Status';
import Signup from './app/components/Signup';


//redux stuff
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const appRouter = connect()(Router);
let store = createStore(reducer);

function reducer(state = {}, action) {
    switch (action.type) {
        case Actions.BEFORE_ROUTE:
            console.log("BEFORE_ROUTE:", action);
            return state;
        case Actions.AFTER_ROUTE:
            console.log("AFTER_ROUTE:", action);
            return state;
        case Actions.AFTER_POP:
            console.log("AFTER_POP:", action);
            return state;
        case Actions.BEFORE_POP:
            console.log("BEFORE_POP:", action);
            return state;
        case Actions.AFTER_DISMISS:
            console.log("AFTER_DISMISS:", action);
            return state;
        case Actions.BEFORE_DISMISS:
            console.log("BEFORE_DISMISS:", action);
            return state;
        default:
            return state;
    }

}

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

class Logo extends Component {
    render() {
        return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./app/assets/guideslogo400.png')}
            />
        </View>
        );
    }
}

export default class IHeartRedCaps extends Component {
    render() {
        return (
           <Provider store={store}>
            <Router hideNavBar={true} name="root">
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                <Schema name="withoutAnimation"/>
                <Schema name="tab" type="switch" icon={TabIcon} />

                <Route name="report" component={Report} title="Report"/>
                <Route name="status" component={Status} title="Status"/>
                <Route name="signup" component={Signup} title="Signup"/>
                <Route name="home" header={Logo} initial={true} component={Home} wrapRouter={true} title="Home" hideNavBar={true}/>
            </Router>
           </Provider>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    width: 268,
    height: 335
  }
});