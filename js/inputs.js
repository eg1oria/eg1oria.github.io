export function errorInputs() {
    const emailInput = document.querySelector('#emailF');
    const checkboxEl = document.querySelector('#subscribeCheckbox');
    const telEl = document.querySelector('.custom-input__field--error');
    const telErrorEl = document.querySelector('.custom-input__error');
    const telLabelEl = document.querySelector('.custom-input__label[for="number"]');
    const telIconEl = document.querySelector('.custom-input__icon--phone');
    const mailIconEl = document.querySelector('.custom-input__icon--nab')
    const mailLabelEl = document.querySelector('.custom-input__label[for="emailF"]');
    const nameEl = document.querySelector('#name')
    const nameLabelEl = document.querySelector('.custom-input__label--name')
    const friendLabelEl = document.querySelector('.custom-input__label[for="emailFiel"]');
    const friendIconEl = document.querySelector('.custom-input__icon--friend')
    const addresLabelEl = document.querySelector('.custom-input__label--addres')
    const addresErrorEl = document.querySelector('.custom-input__error--addres')
    const addresInputEl = document.querySelector('#adress')

    const friendEl = document.querySelector('#subscribeCheckbo')
    const friendInputEl = document.querySelector('#emailFiel')

    friendInputEl.addEventListener('input', () => {
        if (friendInputEl.value) {
            friendLabelEl.style.color = '#87F29A';
            friendIconEl.style.color = '#87F29A';
            friendInputEl.style.background = 'rgba(111, 181, 130, 0.15)';
        }
    })

    friendEl.addEventListener('change', () => {
        if (friendEl.checked) {
            friendInputEl.removeAttribute('disabled')
        } else {
            friendInputEl.setAttribute('disabled', 'true')
        }
    })

    addresInputEl.addEventListener('input', () => {
        if (addresInputEl.value) {
            addresErrorEl.style.display = 'none';
            addresLabelEl.style.color = '#87F29A';
            addresInputEl.style.background = 'rgba(111, 181, 130, 0.15)';
        }
    })

    emailInput.addEventListener('input', () => {
        if (emailInput.value) {
            emailInput.style.background = 'rgba(111, 181, 130, 0.15)';
            mailLabelEl.style.color = '#87F29A'
            mailIconEl.style.color = '#87F29A'
        }
    })

    nameEl.addEventListener('input', () => {
        if (nameEl.value) {
            nameEl.style.background = 'rgba(111, 181, 130, 0.15)';
            nameLabelEl.style.color = '#87F29A'
        }
    })

    telEl.addEventListener('input', () => {
        if (telEl.value.trim()) {
            telErrorEl.style.display = 'none';
            telEl.style.background = 'rgba(111, 181, 130, 0.15)';
            telLabelEl.style.color = '#87F29A';
            telIconEl.style.color = '#87F29A'
        } else {
            telErrorEl.style.display = 'block';
        }
    });

    if (!emailInput || !checkboxEl) {
        console.error("Элементы не найдены! Проверь id или классы.");
        return;
    }

    checkboxEl.addEventListener('change', () => {
        if (checkboxEl.checked) {
            emailInput.removeAttribute('disabled');
            emailInput.focus();
        } else {
            emailInput.setAttribute('disabled', 'true');
            emailInput.value = '';
        }
    });
}