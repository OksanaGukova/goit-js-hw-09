const form = document.querySelector('.feedback-form'); 
const localStorageKey = "feedback-form-state"; 
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');



form.addEventListener('input', () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

function isContentSaved() {
    const feedbackFormState = JSON.parse(localStorage.getItem(localStorageKey));
  if (feedbackFormState!== null) {
    emailInput.value = feedbackFormState.email || '';
    messageTextarea.value = feedbackFormState.message || '';
    }
}; 

document.addEventListener('DOMContentLoaded', isContentSaved);

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
 if (formData.email && formData.message) {
    console.log(formData); 
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert("Please fill in both email and message fields.");
  }
}); 


