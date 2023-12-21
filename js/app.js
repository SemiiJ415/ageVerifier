// console.log(new Date().toString())


//get today's date
const today = new Date();

//get user input
const dateInput = document.getElementById('dateInput');
//valid year to pass test
const validYear = today.getFullYear() - 21
const validMonth = today.getMonth()
const validDay = today.getDate()

const checkbox = document.getElementById('checkbox')

const message = document.getElementById('message')
let messageText;
// need to get the year for the valid date by subtracting 21 years from today's date
// const validAge = 
//verify checkbox is marked
const validate =()=> {
    const isChecked = checkbox.checked

    if (!isChecked) {
        messageText = "Please check the box to verify your age."
        message.innerHTML = `
        ${messageText}
    `
    } else {
        getDOB();
    }

}    

//get the users date of birth
const getDOB =()=> {

    const userDate = new Date(dateInput.value);//need to get just the year
    const userYear = userDate.getFullYear()
    const userMonth = userDate.getMonth()
    const userDay  = userDate.getDate()
    console.log(userDate, userYear, userMonth, userDay);
    verifyAge(userDate, userYear, userMonth, userDay)

}

//verify the users date of birth
const verifyAge =(date, year, month, day)=> {
    const userDate = date;
    const userYear = year;
    const userMonth = month;
    const userDay = day;
    //check to see if user birth YEAR is valid
    //is userYear >= validYear?
    if (validYear >= userYear) {
        if (validMonth >= userMonth && validDay >= userDay) {
            if(validDay >= userDay) {
                messageText = 'access granted'
                message.innerHTML = `
                ${messageText} `
            } else {
                messageText = 'grab the pacifier'
                message.innerHTML = `
                ${messageText} `
            }
        } else {
            messageText = 'grab the pacifier'
            message.innerHTML = `
            ${messageText} `
        }
    } else {
        messageText = 'grab the pacifier'
        message.innerHTML = `
        ${messageText} `
    }
}

// const verifyAge =(date, year, month, day)=> {
//     const userDate = date;
//     const userYear = year;
//     const userMonth = month;
//     const userDay = day;
//     //check to see if user birth YEAR is valid
//     //is userYear >= validYear?
//     if (validYear >= userYear) {
//         if (validMonth >= userMonth && validDay == userDay) {
//             console.log('you are valid')
//         } 
//     } else {
//         console.log('grab the pacifier')
//     }
// }