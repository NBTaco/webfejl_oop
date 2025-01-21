class ArrayList {
    /**
     * @type {Number}
     */
    #aktualishossz

    /**
     * 
     */
    #state

    get Count() {
        return this.#aktualishossz
    }

    constructor(){
        this.#aktualishossz = 0
        this.#state = {}
    }

    Add(element) {
        const index = this.#aktualishossz
        this.#state[index] = element

        Object.defineProperty(this, index, {
            get: function(){
                return this.#state[index]
            },
            set: function(value){
                this.#state[index] = value
            }
        })

        this.#aktualishossz++
    }

    Clear(){
        this.#aktualishossz = 0
        this.#state = {}

        for(let i in this){
            delete this[i]
        }
    }

    
    Contains(element){
        for(let i = 0; i < this.#aktualishossz; i++){
            if(this.#state[i] == element){
                return true
            }
        }
        return false
    }
}

const lista = new ArrayList()
lista.Add('asd1')
console.log(lista.Contains("asd1"))

lista.Add('asd2')
console.log(lista.Contains("asd2"))

const asd3 = {nev: "asd3"}
lista.Add(asd3)
console.log(lista.Contains(asd3))

const asd4 = {nev: "asd4"}
console.log(lista.Contains(asd4))

console.log(lista)

lista.Clear()

