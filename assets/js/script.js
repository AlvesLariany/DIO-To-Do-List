
const button=document.querySelector("button")
function adicionarTarefa() {
    const input = document.getElementById("input");
    const lista = document.getElementById("lista");

    if (input.value.trim() === "") {
        alert("Digite uma tarefa");
       
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const texto = document.createElement("span");
    texto.textContent = input.value;

    li.appendChild(checkbox);
    li.appendChild(texto);
    lista.appendChild(li);

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            li.classList.add("checked");
        } else {
            li.classList.remove("checked");
        }
    });

    input.value = "";
}

button.addEventListener("click", adicionarTarefa);