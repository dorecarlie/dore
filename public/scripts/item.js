const itemForm = document.getElementById("itemForm");

if (itemForm) {
    itemForm.addEventListener("submit", createItem);
}

async function createItem(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user || !user.user_id) {
        alert("You must be logged in to add an item!");
        window.location.href = "login.html";
        return;
    }

    const item = {
        user_id: user.user_id, 
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        size: document.getElementById("size").value,
        item_condition: document.getElementById("condition").value,
        price: document.getElementById("price").value
    };

    console.log("Attempting to create item:", item);

    try {
        
        const response = await fetch('http://localhost:3500/item/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Item successfully added to your inventory!");
            itemForm.reset(); 
        } else {
            alert("Error: " + data.message);
        }
    } catch (err) {
        console.error("Fetch Error:", err);
        alert("Could not connect to the server.");
    }
}


const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem('user');
        window.location.href = "login.html";
    });
}