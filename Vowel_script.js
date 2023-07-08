let myform = document.getElementById('myform');
let myinp = document.getElementById('inp');
let myol = document.getElementById('myol');
const vowels = ["a", "e", "i", "o", "u"]
function countVowel(str) {
    console.log('worked')
    let count = 0;
    for (let letter of str) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}

myform.addEventListener('submit', function vowelFun(event) {
    event.preventDefault();
    if (myinp.value.trim() === '') {
        return;
    }
    else {
        let li = document.createElement("li")
        let char = countVowel(myinp.value);
        li.innerHTML = "Total Vowel of text is : " + char + "<hr>";

        //remove privious list

        for(let child of myol.children){
            myol.removeChild(child)
        }

        myol.appendChild(li)
        myinp.value = '';
    }
});
