import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddressInfoForm(props) {
  const formik = useFormik({
    initialValues: {
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
    validationSchema: Yup.object({
      address: Yup.string()
        .required('requerida'),
      city: Yup.string()
        .required('requerida')
        .matches(/^[a-zA-Z\s]+$/ , 'formato incorrecto'),
      state: Yup.string()
        .required('requerida')
        .matches(/^[a-zA-Z\s]+$/ , 'formato incorrecto'),
      zipCode: Yup.string()
        .required('requerido')
        .matches(/^[0-9]+$/ , 'formato incorrecto'),
      country: Yup.string()
        .required('requerido')
        .matches(/^[a-zA-Z\s]+$/ , 'formato incorrecto'),
    }),
    onSubmit: x => props.next(x)
  })
  return (
    <>
      <Text style={styles.label}>Direccion</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          onBlur={formik.handleBlur('address')}
          onChangeText={formik.handleChange('address')}
        />
      </View>
      <Text style={styles.label}>Ciudad</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          onBlur={formik.handleBlur('city')}
          onChangeText={formik.handleChange('city')}
          />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
        <Text style={styles.label}>Provincia</Text>
        <View style={{width: 107}}></View>
        <Text style={styles.label}>CP</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.shortInput}>
          <TextInput
            style={styles.textInput}
            onBlur={formik.handleBlur('state')}
            onChangeText={formik.handleChange('state')}
            />
        </View>
        <View style={{width:20}}></View>
        <View style={styles.shortInput}>
          <TextInput
            style={styles.textInput}
            onBlur={formik.handleBlur('zipCode')}
            onChangeText={formik.handleChange('zipCode')}
            />
        </View>
      </View>
      <Text style={styles.label}>Pais</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          onBlur={formik.handleBlur('country')}
          onChangeText={formik.handleChange('country')}
          />
      </View>
      {formik.errors.address && formik.touched.address ? <Text style={styles.error}>Direccion {formik.errors.address}</Text> : null
      || formik.errors.city && formik.touched.city ? <Text style={styles.error}>Ciudad {formik.errors.city}</Text> : null
      || formik.errors.state && formik.touched.state ? <Text style={styles.error}>Provincia {formik.errors.state}</Text> : null
      || formik.errors.zipCode && formik.touched.zipCode ? <Text style={styles.error}>CP {formik.errors.zipCode}</Text> : null
      || formik.errors.country && formik.touched.country ? <Text style={styles.error}>Pais {formik.errors.country}</Text> : null}
      <TouchableOpacity onPress={formik.handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  error: {

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
  shortInput: {
    width: 150,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height:50,
    padding:10,
    borderRadius: 4,
    backgroundColor:'#F5F6F7',
    marginBottom: 15,
  },
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
    width:325,
    borderColor: '#129793',
    borderWidth: 1,
    height:50,
    padding:10,
    borderRadius:24,
    marginTop:35,
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
});
