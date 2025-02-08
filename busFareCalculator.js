let age =40;
let student = false;
const ticketPrice = 800;

if (age<10) {
    console.log("freeeeee");
}
else if(student) {
    const dicount = ticketPrice*50/100;
    const payAmount = ticketPrice- dicount;
    console.log(payAmount);
}
else if(age >= 60){
    const dicount = ticketPrice * 15/100;
    const payAmount = ticketPrice - dicount;
    console.log(payAmount);
}
 else {
    console.log(ticketPrice);
    
}