import '../../Scss/main.scss';
import { firebaseConfig } from '../firebaseConfig/config';
import { MainTodo } from './mainTodo';

window.addEventListener("load", () => {
    new MainTodo(firebaseConfig);
});

