var phonenumber;
phonenumber = document.getElementById("phoneNumber").value = 0;
document.getElementById("higherButton").onclick = function() {

    phonenumber++;
    document.getElementById("phoneNumber").textContent = phonenumber;
}

document.getElementById("lowerButton").onclick = function() {

    phonenumber--;
    document.getElementById("phoneNumber").textContent = phonenumber;
}