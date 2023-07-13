const input = document.querySelector("input"); // esto es el input
const addBtn = document.getElementById("addElement"); //Esto es el botón de agregar
const ul = document.querySelector("ul"); //Acá selecciono la UL

addBtn.addEventListener("click", function () {
    const text = input.value;
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = text;
    li.classList.add("resultado");

    if (text != '') {
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = "";

    }
})


function addDeleteBtn() {
    const delBtn = document.createElement("button");

    delBtn.textContent = "X";
    delBtn.classList.add("deletebtn");

    delBtn.addEventListener("click", function (e) {
        const item = e.target.parentElement;

        ul.removeChild(item);
    });
    return delBtn;
}