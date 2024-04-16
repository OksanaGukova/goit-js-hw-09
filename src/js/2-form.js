const form = document.querySelector('.feedback-form'); 
const localStorageKey = "feedback-form-state"; 
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');



form.addEventListener('input', () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

function isContentSaved() {
    const feedbackFormState = JSON.parse(localStorage.getItem(localStorageKey));
  if (feedbackFormState) {
    emailInput.value = feedbackFormState.email || '';
    messageTextarea.value = feedbackFormState.message || '';
    }
}; 

document.addEventListener('DOMContentSaved', isContentSaved);

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.removeItem(localStorageKey)
    form.reset();
     console.log(formData); 
}); 


