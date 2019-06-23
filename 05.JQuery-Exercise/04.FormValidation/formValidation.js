function validate() {
    let username = $('#username')
    let password = $('#password')
    let confirmPassword = $('#confirm-password')
    let email = $('#email')
    let company = $('#company')
    let companyInfo = $('#companyInfo')

    let valid = $('#valid')
    let submit = $('#submit')

    setEventHandlers()

    function setEventHandlers() {
        company.on('change', function () {
            if (companyInfo.css('display') === 'none'){
                companyInfo.css('display', 'block')
            } else {
                companyInfo.css('display', 'none')
            }
        })

        submit.on('click', submitForm)
    }

    function submitForm(event) {
        event.preventDefault()
        let isUsernameValid = validateUsername()
        let isPasswordValid = validatePassword()
        let isEmailValid = validateEmail()

        let isCompanyNumberValid
        if (company[0].checked) {
            isCompanyNumberValid = validateCompanyField()
        } else {
            isCompanyNumberValid = true
        }

        let isFormValid = isUsernameValid && isPasswordValid && isEmailValid && isCompanyNumberValid
        isFormValid ? valid.css('display', 'block') : valid.css('display', 'none')
    }

    function validateUsername() {
        let pattern = /^[A-Za-z0-9]{3,20}$/g
        let isValid = pattern.test(username.val())
        isValid ? username.css('border-color', '') : username.css('border-color', 'red')

        return isValid
    }

    function validatePassword() {
        let pattern = /^\w{5,15}$/g
        let isValid = password.val() === confirmPassword.val() && pattern.test(password.val())

        if (isValid){
            password.css('border-color', '')
            confirmPassword.css('border-color', '')
        } else {
            password.css('border-color', 'red')
            confirmPassword.css('border-color', 'red')
        }
        return isValid
    }

    function validateEmail(){
        let pattern = /^.*@.*?\..*?$/
        let isValid = pattern.test(email.val())
        isValid ? email.css('border-color', 'none') : email.css('border-color', 'red')

        return isValid
    }

    function validateCompanyField() {
        let companyNumber = $('#companyNumber')
        let isValid = companyNumber.val() >= 1000 && companyNumber.val() <= 9999
        isValid ? companyNumber.css('border-color', 'none') : companyNumber.css('border-color', 'red')

        return isValid
    }
}