function add(a, b) { //function létrehozása két bemenő paraméter
    return a + b //összeadja
}

const obj = {} //ures objektum letrehoz

obj.calculate1 = add //beallitas add-ra

obj.calculate2 = function(fuggveny) { //calculate2 hozzáadása függvény a paramétere
    const elso = 15
    const masodik = 10
    return fuggveny(elso, masodik)  //a fgv parameterei elso es masodik, ezzel ter vissza
}

const a = obj.calculate2((elso, masodik) => elso + masodik) //a calculate 2 meghivjuk, osszeadas
const b = obj.calculate2((elso, masodik) => elso - masodik) //kivonassal
const c = obj.calculate1(10, 20) //calculate1 meghivasa ket szammal

console.log(a) //logolunjuk a-t
console.log(b) //logoljuk b-t
console.log(c) //logoljuk c-t