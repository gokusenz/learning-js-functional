const animals = ['Ant', 'Bat', 'Cat', 'Dog']
    // ใน Method forEach จะทำการรับ Function เพื่อทำหน้าที่เป็นตัวเพื่อให้ ค่าแต่ละตัว
    // มาผ่านเพื่อให้ได้ผลลัพธ์ตาม Function ที่เราต้องการ (ดูรูปด้านล่างเพิ่มเติม)
animals.forEach((animal) => {
        console.log(animal)
    })
    // ผลลัพธ์จะได้ "Ant" "Bat" "Cat" "Dog"


const animals = ['Ant', 'Bat', 'Cat', 'Dog']
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}
// ผลลัพธ์ได้ดังนี้ "Ant" "Bat" "Cat" "Dog"