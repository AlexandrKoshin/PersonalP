const username = document.getElementById('name');
const email = document.getElementById('email');
const btn = document.getElementById('btn');
const myForm = document.getElementById('myForm');
const fields = [username, email];

fields.forEach((field) => {
    field.addEventListener('input', () => {
        if (validate()) {
            btn.removeAttribute('disabled')
        }
        else {
            btn.setAttribute('disabled', 'disabled')
        }
    })
});

function validate() {
    return username.value.trim() !== '' && email.value.trim() !== '';
}
