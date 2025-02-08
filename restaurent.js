const age = 50;
const price = 10000;
if (age<=12) {
    console.log("you can eat for free");
    
}
else if(age>=60){
    // 50% discount 
    const discount = price *50/100;
    const payAmmount = price - discount;
    console.log("you have to pay",payAmmount);
}
else if(age>=50){
    // 25% discount 
    const discount = price *25/100;
    const payAmmount = price - discount;
    console.log("you have to pay",payAmmount);
}
 else {
    console.log("you have to pay",price);
}