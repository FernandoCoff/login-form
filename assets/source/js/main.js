export const setSuccessFor = (input)=>{
    const campo = input.parentElement
    const small = campo.getElementsByTagName('small')

    campo.classList = "input-item success"
    small[0].style = 'display: none'
}

export const setErrorFor = (input, message)=>{
    const campo = input.parentElement
    const small = campo.getElementsByTagName('small')

    campo.classList = "input-item error"
    small[0].textContent = message
    small[0].style = 'display: block'
}

export const validarEmail = (email)=> {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const disableButton = (button)=>{
    button.disabled = true
    button.classList = "disable"
}
export const enableButton = (button)=>{
    button.disabled = false
    button.classList = ""
}