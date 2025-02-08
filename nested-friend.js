let result = 90;
let friendResult = 70;

if (result >= 80) {
    if (friendResult> 80) {
        console.log("go for a lunch");
    }
    else if(friendResult<80 && friendResult>=60){
        console.log("good luck next time");
    } 
    else if(friendResult<60 && friendResult>=40){
        console.log("friend's message unseen");
    } 
    else {
        console.log("block");
    }
} else {
    console.log("go to home and sleep and act sad");
    
}