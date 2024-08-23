//B TASK
function countDigits(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (!isNaN(str[i]) && str[i] !== ' ') {
                count++;
            }
        }
        return count;
    }
    
    // Example usage:
    let result = countDigits("ad2a54y79wet0sfgb9");
    console.log(result); 
    



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




