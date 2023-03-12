import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {auth} from './FireConfig';

const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
export const createUserWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
};

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export  { auth, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut, getCurrentUser };
