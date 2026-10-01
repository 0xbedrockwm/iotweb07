// Variable ตัวแปร 
// สร้างตัวแปรได้ 3 วิธี var, let, const
var dataA= 10 //เป็น Global Variable เปลี่ยนค่าได้ **เลี่ยงใช้ var เพราะเป็นตัวแปรแบบเก่า**
let dataB= 20 //เป็น Local Variable เปลี่ยนค่าได้ ใช้ได้เฉพาะใน {} นั้นๆ
const dataC= 30 //เป็น Local Variable ไม่สามารถเปลี่ยนค่าได้ ใช้ได้เฉพาะใน {} นั้นๆ

dataA = "Sombat"; //เปลี่ยนค่าได้
dataA = 20;
dataA = true;

// dataC = 300 Error ไม่สามารถเปลี่ยนค่าได้
dataB = 200; //เปลี่ยนค่าได้