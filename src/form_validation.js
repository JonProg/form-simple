import './assets/css/style.css';
import {ValidatorCPF} from './validation_cpf';

class ValidedForm{
    constructor(){
        this.form = document.getElementById('form');
        this.event = this.events();
    }

    events(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const fieldsValid = this.isValid();
        const keysValid = this.passwordValid();

        if(fieldsValid && keysValid){
            alert('Cadastro feito com sucesso!!');
            this.form.submit();
        }
    }

    passwordValid(){
        let valid = true;
        const password = document.getElementById("password");
        const samePassword = document.getElementById("password-confirmation");

        if(password.value !== samePassword.value){
            this.msgError(samePassword,`As senhas precisam ser iguais`);
            valid = false;
        }

        if(password.value.length < 6 || password.value.length >12){
            this.msgError(password,`A senha precisa estar entre 6 e 12 caracteres`);
            valid = false;
        }

        if (valid){
            samePassword.parentElement.classList.add('success');
            password.parentElement.classList.add('success');
        }
        return valid;
    }

    isValid(){
        let valid = true;
        this.form.querySelectorAll('.success, .error').forEach(element => {
            element.classList.remove('success');
            element.classList.remove('error');
            element.querySelector('small').innerText = ''; 
        });
        

        for(let field of this.form.querySelectorAll('.valided')){
            const label = field.previousElementSibling.innerText;
            if (!field.value){
                this.msgError(field,`"${label}" não pôde estar em branco`)
                valid = false;
            }else if(field.id === 'username' || field.id === 'surname'){
                field.parentElement.classList.add('success');
            }

            if(field.id === 'cpf'){
                if(!this.validedCpf(field)) valid = false;
            }

        }
        return valid;
    }

    validedCpf(field){
        const cpf = new ValidatorCPF(field.value);
        if(!cpf.validated()){
            this.msgError(field,'"CPF" inválido');
            return false
        }
        field.parentElement.classList.add('success');
        return true
    }

    msgError(element,msg){
        const tagMsg = element.parentElement.querySelector('small');
        element.parentElement.classList.add('error');
        tagMsg.innerHTML += `${msg}<br/>`;
    }
}

const valided = new ValidedForm();

