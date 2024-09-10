function agregarTarea(){
    let nuevaTareaTexta = document.getElementById("nuevaTarea").value;

    if(nuevaTareaTexta === ""){
        alert("Debes escribir algo");
        return;
    }
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexta + " ";

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = function(){
        nuevaTarea.remove();
    }
    nuevaTarea.appendChild(btnEliminar);
    document.getElementById("listaTareas").appendChild(nuevaTarea);
    document.getElementById("nuevaTarea").value = "";
}