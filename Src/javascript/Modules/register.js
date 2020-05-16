import '../../Scss/main.scss';
import { firebaseConfig } from '../firebaseConfig/config';
import { CheckForm } from './checkForm';
import { RegisterFirebase } from "./registerFirebase";

window.addEventListener("load", () => {
    new CheckForm();
    new RegisterFirebase(firebaseConfig);
});
