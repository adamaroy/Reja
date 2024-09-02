//F TASK
function findDoublers(str) {
   
    const findLetter = new Set();



    for (let i = 0; i < str.length; i++) {
       
        if (findLetter.has(str[i])) {
            return true;
        }
       
        findLetter.add(str[i]);
    }

   
    return false;
}



console.log(findDoublers("hello")); 

console.log(findDoublers("world")); 

console.log(findDoublers("MITSILA")); 






//ETASK

// function getReverse(str) {
    
//     return str.split('').reverse().join('');
// }

// const inputString = "adam";
// const reversedString = getReverse(inputString);

// console.log(reversedString); 


//D TASK 
// class Shop {
//     constructor(bread, spaghetti, cocaCola) {
//         this.bread = bread;
//         this.spaghetti = spaghetti;
//         this.cocaCola = cocaCola;
//     }

//     logAction(action) {
//         const now = new Date();
//         const time = now.toTimeString().split(' ')[0]; // Get the time in HH:MM:SS format
//         console.log(`Action: ${action} at ${time}`);
//     }

//     residue() {
//         this.logAction('Checking residue');
//         return `Current stock: ${this.bread} bread, ${this.spaghetti} spaghetti, and ${this.cocaCola} Coca-Cola!`;
//     }

//     selling(product, quantity) {
//         this.logAction(`Selling ${quantity} ${product}`);

//         switch (product.toLowerCase()) {
//             case 'bread':
//                 if (this.bread >= quantity) {
//                     this.bread -= quantity;
//                 } else {
//                     console.log('Not enough bread in stock!');
//                 }
//                 break;
//             case 'spaghetti':
//                 if (this.spaghetti >= quantity) {
//                     this.spaghetti -= quantity;
//                 } else {
//                     console.log('Not enough spaghetti in stock!');
//                 }
//                 break;
//             case 'coca cola':
//             case 'cola':
//                 if (this.cocaCola >= quantity) {
//                     this.cocaCola -= quantity;
//                 } else {
//                     console.log('Not enough Coca-Cola in stock!');
//                 }
//                 break;
//             default:
//                 console.log(`Product ${product} not available.`);
//         }
//     }

//     receive(product, quantity) {
//         this.logAction(`Receiving ${quantity} ${product}`);

//         switch (product.toLowerCase()) {
//             case 'bread':
//                 this.bread += quantity;
//                 break;
//             case 'spaghetti':
//                 this.spaghetti += quantity;
//                 break;
//             case 'coca cola':
//             case 'cola':
//                 this.cocaCola += quantity;
//                 break;
//             default:
//                 console.log(`Product ${product} not recognized.`);
//         }
//     }
// }



// const shop = new Shop(4, 5, 2);

// console.log(shop.residue());
// shop.selling('bread', 4);    

// shop.receive('cola', 2);     

// console.log(shop.residue()); 



//C TASK
// function haveSameLetters(str1, str2) {
   
//     const sortString = str => str.split('').sort().join('');

   
//     return sortString(str1) === sortString(str2);
// }


// const result = haveSameLetters("mitgroup", "gmtiprou");
// console.log(result);  



//B TASK
// function countDigits(str) {
//         let count = 0;
//         for (let i = 0; i < str.length; i++) {
//             if (!isNaN(str[i]) && str[i] !== ' ') {
//                 count++;
//             }
//         }
//         return count;
//     }
    
//     // Example usage:
//     let result = countDigits("ad2a54y79wet0sfgb9");
//     console.log(result); 
    



// A TASK
// function countLetterOccurrences(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }


// const letterNumber = countLetterOccurrences("a", "adam");
// console.log("letter num:",letterNumber);  




// console.log("Jack Ma maslahatlari");

// const list = [
//     "yaxshi talaba boling!",  // 0-20
//     "Togri boshliq tanlang!", // 20-30
//     "Ozingizga ishlashni boshlang!", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga invest qiling!", //50-60
//     "endi dam oling!" //60~
// ];
// //SYNCHRONOUS FUNCTION
// //CALL BACK
// function maslahatBering(a, callback) {
//     if (typeof a !== 'number') callback("Insert number!", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function() {
//         // setTimeout(function() {
//             callback(null,list[5]);
//         }, 5000);
        
//     }
// }
// console.log('passed here 0');

// maslahatBering(85, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else{
//     console.log('javob:', data);
//     }

// });
// console.log('passed here 1');


//ASYNCHRONOUS FUNCTION


// async function maslahatBering(a) {
//     if (typeof a !== 'number') throw new Error("Insert number!");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {

//         return new Promise((resolve,reject)=>{
//             // setInterval(()=>{
//             setTimeout(()=>{
//                 resolve(list[5]);
//             },1000);
//         });
        // return list[5];

        // setTimeout(function() {
        //     return list[5];
        // }, 5000);
        
//     }
// }

                        // then catch methodlari! //CALL VIA THEN CATCH

// console.log('passed here 0');

// maslahatBering(25).then(data => {
//     console.log('javob:',data);
// }).catch(err => {
//     console.log("ERROR",err);
    
// })
// console.log('passed here 1');

                        //CALL VIA ASYNC/AWAIT

// async function run(){
//     let javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
//     javob = await maslahatBering(51);
//     console.log(javob);
//     javob = await maslahatBering(20);
//     console.log(javob);
//  }

// run();



//SAVOL NEGA 0 va 1 ni oqigandan keyin javobni olyapti?Tushunmadim!

//ASYNCHRONOUS FUNCTION da avval synchronous function ishga tyushib bolgan asynchronous function natijalari ishlay boshlaydi!
//SHU sabab EVENT LOOP orqali THREAD POOLGA TASHLAB YUBORADI//SINGLE THREEDNI BAND QILMAYDI!!

//SYNCHRONOUS FUNCTION: filesystem,readfile ...
//Sync = Synchronous = Blocking I/O model
//Async = Asynchronous = Non-blocking I/O model




