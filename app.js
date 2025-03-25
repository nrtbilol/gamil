document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Formni avtomatik yuborilishini to‘xtatish

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                successMessage.classList.remove("hidden");
                form.reset(); // Formani tozalash
                setTimeout(() => {
                    successMessage.classList.add("hidden");
                }, 5000);
            } else {
                alert("Xatolik yuz berdi! Iltimos, qayta urinib ko‘ring.");
            }
        }).catch(error => {
            alert("Tarmoqda xatolik! Internetingizni tekshiring.");
        });
    });
});
