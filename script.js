

function favouriteFood() {
    let favfood = document.forms["feedbackForm"]["favFoods"].value;
    let temp = "Your favourite food is "
    let textChange = temp.concat(" ",favfood)
    document.getElementById("testData").innerHTML = textChange;
    return false;
}