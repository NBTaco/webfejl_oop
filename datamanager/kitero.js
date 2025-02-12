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

obj.calculate3 = function(elso, masodik, fuggveny){ //calculate3 letrehozasa bementi par: elso, masodik, fuggveny
    return fuggveny(elso, masodik) //a fugveny paraméter fuggvenykent ter vissza az elso es a masodik paraméterrel 
}

const d = obj.calculate3(10, 15, (elso, masodik) => elso * masodik) // a calaculate 3-at mghivjuk, most osszeszorozza a ket szamot

console.log(d) //logoljuk d-t

