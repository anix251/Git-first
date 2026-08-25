const bookData = [
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbNoLr7fZfpkZzQxJxZPVbJ5vvTE5MWmGQL7apgjMnA&s=10",price:465},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXPbTQpwFpUdauVXlz2D1kAtpc_l3pfHimsUBgbDIGQ&s=10",price:200},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rd5bCcGPVCYkbpbNs6SYtP69vhtvKtHIwWrFziBU_g&s=10",price:520},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmccMjBTcG_KJfEIMaUGV_kJqMtIVRFi2XCMUnRWv4oQ&s=10",price:388},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sNCwWqFuNw1Y6J8dwVsgoeqZpCjYn0-35sYm6YCtWA&s=10",price:1020},
     {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbNoLr7fZfpkZzQxJxZPVbJ5vvTE5MWmGQL7apgjMnA&s=10",price:465},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXPbTQpwFpUdauVXlz2D1kAtpc_l3pfHimsUBgbDIGQ&s=10",price:200},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rd5bCcGPVCYkbpbNs6SYtP69vhtvKtHIwWrFziBU_g&s=10",price:520},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmccMjBTcG_KJfEIMaUGV_kJqMtIVRFi2XCMUnRWv4oQ&s=10",price:388},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sNCwWqFuNw1Y6J8dwVsgoeqZpCjYn0-35sYm6YCtWA&s=10",price:1020},
     {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbNoLr7fZfpkZzQxJxZPVbJ5vvTE5MWmGQL7apgjMnA&s=10",price:465},
         {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmccMjBTcG_KJfEIMaUGV_kJqMtIVRFi2XCMUnRWv4oQ&s=10",price:388},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sNCwWqFuNw1Y6J8dwVsgoeqZpCjYn0-35sYm6YCtWA&s=10",price:1020},
     {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbNoLr7fZfpkZzQxJxZPVbJ5vvTE5MWmGQL7apgjMnA&s=10",price:465},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXPbTQpwFpUdauVXlz2D1kAtpc_l3pfHimsUBgbDIGQ&s=10",price:200},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rd5bCcGPVCYkbpbNs6SYtP69vhtvKtHIwWrFziBU_g&s=10",price:520},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmccMjBTcG_KJfEIMaUGV_kJqMtIVRFi2XCMUnRWv4oQ&s=10",price:388},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sNCwWqFuNw1Y6J8dwVsgoeqZpCjYn0-35sYm6YCtWA&s=10",price:1020},
     {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbNoLr7fZfpkZzQxJxZPVbJ5vvTE5MWmGQL7apgjMnA&s=10",price:465}
    
    
];

function Book(props) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");

    const image = document.createElement("img");
    image.setAttribute(
        "src",
        props.image || "https://placehold.co/100x100?text=Book"
    );
    image.setAttribute("alt", "Book cover");
    image.setAttribute("width", "100");
    image.setAttribute("height", "100");

    const h2 = document.createElement("h2");
    h2.innerText = "Price: ₹" + props.price;

    const button = document.createElement("button");
    button.innerText = "Add to Cart";

    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(button);

    return div;
    
}

const bookstore = bookData.map((book) => Book(book));

const parent = document.getElementById("root");
bookstore.forEach((book) => parent.appendChild(book));

