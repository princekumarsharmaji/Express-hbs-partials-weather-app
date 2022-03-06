const submitBtn =   document.getElementById("submitBtn");

const getInfo = (e) => {
     e.preventDefault();
     alert("hiii");
}

submitBtn.addEventListener('click',getInfo);