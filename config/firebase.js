import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDnTIG2iXIAM8kZD-33NQk49u69YknOB8c',
  authDomain: 'myhealth-c00d1.firebaseapp.com',
  projectId: 'myhealth-c00d1',
  storageBucket: 'myhealth-c00d1.appspot.com',
  messagingSenderId: '4474322077',
  appId: '1:4474322077:web:073ae06661a40be03da874',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth};
