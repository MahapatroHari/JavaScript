// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let lst = document.querySelector("ol");


// btn.addEventListener("click", function () {
//     let item = document.createElement("li");
//     item.innerText = inp.value;


//     let dbtn = document.createElement("button");
//     dbtn.innerText = "delete";
//     dbtn.classList.add("delete");


    
//     item.appendChild(dbtn);
//     lst.appendChild(item)
//     inp.value = "";
// });


// let dltBtns = document.querySelectorAll(".delete");
// for(item of dltBtns) {
//     item.addEventListener("click", function () {

//         console.log("h");
        
//     });
// }







let inp = document.querySelector("input");
let btn = document.querySelector("button");
let lst = document.querySelector("ul");

btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.append(inp.value);

    let dbtn = document.createElement("button");
    dbtn.innerText = "Done";
    dbtn.classList.add("delete");

    item.appendChild(dbtn);
    lst.appendChild(item)
    inp.value = "";

    // Add event listener to the newly created delete button
    dbtn.addEventListener("click", function () {
        console.log("Item deleted");
        this.parentNode.remove(); // Removes the parent li element
    });
});



