import '../../Scss/main.scss';
import { firebaseConfig } from '../firebaseConfig/config';
import { CheckForm } from './checkForm';
import { LoginFirebase } from './loginFirebase';

window.addEventListener("load", () => {
    new CheckForm();
    new LoginFirebase(firebaseConfig)
});