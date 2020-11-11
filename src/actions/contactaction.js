
import {CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT} from '../Const/types'
export const addContact = (contact) => {
    
  
  return {
      type: CREATE_CONTACT,
      payload: contact,
    }
  }
  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id
  })
  

  //UPDATE

  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload:contact
  })
  //DELETE
  export const deleteteContact = (id) => ({
    type: DELETE_CONTACT,
    payload:id
  })
  