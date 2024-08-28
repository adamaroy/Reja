


console.log("FrontEnd JS ishga tushdi");

function itemTemplate(data) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                <span class="item-text">${data.reja}</span>
                <div>
                    <button data-id="${data._id}" class="edit-me btn btn-secondary btn-sm mr-1">Ozgartirish</button>
                    <button data-id="${data._id}" class="delete-me btn btn-danger btn-sm">Ochirish</button>
                </div>
            </li>`;
}


let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
    // STOP: traditional API
    console.log("Form submission detected."); // Debug log
    e.preventDefault();
    
    // WORK: REST API
    console.log("Sending POST request to /create-item with data:", createField.value); // Debug log
    axios
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            console.log("Response from /create-item:", response.data); // Debug log
            document
                .getElementById("item-list")
                .insertAdjacentHTML("beforeend", 
                itemTemplate(response.data));
            createField.value = "",
            createField.focus();
            // document.location.reload(); //BUG TEMPORARELY FIXED
        })
        .catch((err) => {
            console.error("Error in /create-item:", err); // Debug log
            console.log("Please try again");
        });
});

document.addEventListener("click", function (e) {
    console.log("Click event detected on:", e.target); // Debug log

    // delete operation
    if (e.target.classList.contains("delete-me")) {
        console.log("Delete button clicked."); // Debug log
        if (confirm("Aniq ochirmoqchimisiz?")) {
            const id = e.target.getAttribute("data-id");
            console.log("Sending DELETE request to /delete-item with id:", id); // Debug log
            axios
                .post("/delete-item", { id: id })
                .then((response) => {
                    console.log("Response from /delete-item:", response.data); // Debug log
                    e.target.parentElement.parentElement.remove();
                })
                .catch((err) => {
                    console.error("Error in /delete-item:", err); // Debug log
                    console.log("Please try again");
                });
        }
    }

    // edit operation
    if (e.target.classList.contains("edit-me")) {
        console.log("Edit button clicked."); // Debug log
        let userInput = prompt(
            "O'zgartitish kiriting",
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
        );
        console.log("User input for edit:", userInput); // Debug log
        if (userInput) {
            const id = e.target.getAttribute("data-id");
            console.log("Sending POST request to /edit-item with id:", id, "and new input:", userInput); // Debug log
            axios
                .post("/edit-item", {
                    id: id,
                    new_input: userInput,
                })
                .then(response => {
                    console.log("Response from /edit-item:", response.data); // Debug log
                    e.target.parentElement.parentElement.querySelector(
                        ".item-text"
                    ).innerHTML = userInput;
                })
                .catch((err) => {
                    console.error("Error in /edit-item:", err); // Debug log
                    console.log("Please try again");
                });
        }
    }
});


document.getElementById("clean-all").addEventListener("click", function() {
    axios.post("/delete-all", { delete_all: true })
        .then(response => {
            alert(response.data.state);
            document.location.reload();
        })
        .catch(err => { // Define err 
            console.error("Error in /delete-all:", err); // Debug log
        });
});
