import '../../Scss/main.scss';
import { CheckForm } from './checkForm';
import { RegisterFirebase } from "./registerFirebase";


window.addEventListener("load", () => {
    new CheckForm();
    new RegisterFirebase();
});
