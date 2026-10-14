//function คือ การทำงานหนึ่งๆ จะไม่ทำงานหากไม่ถูกเรียกใช้
 
//pameter คือ ตัวแปรประเภทหนึ่งเขียนอยู่ในวงเล็บหลังชื่อฟังก์ชัน
//return คือ คำสั่งให้คืนค่ากลับไปให้กับตัวเรียกใช้ฟังก์ชัน ที่เขียนอยู่ใน { } ของฟังก์ชัน
 
//1. no parameter no return
function showHi( ){
    console.log("Hi")
    console.log("555");
}
 
//2. have parameters no return
function sumNumber(n1 , n2 , n3){
    console.log(`${n1} + ${n2} + ${n3} = ${n1+n2+n3}`)
    console.log(555);
}
 
 
//3. no parameter has return
function showWow( ){
    console.log("เธอสบายดีไหม....");
    return "Wow wow wow"
}
 
 
//4. have parameters has return
function showSong(songName){
    return `${songName} นายแน่มาก ^o^`
}
 
// เรียกใช้ฟังก์ชัน call function
showHi()
showHi()
sumNumber(10,20,10) //ข้อมูลที่ส่งพารามิเตอร์เรียกว่า อาร์กิวเมนต์
 
let result = showWow()
console.log(result)
 
console.log( showSong('เน่เน่') );