class ArrayList {
    /**
     * @type {Number}
     */
    #aktualishossz

    #state

    #arraytable

    get Count() {
        return this.#aktualishossz
    }

    constructor(arraytable = undefined){
        this.#aktualishossz = 0
        this.#state = {}
        this.#arraytable = arraytable
    }

    Add(element) {
        const index = this.#aktualishossz
        this.#state[index] = element

        Object.defineProperty(this, index, {
            get: () => {
                return this.#state[index]
            },
            set: (value) => {
                this.#state[index] = value
            }
        })

        this.#aktualishossz++
        if(this.#arraytable){
            this.#arraytable.addPersonRow(element)
        }
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

class TableHTMLArray 
extends HTMLElement{
    #tbody

    constructor(){
        super()
    }
    
    connectedCallback(){
        const table = document.createElement('table')
        this.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)

        this.#tbody = document.createElement('tbody')
        table.appendChild(this.#tbody)
    }

    /**
     * 
     * @param {{nev: String , eletkor: Number} } param 
     */
    addPersonRow(param){
        const tr = document.createElement('tr')
        this.#tbody.appendChild(tr)

        const td1 = document.createElement('td')
        const td2 = document.createElement('td')

        td1.innerHTML = param.nev
        td2.innerHTML = param.eletkor

        tr.appendChild(td1)
        tr.appendChild(td2)
    }
}

customElements.define('aray-table', TableHTMLArray)

const arraytable = new TableHTMLArray()

document.body.appendChild(arraytable)

arraytable.addPersonRow({nev: 'V' , eletkor: 10})
arraytable.addPersonRow({nev: 'A' , eletkor: 11})
arraytable.addPersonRow({nev: 'R' , eletkor: 12})
arraytable.addPersonRow({nev: 'G' , eletkor: 13})
arraytable.addPersonRow({nev: 'A' , eletkor: 14})
arraytable.addPersonRow({nev: ' ', eletkor: 15})
arraytable.addPersonRow({nev: 'M', eletkor: 16})
arraytable.addPersonRow({nev: 'Á', eletkor: 17})
arraytable.addPersonRow({nev: 'R', eletkor: 18})
arraytable.addPersonRow({nev: 'K', eletkor: 19})
arraytable.addPersonRow({nev: ' ', eletkor: 20})
arraytable.addPersonRow({nev: 'B', eletkor: 21})
arraytable.addPersonRow({nev: 'E', eletkor: 22})
arraytable.addPersonRow({nev: 'N ', eletkor: 23})
arraytable.addPersonRow({nev: 'C', eletkor: 24})
arraytable.addPersonRow({nev: 'E', eletkor: 25})

const arraytablelist = new ArrayList(arraytable)
const elem1 = {nev: ' ', eletkor: 26}
const elem2 = {nev: ' !', eletkor: 27}
arraytablelist.Add(elem1)
arraytablelist.Add(elem2)



const br = document.createElement('br')
document.body.appendChild(br)

const div = document.createElement('div')
document.body.appendChild(div)

const label1 = document.createElement('span')
label1.innerHTML = 'név: '
div.appendChild(label1)

const input1 = document.createElement('input')
input1.type = 'text'
input1.id = 'nev'
div.appendChild(input1)

const br1 = document.createElement('br')
div.appendChild(br1)

const label2 = document.createElement('span')
label2.innerHTML = 'életkor: '
div.appendChild(label2)

const input2 = document.createElement('input')
input2.type = 'number'
input2.id = 'eletkor'
div.appendChild(input2)

const br2 = document.createElement('br')
div.appendChild(br2)

const button = document.createElement('button')
button.innerHTML = 'hozzáadás'
div.appendChild(button)


button.addEventListener('click', function(e){
    e.preventDefault()

    const elso = document.getElementById('nev').value
    const masodik = document.getElementById('eletkor').value

    if(elso == "" || masodik == "")
        return
    
    const uj = {nev: elso, eletkor: masodik}

    arraytablelist.Add(uj)
})
