const list = document.querySelector(".list")
console.log(list);
const btn = document.querySelector(".btn");
console.log(btn);
//Creo nuovo array dove verranno salvate le 10 rndm emails
const randomEmails = [];
//Richiamo funzione
myRandomEmails();
// console.log(randomEmails[2]);
// console.log(randomEmails)

// bonus
btn.addEventListener("click", function(){
    // console.log("son stato cliccata");
    myRandomEmails();
});
//Creo una funzione per non ripetere il codice nell'addEventListener
function myRandomEmails(){
    //faccio una stringa vuota in modo che ogni volta che clicclo sul bottone per generare altre 10 email, lui come prima cosa(prima del for) resetti la stringa contenuta dentro il nodo LIST a una stringa vuota
    list.innerHTML = "";
    //CICLO FOR PER GENERARE 10 EMAIL DIVERSE
    for(let i = 0; i < 10; i++){
    
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(resp =>{
            const email = resp.data.response
            // console.log(resp.data.response);
            randomEmails.push(email);
    
            //Creo una variabile stringa per aggiungere UN elemento in HTML
            const emailHTML = `
            <li>${email}</li>
            `;
            //Inserisco effettivamente la variabile stringa nella classe "list" che ho dato all' UL, perchè è dentro quest ultimo che andrà messo
            list.innerHTML += emailHTML
        });
    };
};






