import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function PersonalInfoForm(props) {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Requerido')
        .matches(/^[a-zA-Z\s]+$/ , 'Formato incorrecto'),
      lastname: Yup.string()
        .required('Requerido')
        .matches(/^[a-zA-Z\s]+$/ , 'Formato incorrecto'),
    }),
    onSubmit: x => props.next(x)
  })
  return(
    <>
      <Text style={styles.label}>Name</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          onBlur={formik.handleBlur('name')}
          onChangeText={formik.handleChange('name')}/>
      </View>
      {formik.errors.name && formik.touched.name ? <Text>{formik.errors.name}</Text> : null}
      <Text style={styles.label}>Lastname</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          onBlur={formik.handleBlur('lastname')}
          onChangeText={formik.handleChange('lastname')}
        />
      </View>
      {formik.errors.lastname && formik.touched.lastname ? <Text>{formik.errors.lastname}</Text> : null}
      <TouchableOpacity onPress={formik.handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginVertical: 5
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
    height:40,
    padding:10,
    borderRadius:24,
    marginTop:140,
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