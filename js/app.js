// console.log(new Date().toString())


//get today's date
const today = new Date();

//valid year to pass test
const validYear = today.getFullYear() - 21
const validMonth = today.getMonth()
const validDay = today.getDate()

//get user input
const dateInput = document.getElementById('dateInput');
const checkbox = document.getElementById('checkbox')

const message = document.getElementById('message')
let messageText = "first message";
let messageText2 = ""
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
const verifyAge =(year, month, day)=> {
    const userYear = year;
    const userMonth = month;
    const userDay = day;
    //check to see if user birth YEAR is valid
    if (validYear >= userYear) {
        if (validMonth >= userMonth) {
            if(validDay >= userDay) {
                messageText = "access granted";
                message.innerHTML = ` ${messageText}`;
            } else {
                messageText = "grab the pacifier";
                message.innerHTML = ` ${messageText}`;
            }
        } else {
            messageText = "grab the pacifier";
            message.innerHTML = ` ${messageText}`;
        }
    } else {
        messageText = "grab the pacifier";
        message.innerHTML = ` ${messageText}`;
    }
}
// const verifyAge =(year, month, day)=> {
//     year,
//     month, 
//     day

//     if (validYear >= userYear) {
//         if (validMonth >= userMonth) {
//             if(validDay >= userDay) {
//                 messageText = "access granted";
//                 message.innerHTML =
//                 `${messageText}`
//             }
//         } else {
//             messageText ="grab the pacifier";
//             message.innerHTML =
//             `${messageText}`
//         }
//     } else {
//         messageText ="grab the pacifier";
//         message.innerHTML = 
//         `${messageText}`
//     }
// }
