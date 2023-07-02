class login {

    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.Validarnoenvio()
    }

    Validarnoenvio() {
        let self = this;
        const logi = document.querySelector('#login');
        const passw = document.querySelector('#password');
        const log = localStorage.getItem('auth1');
        const pas = localStorage.getItem('auth2');

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            var erro = 0;
            self.fields.forEach(field => {

                const input = document.querySelector(`#${field}`);
                if (self.Validarcampos(input) == false) {
                    erro++;
                }
            });
            if (erro == 0 && logi.value == log && passw == pas) {
                localStorage.setItem("uid", 1);
                this.form.submit();
            }
            if (logi != log || passw != pas) {
                alert("O email, ou senha, não bate(m) com os cadastrados")
            }
        });
    }

    Validarcampos(field) {
        if (field.value.trim() == "") {
            this.setStatus(field,
                `${field.previousElementSibling.innerText} não pode ser acessado(a) com os campos em branco`,
                "error"); {
                return false;
            }

        } else {
            if (field.type == "password") {
                if (field.value.length < 8) {
                    this.setStatus(field,
                        `${field.previousElementSibling.innerText} deve ter pelo menos 8 caracteres`,
                        "error"); {
                        return false;
                    }
                } else {
                    this.setStatus(field, null, "success");
                    return true;
                }
            } else {
                this.setStatus(field, null, "success");
                return true;
            }
        }
    }

    setStatus(field, message, status) {
        const errormessage = field.parentElement.querySelector(".error-message");

        if (status == "success") {
            errormessage.innerText = "";
        }
        field.classList.remove("input-error");

        if (status == "error") {
            errormessage.innerText = message;
            field.classList.add("input-error")
        }
    }

}

const form = document.querySelector(".loginform");

if (form) {
    const fields = ["login", "password"];
    const validator = new login(form, fields);
}