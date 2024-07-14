function createMonthConverter(monthNumber) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return function (monthNumber){
        monthNumber = Math.floor(monthNumber);
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        return "Bad Number";
        
    }
    return monthNames[monthNumber - 1];
    
}    
    
}

a=window.prompt("Enter a month number: ");
b=createMonthConverter(a);

window.alert(b(a));
console.log(b);