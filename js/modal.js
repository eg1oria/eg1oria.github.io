export function modalSuccess() {
    const inputs = document.querySelectorAll("#adress");
    const submitButton = document.getElementById("submitButton");

    const successModal = document.getElementById("successModal");
    const successCloseBtn = document.querySelector("#successModal .close");
    const thankYouButton = document.getElementById("thankYouButton");

    const errorModal = document.getElementById("errorModal");
    const errorCloseBtn = document.querySelector("#errorModal .close");
    const errorOkButton = document.getElementById("errorOkButton");

    function checkInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

    }

    inputs.forEach(input => {
        input.addEventListener("input", checkInputs);
    });

    submitButton.addEventListener("click", function () {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value === "") {
                allFilled = false;
            }
        });

        if (allFilled) {
            successModal.style.display = "block";
        } else {
            errorModal.style.display = "block";
        }
    });

    successCloseBtn.addEventListener("click", function () {
        successModal.style.display = "none";
    });

    thankYouButton.addEventListener("click", function () {
        successModal.style.display = "none";
    });

    errorCloseBtn.addEventListener("click", function () {
        errorModal.style.display = "none";
    });

    errorOkButton.addEventListener("click", function () {
        errorModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === successModal) {
            successModal.style.display = "none";
        }
        if (event.target === errorModal) {
            errorModal.style.display = "none";
        }
    });
}


export function modalInfo() {
    const infoModal = document.querySelector('.info-modal')
    const infoModalBtn = document.querySelector('.info-modal__btn')
    const infoModalToogle = document.querySelector('.card-toogle')

    infoModalToogle.addEventListener('click', () => {
        infoModal.style.display = 'flex'
    })

    infoModalBtn.addEventListener('click', () => {
        infoModal.style.display = 'none'
    })

    window.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            infoModal.style.display = 'none'
        }

    })
}