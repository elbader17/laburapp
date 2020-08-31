import firebase from "../../components/utils/firebase"
import "firebase/auth";

const initialState = {
  newUser: {},
}

const UPDATE_NEW_USER = 'register/UPDATE_NEW_USER';
const FETCH_SKILLS = 'register/FETCH_SKILLS';

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_USER:
      return {
        ...state,
        newUser: action.payload.data,
      }
    case FETCH_SKILLS:
      return {
        ...state,
        skills: action.payload.data,
      }
    default:
      return state
  }
}

const updateUserAction = (data) => ({
  type: UPDATE_NEW_USER,
  payload: { data }
  
});

const fetchSkillsAction = (data) => ({
  type: FETCH_SKILLS,
  payload: { data }
});

export const fetchSkills = () => dispatch => {
  const skills = []
  fetch('http://localhost:1337/oficios', {
    method: 'GET',
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    response.map(res => {
      let skill = {}
      skill.descripcion = res.descripcion;
      skill.id = res.id;
      skills.push(skill);
    })
    dispatch(fetchSkillsAction(response))
  });
}

export const updateUser =  (data) => async dispatch => {
  const {
    email = false,
    password = false,
    name = false,
    lastname = false,
    address = false,
    city = false,
    state = false,
    zipCode = false,
    skills = false
  } = data;
  const { newUser } = initialState;
  if (email && password){
    newUser.id_firebase = await registerFirebase(data)
  }
  newUser.name = newUser.name || name
  newUser.lastname = newUser.lastname || lastname
  newUser.direccion = newUser.address || address
  newUser.ciudad = newUser.city || city
  newUser.provincia = newUser.state || state
  newUser.codigoPostal = newUser.zipCode || zipCode
  newUser.profecion = newUser.skills || skills
  dispatch(updateUserAction(newUser));
}

const registerFirebase = async (data) =>{
  const{
    email,
    password
  }=data;
  const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
  return result.user.uid

}
