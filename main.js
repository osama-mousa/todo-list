let todoList = JSON.parse(localStorage.getItem('todos')) || [];
const input = document.getElementById('input');
const ul = document.getElementById('todos');

// تحميل المهام المحفوظة عند تحميل الصفحة
function loadTodos() {
    todoList.forEach(todo => {
        const li = createTodoElement(todo);
        ul.appendChild(li);
    });
}

// إنشاء عنصر li جديد
function createTodoElement(todoText) {
    const li = document.createElement('li');
    li.innerText = todoText;

    // إضافة حدث لحذف المهمة
    li.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        if (confirm("Are you sure to delete the Todo?")) {
            ul.removeChild(li);
            removeTodoFromStorage(todoText);
        }
        input.focus();
    });

    // إضافة حدث لإكمال المهمة
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
        input.focus();
    });

    return li;
}

// إضافة مهمة جديدة
input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && input.value !== "") {
        const todoText = input.value;
        todoList.push(todoText);
        localStorage.setItem('todos', JSON.stringify(todoList));

        const li = createTodoElement(todoText);
        ul.appendChild(li);
        input.value = "";
    }
});

// حذف مهمة من localStorage
function removeTodoFromStorage(todoText) {
    todoList = todoList.filter(todo => todo !== todoText);
    localStorage.setItem('todos', JSON.stringify(todoList));
}

// تحميل المهام عند بدء التشغيل
loadTodos();
input.focus();













----------------------------------------------
// last code


// let todoList = [];
// const input = document.getElementById(`input`);
// input.focus();
// input.addEventListener("keyup", function(event) {
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13 && input.value !== "") {
//         todoList.push(input.value);
//         console.log(todoList);
//         const ul = document.getElementById("todos");
//         const li = document.createElement("li");
//         li.innerText = input.value;
//         li.addEventListener("contextmenu", function(ev) {
//             ev.preventDefault()
//             if (confirm("Are you sure to delete the Todo?")) {
//                 ul.removeChild(li);
//             }
//             input.focus();
//         })
//         li.addEventListener("click", function(eve) {
//             if (li.classList.value == "completed") {
//                 li.classList.value = "";
//             } else {
//                 li.classList.add("completed");
//             }
//             input.focus();
//         })
//         ul.appendChild(li);
//         input.value = "";
//     }

// });






















//___________________________________________________________________

// li.addEventListener("contextmenu",function(ev){
//   if(ev.preventDefault()){
//     li.value="";
//   }
// })


//__________________________________________________________________
// let text, fLen, i;

// fLen = todoList.length;
// text = "<ul>";
// for (i = 0; i < fLen; i++) {
//     text += "<li>" + todoList[i] + "</li>";
// }
//__________________________________________________________________

//_________________________________________________________________

// document.getElementById(`todos`).innerHTML=todoList;


//__________________________________________________________________
// first attempt
// $('#here').html(todoList.join(' '));

// // second attempt
// $(document).ready(function() {
//     var testList=$("<ul></ul>");
//     for (var i=0;i<todoList.length; i++) {
//         $(testList).append($("<li></li>").text(todoList[i]));
//     }
//     $('#here').html(testList);
//     songList="";
// }); 
//_______________________________________________________________



// const btn = document.getElementById('btn')
// btn.onclick = () => {takeAvalue()}

/*var items = [];

function guardarNumeros() {
boxvalue = document.getElementById('box').value;
items.push(boxvalue);  
console.log(items);
} */




// document.getElementById("todoInbut").value = todoList[""];

//todoList=document.getElementById("inbut").outerHTML;
// function todoAdd() {
//     document.getElementById("todos").innerHTML=(todoList[``]);
// }
// -------------------------------------
// function myFunction(){
//     if(inputLength() > 0){
//     let li = document.createElement("li");
//     li.setAttribute("id","myLi");
//     var teks = document.createTextNode(input.value);

//       // New code here:
//     const myUL = document.getElementById("myUL")

//     const deleteButton = document.createElement('button')
//     deleteButton.innerText = 'Delete'

//       // listens for clicks and then deletes the `li`
//     deleteButton.addEventListener('click', event => myUL.removeChild(li))
//       // End of new code

//     li.appendChild(deleteButton)
//     myUL.appendChild(li);
//     li.appendChild(teks);
//     input.value="";
//     }
// }
//------------------------------------------
// End of new code

// (function(){
//     var ul = document.createElement('ul');
//     ul.setAttribute('id','proList');

//     productList = [`one`]

//     document.getElementById('renderList').appendChild(ul);
//     productList.forEach(renderProductList);

//     function renderProductList(element, index, arr) {
//         var li = document.createElement('li');
//         li.setAttribute('class','item');

//         ul.appendChild(li);
//         li.innerHTML=li.innerHTML + element;
//     }
// })();
