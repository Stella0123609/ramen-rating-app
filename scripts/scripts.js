const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];
 function handleClick(name, restaurant, rating, comment) {
    document.getElementById("ramen-detail").innerHTML = `
        <h2>${name}</h2>
        <p><strong>Restaurant:</strong> ${restaurant}</p>
        <p><strong>Rating:</strong> ⭐${rating}</p>
        <p><strong>Comment:</strong> ${comment}</p>
    `;
}
function addSubmitListener() {
    document.getElementById("new-ramen-form").addEventListener("submit", function(event) {
        event.preventDefault(); 
        
      
        const name = document.getElementById("name").value;
        const restaurant = document.getElementById("restaurant").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;
        const imageUrl = document.getElementById("image-url").value;

        
        const newRamen = document.createElement("img");
        newRamen.src = imageUrl;
        newRamen.alt = name;
        newRamen.style.width = "150px";
        newRamen.style.borderRadius = "10px";
        newRamen.style.cursor = "pointer";

       
        newRamen.addEventListener("click", function() {
            handleClick(name, restaurant, rating, comment);
        });
        document.getElementById("ramen-menu").appendChild(newRamen);

        
        this.reset();
    });
}

addSubmitListener();
function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);

