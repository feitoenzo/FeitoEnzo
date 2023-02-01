

var addingUsers = true;
var users = [];
//agregar usuarios//  sweet alert en las alertas
function addUser() {
    var nombre1 = document.getElementById("nombre1").value;
    var monto1 = document.getElementById("monto1").value;
    

    if (nombre1 === '' || monto1 === '') {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, ingrese un nombre y un monto válidos',
            icon: 'error',
            showConfirmButton: false,
            background: '#1c1c1e'
        });
        return;
    }
    
    if (isNaN(monto1)) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, ingrese un monto válido',
            icon: 'error',
            showConfirmButton: false,
            background: '#1c1c1e'
        });
        return;
    }

   users.push({ nombre1: nombre1, monto1: monto1 });
    displayUsers();
    document.getElementById("nombre1").value = '';
    document.getElementById("monto1").value = '';
}



//boton para detener la carga usarios, una vez apretado el boton "listo" los campos desaparecen.
function stopAddingUsers() {
    addingUsers = false;
    document.getElementById("calculate").style.display = "block";
    document.getElementById("nombre1").style.display = "none";
    document.getElementById("monto1").style.display = "none";
    document.getElementById("addUser").style.display = "none";
    document.getElementById("stopAddingUsers").style.display = "none";
}





//esta funcion calcula el monto total y el prmedio, tambien genera lista de deudores (quienes pusieron menos del prmedio) y acreedores (quienes pusieron mas)
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
    deudoresList.innerHTML = "Deudores: Los siguientes usuarios deben poner la cantidad indicada de dinero para balancear las cuentas.<br>";
    acreedoresList.innerHTML = "Acreedores: Los siguientes usuarios deben recibir la cantidad indicada de dinero para balancear las cuentas.<br>";
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

// esta funcion imprime a los usuarios a medida que se agregan.
function displayUsers() {
    var list = document.getElementById("userList");
    var item = document.createElement("li");
    item.innerHTML = document.getElementById("nombre1").value + " - $" + document.getElementById("monto1").value;
    list.appendChild(item);
}

// funcion para resetear la carga de datos de usuarios
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
  

 






