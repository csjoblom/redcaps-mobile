import React, { Navigator, View, Animated, StyleSheet } from 'react-native';

var COMPONENT_NAMES = ['Title', 'LeftButton', 'RightButton'];

export default class extends Navigator.NavigationBar {
  constructor(props: any) {
    super(props);
    this._shouldHideNavBar = this._shouldHideNavBar.bind(this);
    let { navState } = props;
    const route = navState.routeStack[navState.presentedIndex];
    this.state = {
      heightValue: new Animated.Value(
        !route.hideNavBar ?
        props.navigationStyles.General.TotalNavHeight : 0),
    };
  }

  componentDidMount() {
    setImmediate(this._shouldHideNavBar);
  }

  componentDidUpdate() {
    setImmediate(this._shouldHideNavBar);
  }

  render(): View {
    var navBarStyle = {
        height: this.state.heightValue,
        overflow: 'hidden',
      };
    var navState = this.props.navState;
    var components = navState.routeStack.map((route, index) =>
      COMPONENT_NAMES.map(componentName =>
        this._getComponent(componentName, route, index)
      )
    );

    return (
      <Animated.View
        key={this._key}
        style={[styles.navBarContainer, navBarStyle, this.props.style]}>
        {components}
      </Animated.View>
    );
  }

  _shouldHideNavBar() {
    let { navState } = this.props;
    const route = navState.routeStack[navState.presentedIndex];
    Animated.timing(this.state.heightValue, {
      duration: 250,
      toValue: !route.hideNavBar ? this.props.navigationStyles.General.TotalNavHeight : 0,
    }).start();
  }
}

var styles = StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});
