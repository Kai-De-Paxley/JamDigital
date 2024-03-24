const jamDigital = () => {

    // A.hanya menampilkan tanggal saja
    //           date.getTime();
    // B.hanya menampilkan tahun saja
    //          date.getFullYear();
    // C.hanya menampilkan indexBulan saja
    //          date.getMonth();
    // D.hanya menampilkan indexHari saja
    //          date.getDay();
    // E.hanya menampilkan jam saja
    //          date.getHours();
    // F.hanya menampilkan menit saja
    //          data.getMinute();
    // G.hanya menampilkan detik saja
    //          data.getSeconds();
    // H.hanya menampilkan milidetik saja
    //          data.getMiliSeconds();
    var now = new Date();
    let jam = now.getHours();
    var menit = now.getMinutes();
    let detik = now.getSeconds();
    let ampm = jam >= 12 ? 'PM' : 'AM'; 
    // Artinya jam itu kondisinya dan jika true(lebih atau sama dengan 12) maka 'PM'(ini if)  jika dibawah 12 maka 'AM'(ini else)

    jam = jam % 12;
    jam = jam ? jam : 12;

    document.getElementById('jam').innerText = jam < 10 ? '0' + jam : jam;
    document.getElementById('menit').innerText = menit < 10 ? '0' + menit : menit;
    document.getElementById('detik').innerText = detik < 10 ? '0' + detik : detik;
    document.getElementById('ampm').innerText = ampm < 10 ? '0' + ampm : ampm;
}

setInterval(jamDigital)
// pertanyaan untuk project ini 
// 1. Apa kegunaan persen,tanda tanya, titik 2, dan tambah

// jawaban
// 1.persern adalah operator untuk melakukan perbandingan seperti if else contoh sintaxnya
// condisi ? IF : ELSE

// ........kondisi menggunakan if else statement
// const isRed = true
// if(isRed){
//   console.log('red')
// }else{
//   console.log('not red')
// }
// ........kondisi menggunakan ternary operator
// const isRed = true
// isRed ? console.log('red') : console.log('not red')

var jumlahkita = 12;
jumlahkita += 3;
// ini artinya jumlahkita = jumlahkita(yang var) + 3

console.log(jumlahkita)


let date1=new Date();
let indexHari=date1.getMonth();
let bulan=["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oketober", "november", "desember"];

console.log([indexHari])

// // TODO 1

// class ValidationError extends Error{

//     constructor(message){

//        super(message);

//        this.name = "ValidationError";

//    }

// }



// // TODO 2

// function validateNumberInput(a, b, c) {

//     if (typeof a !== 'number'){

//        throw new ValidationError ("Argumen pertama harus number"); 

//    } else if (typeof b !== 'number'){

//        throw new ValidationError ("Argumen kedua harus number"); 

//    } else if (typeof c !== 'number'){

//        throw new ValidationError ("Argumen ketiga harus number"); 

//    }

// }
// const detectTriangle = (a, b, c) => {

//  // TODO 3

//  try {

//    validateNumberInput(a, b, c);

//  } catch (error) {

//    if (error instanceof ValidationError) {

//     return(error.message);

//    } return(error.message);

//  }

//  if (a === b && b === c) {

//    return 'Segitiga sama sisi';

//  }
//  if (a === b || a === c || b === c) {

//    return 'Segitiga sama kaki';

//  }
//  return 'Segitiga sembarang';

// };


// export function generatesPrimes(maximum) {
//   const MAX_PRIME = 1000000;
    
//   const primes = [];
    
//   while (primes.length < maximum) {
//     const candidate = random(MAX_PRIME);
    
//     if (isPrime(candidate)) {
//       primes.push(candidate);
//     }
//   }
    
//   return primes;
// }


console.log('Hai kai');
                      // argumrn prtama                            argumen kedua
setTimeout(() => { console.log('terimakasih kai! jangan lupa makan'); }, 3000)

console.log('ada perlu apa kai')

// Argumen pertama merupakan sebuah fungsi yang akan dipanggil secara terjadwal dan asynchronous.
// Argumen kedua merupakan delay waktu dalam satuan milisecond yang menentukan delay dari pemanggilan fungsi pada argumen pertama.


function getUsers(callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
 
    callback(users);
  }, 3000);
}
 
function usersCallback(users) {
  console.log(users);
}
 
getUsers(usersCallback);

function getUsers(isOffline) {
    // return a promise object
    return new Promise((resolve, reject) => {
  
      // simulate network delay
      setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
      
        if (isOffline) {
          reject(new Error('cannot retrieve users due offline'));
          return;
        }
  
        resolve(users);
      }, 3000);
    });
  }
  
  getUsers(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));



async function getTollAccess() {
  try {
  	const card = await buyTollRoadCard(25);
    console.log('Bought toll road card:', card)
    const cardWithBalance = await topUpBalance(card, 10);
    console.log('Topped up balance:', cardWithBalance)
    await useTollRoad (cardWithBalance);

    return ;
  } catch (error) {
    console.log(error.message);
  }
} 

getTollAccess(20)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));


  for(let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


for(let i = 1; i < 10; i += 2) {
  console.log(i);
}

const stock = 0;
const milkNeeded = 25;

if (stock > milkNeeded) {
  stock = stock - milkNeeded;
  console.log('Processing your order...');
} else {
  console.log('Out of Stock!');
}

console.log('Thank you');

const firstString = "Hello";
const secondString = "JavaScript";

console.log(firstString + secondString);

const capital = {
  "Jakarta": "Indonesia",
  "London": "England",
  "Tokyo": "Japan"
}
capital["New Delhi"] = "Indonesia";

console.log(capital["Indonesia"]);

class Car { }
const car = new Car();
console.log(typeof Car);

let myString = "";

try {
    myString += "a";
    throw Error();
} catch(e) {
    myString += "b";
} finally {
    myString += "c";
    throw Error();
    myString += "d";
}

console.log(myString);
