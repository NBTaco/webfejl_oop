function fun(param){
    console.log(param.nev)
}

function funa(){
    console.log(this.nev)
}

const funb = function(param){
    console.log(param.nev)
}

const func = (param) => {
    console.log(param.nev)
}

const obj = {
    funA:(param) => {
        console.log(param.nev)
    },

    funB:(param) => {
        console.log(param.eletkor)
    }
}

const alma = fun
const korte = funa.bind({nev: "lajos"})

fun({nev: "cirmi"})
alma({nev: "nandi"})

korte()

funb({nev: "mate"})

func({nev: "michello"})

obj.funA({nev: "mark"})
obj.funB({eletkor: 19})

