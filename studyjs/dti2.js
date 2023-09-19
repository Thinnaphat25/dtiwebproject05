//Array เป็น Data Structure
//ที่ประกอบด้วยข้อมูลหลายๆ ข้อมูล
//ที่เป็นข้อมูลประเภทเดียวกัน

// Array เอามาใช้กับ ภาษาโปรแกรม ในเรื่องของVariable(ตัวแปร)

// ตัวแปร (variable) มีหน้าที่เก็บข้อมูลการเอาตัวแปรไปใช้งาน คือกำหนดค่าให้มันใหม่ หรือ เอาค่าที่มันเก็บมาใช้

let x = 10;
const y = 20;
//indexnumber 0   1   2   3   4
let data1 = [10, 20, 30, 10, 40];
let data2 = ["hi", "hey", "hoo"];

console.log(x)
x = 100
console.log(x)
console.log(y)
// y = 200 error เพราะเป็น const คือ ค่าคงที่เป็นค่าที่ห้ามเปลียน
console.log(data1[2])
console.log(data2[1])
data2[1] = 'hello'
console.log(data2[1])
console.log(data2)
data2.push('wow')
console.log(data2)
data2.pop()
data2.pop()
console.log(data2)
// ---------------------------
let data3 = [10, 20 , 'AAA' ,50.55]
console.log(`Data 3 มีทั้งหมด ${data3.length} ตัว`)
console.log(data3[2])