const campoA = document.querySelector("#campoA");
const campoB = document.querySelector("#campoB");
const success = document.querySelector(".success");
const fail = document.querySelector(".fail");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    if (campoB.value > campoA.value)
    {
        success.style.display = "Flex";
        fail.style.display = "none";
        campoA.value = '';
        campoB.value = '';
    }
    else{
        success.style.display = "none";
        fail.style.display = "Flex";
        campoA.value = '';
        campoB.value = '';
    }
})