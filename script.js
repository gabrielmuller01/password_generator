const passwordInput = document.querySelector("#generatedPassowrd");
const lenghtInput = document.querySelector("#characteresLenght");
const informLenght = document.querySelector('label[for="characteresLenght"]');
const generatedBtn = document.querySelector("#generatedBtn");

const checkLower = document.querySelector("#checkLower");
const checkUpper = document.querySelector("#checkUpper");
const checkNumber = document.querySelector("#checkNumber");
const checkSpecial = document.querySelector("#checkSpecial");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["¬" ,"(" , ";" , "$" , "#" , "@" , "!" ,"^"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

informLenght.innerHTML = lenghtInput.value;

lenghtInput.addEventListener("change", () =>{
    informLenght.innerHTML = lenghtInput.value
});

generatedBtn.addEventListener("click", ()=>{
    generatePassword(
        checkNumber.checked,
        checkSpecial.checked,
        checkLower.checked,
        checkUpper.checked,
        lenghtInput.value
    );
});

const generatePassword = (
    hasNumbers,
    hasSpecial,
    hasLowercase,
    hasUppercase,
    lenght
) => {
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSpecial ? special : []),
        ...(hasLowercase ? LowercaseCaracters : []),
        ...(hasUppercase ? UppercaseCaracters : []),
    ];

    if(newArray.lenght === 0) return;

    let password = "";

    for(let i = 0; i < lenght; i++){
        const randomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex]
    };

    passwordInput.value = password;
    
};
