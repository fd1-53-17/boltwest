var userAnsver = prompt("Введите полиндром");
userAnsver = userAnsver.toLowerCase().split(" ").join("").split(",").join("").split(".").join("").split("-").join("").split('"').join("");
if(userAnsver == userAnsver.split("").reverse().join("")){
    alert("это палиндром!");
}else {
    alert("Это не палиндром");
}