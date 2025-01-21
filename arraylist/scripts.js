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
}

const alma = {}
Object.defineProperty(alma, 'nev', {
    value: 'Ferenc',
    wriable: true
})

alma.nev = 'niagara'
console.log(alma)


const lista = new ArrayList()
lista.Add('asd1')
console.log(lista)

lista.Add('asd2')
console.log(lista)

lista.Add({new: 'asd3'})
console.log(lista)

console.log(lista[0])

