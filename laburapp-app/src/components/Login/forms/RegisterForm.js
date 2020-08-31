import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function RegisterForm(props) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeat: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Correo invalido')
        .required('Requerido'),
      password: Yup.string()
        .required('Requerido')
        .min(8, 'Password muy corto - minimo 8 caracteres.'),
      repeat: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: x => props.signUp(x)
  })
  return (
    <>
      <Text style={styles.label}>Email</Text>
      <View style={styles.emailContainer}>
        <TextInput style={styles.textInput} placeholder="Email"
          keyboardType="email-address"
          onBlur={formik.handleBlur('email')}
          onChangeText={formik.handleChange('email')}
          />
      </View>
      {formik.errors.email && formik.touched.email ? <Text style={styles.error}>{formik.errors.email}</Text> : null}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput style={styles.textInput} placeholder="Password"
          secureTextEntry={true}
          onBlur={formik.handleBlur('password')}
          onChangeText={formik.handleChange('password')}
        />
      </View>
      {formik.errors.password && formik.touched.password ? <Text style={styles.error}>{formik.errors.password}</Text> : null}
      <Text style={styles.label}>Repeat password</Text>
      <View style={styles.passwordContainer}>
        <TextInput style={styles.textInput} placeholder="Repeat password"
          secureTextEntry={true}
          onBlur={formik.handleBlur('repeat')}
          onChangeText={formik.handleChange('repeat')}
          />
      </View>
      {formik.errors.repeat && formik.touched.repeat ? <Text style={styles.error}>{formik.errors.repeat}</Text> : null}
      <TouchableOpacity
        onPress={formik.handleSubmit}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex:1,
  },
  error: {

  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginVertical: 5
  },
  logo: {
    alignSelf: 'center',
    width:300,
    height:60,
    resizeMode:'contain',
  },
  forgotPassword: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height:30,
    alignItems: 'flex-end',
  },
  createAccount: {
    height:30,
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
  createText: {
    color:'#FF7260',
    fontSize:12,
    alignItems: 'center',
    textAlign:'center',
    width:330,
  },
  forgotText: {
    color:'#5B5A5A',
    fontSize:12,
    alignItems: 'flex-end',
    textAlign:'right',
    width:330,
  },
  logoContiner: {
    height:150,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  welcome: {
    fontSize:25,
    color:'#5B5A5A',
    letterSpacing:6
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
  emailContainer: {
    width:325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height:50,
    padding:10,
    borderRadius: 4,
    backgroundColor:'#F5F6F7',
    marginBottom: 15,
  },
  passwordContainer: {
    width:325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height:50,
    padding:10,
    borderRadius: 4,
    backgroundColor:'#F5F6F7',
    marginBottom: 15,
  }

});

