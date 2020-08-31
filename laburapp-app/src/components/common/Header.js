import React, { Component } from 'react';
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import { Header } from 'react-native-elements';
// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const deviceWidth = Dimensions.get('window').width;

class DefaultHeader extends Component {

  onMenu = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    const {
      title,
      headerOptions,
      rightComponent,
      centerComponent,
      leftComponent
    } = this.props;
    return (
      <SafeAreaView style={{ top: 0 }}>
        <Header
          statusBarProps={{ barStyle: 'light-content', translucent: true }}
          backgroundColor={'red'}
          leftContainerStyle={{ marginLeft: 10 }}
          leftComponent={leftComponent || null}
          rightComponent={rightComponent || null}
          centerComponent={
            centerComponent || {
              text: title || '',
            }
          }
          {...headerOptions}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultHeader);
