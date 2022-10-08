import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
import {save, load, remove} from "./storage"

initPage();

const onFormInput = evt => {
        const { name, value } = evt.target;
 
        let saveData = load(LOCALSTORAGE_KEY);
        saveData = saveData ? saveData : {};
       
           // console.log('saveData', saveData);
        saveData[name] = value;
        save(LOCALSTORAGE_KEY, saveData);
    } 

const throttledOnFormInput = throttle(onFormInput, 500);
formRef.addEventListener("input", throttledOnFormInput);

function initPage() {
    const saveData = load(LOCALSTORAGE_KEY);
    // console.log("saveData", saveData);  
    if (!saveData) {
        return;
    }
      Object.entries(saveData).forEach(([name, value]) => {
                formRef.elements[name].value = value;
            });
}
const handleSubmit = evt => {
    evt.preventDefault();
    const { elements: { email, message } } = evt.currentTarget;
    console.log({ email: email.value, message: message.value });
    evt.currentTarget.reset();
    remove(LOCALSTORAGE_KEY)
}

formRef.addEventListener("submit", handleSubmit);

// ----------2 version------------------
// import throttle from 'lodash.throttle';

// const formEl = document.querySelector(".feedback-form");
// const inputEl = document.querySelector(".feedback-form input");
// const textareaEl = document.querySelector(".feedback-form textarea");
// const LOCAL_KEY = "feedback-form-state";
// const formData = localStorage.getItem(LOCAL_KEY) ? JSON.parse(localStorage.getItem(LOCAL_KEY)):{};

// const saveItem = localStorage.getItem(LOCAL_KEY);
//         if (saveItem) {
//             const itemParse = JSON.parse(saveItem);
//             inputEl.value = itemParse.email || "";
//             textareaEl.value = itemParse.message || "";
//         }
//         else {
//             inputEl.value = "";
//             textareaEl.value = "";
//         }

// formEl.addEventListener("input", throttle(handleSaveInputValue, 500));
// formEl.addEventListener('submit', handleSubmitButtonClick);

// function handleSaveInputValue(event) {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
// }

// function handleSubmitButtonClick(event) {
//     event.preventDefault();
//     console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));
//     localStorage.removeItem(LOCAL_KEY);
//     event.currentTarget.reset();
// }
