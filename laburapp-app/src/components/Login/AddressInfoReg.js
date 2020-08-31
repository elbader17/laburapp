import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ProgressBar from '../utils/ProgressBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from '../../redux/reducers/register';
import AddressInfoForm from './forms/AddressInfoForm';

class AddressInfoReg extends Component {
  constructor(props) {
    super(props)
  }

  handleNext = (data) => {
    this.props.updateUser(data);
    this.props.navigation.navigate('SkillsInfoRegScreen');
  }

  render() {
    return(
      <>
        <ProgressBar />
        <View style={styles.container}>
          <View style={{height: 60}} />
          <AddressInfoForm next={this.handleNext} />
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
  textInput: {
    color:'#989899',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:14,
  },
  button: {
    width:125,
    borderColor: '#129793',
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius:24,
    marginTop:20,
    marginLeft: 180,
    backgroundColor:'#129793',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#129793',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 0.8
  },
  buttonText: {
    color:'white',
    fontSize:12
  },
  input: {
    width:325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height:50,
    padding:10,
    borderRadius: 4,
    backgroundColor:'#F5F6F7',
    marginBottom: 15,
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
)(AddressInfoReg);
