async function getAllDogs() {
    const data=await fetch("https://dog.ceo/api/breeds/image/random ");
    const dogs=await data.json();
    console.log(dogs);
}
getAllDogs();
