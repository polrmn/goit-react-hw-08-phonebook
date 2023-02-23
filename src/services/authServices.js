import { privateAPI, publicAPI } from "./axios/axios";

export const token = {
  set: token => {
    privateAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    privateAPI.defaults.headers.common.Authorization = '';
  },
};

export const signUpService = async user => {
    const { data } = await publicAPI.post('users/signup', user);
    return data
}

export const loginService = async user => {
    const { data } = await publicAPI.post('users/login', user);
    return data
}

export const getUserService = async () => {
    const { data } = await privateAPI.get('users/current');
    return data
}

export const logOutService = async () => {
    const { data } = await privateAPI.post('users/logout');
    return data
}

export const getContacts = async () => {
  const { data } = await privateAPI.get('contacts');
  return data
}

export const addContact = async contact => {
  const { data } = await privateAPI.post('contacts', contact);
  return data
}

export const deleteContact = async contactId => {
  const { data } = await privateAPI.delete(`contacts/${contactId}`);
  return data
}

