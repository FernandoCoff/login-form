import { disableButton, enableButton, setErrorFor, setSuccessFor, validarEmail } from "./main.js"

const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const Username = document.getElementById('userName')
const checkTerms = document.getElementById('checkTerms')
const submitButton = document.getElementById('submitButton')

try{
    disableButton(submitButton)
    checkTerms.addEventListener('change', ()=>{
        if(checkTerms.checked == false){
            disableButton(submitButton)
        }else{
            enableButton(submitButton)
    }
})
}catch(erro){

}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    try{
        const passwordValue = password.value

        if(passwordValue == ''){
            setErrorFor(password, 'Por favor, insira a senha!')
        }else if(passwordValue.length < 6){
            setErrorFor(password, 'Senha inválida!')
        }else{
            setSuccessFor(password)
        }
    }catch(erro){

    }

    try{
        const emailValue = email.value

        if(emailValue == ''){
            setErrorFor(email, 'Por favor, preencha o campo e-mail!')
        }else if(!validarEmail(emailValue)){
            setErrorFor(email, 'insira um e-mail válido!')
        }else{
            setSuccessFor(email)
        }
    }catch(erro){

    }

    try{
        const userNameValue = Username.value

        if(userNameValue == ''){
            setErrorFor(Username, 'Por favor insira o nome de usuário!')
        }else if(userNameValue.length < '3'){
            setErrorFor(Username, "Insira um nome de usuário válido!")
        }else{
            setSuccessFor(Username)
        }
    }catch(erro){

    }
    
})