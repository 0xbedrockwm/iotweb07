// Operator
// Arithmetic Operators + - * / % ** ++ --
console.log(5 + 2); // Addition
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2);
console.log('------------------------------------------- ');
// 2. Comparison Operators == != === !== > < >= <= ผลลัพธ์เป็น true หรือ false
// เปรียบเทียบได้ทั้งตัวเลขและตัวอักษร
//ตัวเลขน้อยกว่าตัวอักษร ,ตัวใหญ่่น้อยกว่าตัวเล็ก ,ตัวมาก่อนน้อยกว่า ตัวอักษรที่มาที่หลัง
console.log("Sombat" < "Somjai"); // true
console.log("sau" >= "SAU"); // true
console.log("Io5T" <= "I37");   // false
console.log("5" == 5); // true
console.log("5" === 5); // false
console.log('------------------------------------------- ');
// 3. Logical Operators && || ! ผลลัพธ์เป็น true หรือ false
console.log(true && true); // true
console.log(true && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(!true); // false
console.log(!false); // true
console.log('------------------------------------------- ');
// 4. increment and decrement Operators ++ --
let a = 10, b = 100;
console.log(a++); // 10
console.log(++a); // 11
console.log(b--); // 100
console.log(--b); // 99
//5. ternary Operator ? : ผลลัพธ์เป็น true หรือ false __? __ : __
// ตรวจสอบหน้าเคร่ื่องหมาย ? ถ้าเป็น true ให้ทำสิ่งที่อยู่หลัง ? ถ้าเป็น false ให้ทำสิ่งที่อยู่หลัง 
let score = 80;
console.log(score >= 50 ? "ผ่าน" : "ไม่ผ่าน"); 
//6. Assignment Operators = += -= *= /= %= **=
//7. Nullish Coalescing Operator && ให้ 3* เพราะกลัวสับสนกับ Logical Operators 
let x = 30;
let y = null;
console.log(x && "wow");
console.log(y && "Hi.......");