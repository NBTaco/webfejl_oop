function fun(param){
    console.log(param.nev)
}

function funa(){
    console.log(this.nev)
}

const alma = fun
const korte = funa.bind({nev: "lajos"})

fun({nev: "cirmi"})
alma({nev: "nandi"})

korte()