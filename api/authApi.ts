import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, database } from '../firebase/firebase';

const signUpWithEmailPasswordApi = async (
  email: string,
  password: string,
  name: string
) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const { user } = userCredential;

  await updateProfile(user, {
    displayName: name,
  });

  await setDoc(doc(database, 'users', user.uid), {
    uid: user.uid,
    email,
    name,
    createdAt: serverTimestamp(),
  });

  return user;
};

const signInWithEmailPasswordApi = async (
  email: string,
  password: string
) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);

  return userCredential.user;
};

const signOutApi = async () => {
  await signOut(auth);
};

export {
  signInWithEmailPasswordApi,
  signOutApi,
  signUpWithEmailPasswordApi,
};