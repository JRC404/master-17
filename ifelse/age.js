let age = 30;
switch (true) {
    case age < 18:
        console.log("No Service");
        break;
    case age < 40:
        console.log("Full Service");
        break;
    case age < 60:
        console.log("25% off")
        break;
    case age < 80:
        console.log("50% off")
        break;
    case age < 100:
        console.log("100% off")
        break;
    default:
        console.log("cannot serve you");
        break;
}