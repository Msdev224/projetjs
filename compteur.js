const nbM = document.getElementById("nbM");
const nbC = document.getElementById("nbC");
const textarea = document.querySelector("textarea");

// console.log(nbM);
// console.log(nbC);
// console.log(textarea);
textarea.value = "";
textarea.addEventListener("keyup",(e)=>{
    if (e.target.value ==""){
        nbM.textContent = 0;
        nbC.textContent = 0;
    }else{
        
        nbM.textContent = words(e.target.value);
        nbC.textContent = char(e.target.value);
    }
});

const words = (text)=>{
    return text.replace(/[!.,:]/g,"").trim().split(' ').length;
}

const char = (text) => {
    return text.trim().length;
}