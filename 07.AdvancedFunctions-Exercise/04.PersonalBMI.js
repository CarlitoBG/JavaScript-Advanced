function personalBMI() {
    let name = arguments[0]
    let age = arguments[1]
    let weight = arguments[2]
    let height = arguments[3]

    let bmi = Math.round(weight / (Math.pow((height / 100), 2)))
    let status = ''
    let recommendation = ''

    if (bmi < 18.5){
        status = 'underweight'
    }else if (bmi >= 18.5 && bmi < 25){
        status = 'normal'
    }else if(bmi >= 25 && bmi < 30) {
        status = 'overweight'
    }else {
        status = 'obese'
        recommendation = 'admission required'
    }

    let personChart = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: status
    }

    if (recommendation !== ''){
        personChart['recommendation'] = recommendation
    }

    return personChart
}

console.log(personalBMI('Peter', 29, 75, 182))