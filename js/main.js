/* 


var addingUsers = true;
var users = [];

function addUser() {
    if (addingUsers) {
        var nombre1 = document.getElementById("nombre1").value;
        var monto1 = document.getElementById("monto1").value;
        users.push({ nombre1: nombre1, monto1: monto1 });
        displayUsers();
    }
}

function stopAddingUsers() {
    addingUsers = false;
    document.getElementById("calculate").style.display = "block";
    document.getElementById("nombre1").style.display = "none";
    document.getElementById("monto1").style.display = "none";
    document.getElementById("addUser").style.display = "none";
    document.getElementById("stopAddingUsers").style.display = "none";
}



function calculatePromedio() {
    var total = 0;
    for (var i = 0; i < users.length; i++) {
        total += parseFloat(users[i].monto1);
    }
    var promedio = total / users.length;
    document.getElementById("result").innerHTML = "El total es de $" + total + "<br> El promedio es de $" + promedio + "<br>";
    return total;
}





function displayUsers() {
    var list = document.getElementById("userList");
    var item = document.createElement("li");
    item.innerHTML = document.getElementById("nombre1").value + " - $" + document.getElementById("monto1").value;
    list.appendChild(item);
}

  */



//=============================================================================================================



var addingUsers = true;
var users = [];

function addUser() {
    var nombre1 = document.getElementById("nombre1").value;
    var monto1 = document.getElementById("monto1").value;
    

    if (nombre1 === '' || monto1 === '') {
        alert('Por favor, ingrese un nombre y un monto válidos');
        return;
    }
    
    if (isNaN(monto1)) {
        alert('Por favor, ingrese un monto válido');
        return;
    }

    users.push({ nombre1: nombre1, monto1: monto1 });
    displayUsers();
    document.getElementById("nombre1").value = '';
    document.getElementById("monto1").value = '';
}

function stopAddingUsers() {
    addingUsers = false;
    document.getElementById("calculate").style.display = "block";
    document.getElementById("nombre1").style.display = "none";
    document.getElementById("monto1").style.display = "none";
    document.getElementById("addUser").style.display = "none";
    document.getElementById("stopAddingUsers").style.display = "none";
}






function calculatePromedio() {
    var total = 0;
   


    for (var i = 0; i < users.length; i++) {
        total += parseFloat(users[i].monto1);
    }
    var promedio = total / users.length;
    document.getElementById("result").innerHTML = "El total es de $" + total + "<br> El promedio es de $" + promedio + "<br>";
    
    var deudoresList = document.getElementById("deudoresList");
    var acreedoresList = document.getElementById("acreedoresList");
    var libresList = document.getElementById ("libresList");
    deudoresList.innerHTML = "Deudores:<br>";
    acreedoresList.innerHTML = "Acreedores:<br>";
    for (var i = 0; i < users.length; i++) {
        if (users[i].monto1== promedio){
            var item = document.createElement("li");
            item.innerHTML = users[i].nombre1 + " no debe nada";
            libresList.appendChild(item);
        } else if (users[i].monto1 < promedio) {
            var item = document.createElement("li");
            item.innerHTML = users[i].nombre1 + " - $" + (promedio - users[i].monto1);
            deudoresList.appendChild(item);
          
        } else if (users[i].monto1 > promedio) {
            var item = document.createElement("li");
            item.innerHTML = users[i].nombre1 + " - $" + (users[i].monto1 - promedio);
            acreedoresList.appendChild(item);
        }
    }
    return total;
}


function displayUsers() {
    var list = document.getElementById("userList");
    var item = document.createElement("li");
    item.innerHTML = document.getElementById("nombre1").value + " - $" + document.getElementById("monto1").value;
    list.appendChild(item);
}


function resetButton() {
    document.getElementById("nombre1").value = '';
    document.getElementById("monto1").value = '';
    document.getElementById("result").innerHTML = '';
    document.getElementById("userList").innerHTML = '';
    document.getElementById("calculate").style.display = "none";
    document.getElementById("nombre1").style.display = "block";
    document.getElementById("monto1").style.display = "block";
    document.getElementById("addUser").style.display = "block";
    document.getElementById("stopAddingUsers").style.display = "block";
    users = [];
    addingUsers = true;
}
 








