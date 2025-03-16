const formData = {
  email: '',
  message: '',
}

const STORAGE_KEY = 'feedback-form-state'

const form = document.querySelector('.feedback-form')

const savedData = localStorage.getItem(STORAGE_KEY)

if (savedData) {
  const parsedData = JSON.parse(savedData)

  Object.entries(parsedData).forEach(([key, value]) => {
    form.elements[key].value = value;
    formData[key] = value;
  });
}

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
})

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Form Data:", formData);

  localStorage.removeItem(STORAGE_KEY);

  form.reset();
});

