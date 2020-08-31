import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ProgressBar from '../utils/ProgressBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from '../../redux/reducers/register';
import PersonalInfoForm from './forms/PersonalInfoForm';

class PersonalInfoReg extends Component {
  constructor(props) {
    super(props)
  }

  handleNext = (data) => {
    this.props.updateUser(data);
    this.props.navigation.navigate('AddressInfoRegScreen');
  }

  render() {
    return(
      <>
        <ProgressBar />
        <View style={styles.container}>
          <View style={{height: 120}} />
          <PersonalInfoForm next={this.handleNext} />
        </View>
        <View style={{ alignSelf:'center' }}>
          <View style={styles.normalContainer}>
            <Text style={styles.normalText}>Laburapp 1.0.0</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex:5,
  },
  normalContainer: {
    height:20,
  },
  normalText: {
    color:'#5B5A5A',
    fontSize:12,
    alignItems: 'center',
    textAlign:'center',
    width:330,
  },
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateUser,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(PersonalInfoReg);


