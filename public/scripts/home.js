const homeForm = document.getElementById("homeForm");

homeForm.addEventListener("submit", createPost);

function createPost(event){
    event.preventDefault(); 

    const image = document.getElementById("postImage").value;
    const brand = document.getElementById("brand").value;
    const price = document.getElementById("price").value;
    
    const post = {image: image, brand: brand, price: price};

    console.log("post object: ", post);

}