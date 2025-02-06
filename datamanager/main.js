/**
 * @typedef {{nev: String, eletkor: Number} Person}
 * @callback UpdateCallback 
 * @param {Person[]} persons
 * @returns {void}
 */
class Datamanager{
    /** 
     *  @type {Person[]}
     */
    #array

    /**
     * @type {UpdateCallback}
     */
    #updatecallback

    /**
     * @param {Person[]} array 
     */
    constructor(array = []){
        this.#array = array 
        this.#updatecallback = () => {}
    }

    /**
     * @param {UpdateCallback} callback 
     */
    setupdatecallback(callback){
        this.#updatecallback = callback
        this.#updatecallback(this.#array)
    }

    /**
     * 
     * @param {Person} elem 
     */
    add(elem){
        this.#array.push(elem)

        this.#updatecallback(this.#array)
    }

    /**
     * 
     * @param {String} keresett 
     */
    filtername(nev){
        const gyujtottek = []

        for(let i = 0; i < this.#array.length; i++){
            if(this.#array[i].nev.includes(nev)){
                gyujtottek.push(this.#array[i])
            }
        }

        this.#updatecallback(gyujtottek)
    }

    /**
     * 
     * @param {Number} eletkor 
     */
    filterage(eletkor){
        const gyujtottek = []

        for(let i = 0; i < this.#array.length; i++){
            if(this.#array[i].eletkor === eletkor){
                gyujtottek.push(this.#array[i])
            }
        }

        this.#updatecallback(gyujtottek)
    }
}

class DataTable{
    constructor(datamanager){
        const table = document.createElement('table')
        document.body.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)

        this.#tbody = document.createElement('tbody')
        table.appendChild(this.#tbody)

        datamanager.setupdatecallback(persons => {
            this.#renderTable(persons)
        })
    }

    /**
         * 
         * @param {HTMLTableSectionElement}
         */
    #tbody

    /**
    * 
    * @param {Person[]} persons 
    */
    #renderTable(persons){
        this.#tbody.innerHTML = ''

        for (let i = 0; i < persons.length; i++){
            const tr = document.createElement('tr')
            this.#tbody.appendChild(tr)

            const td = document.createElement('td')
            td.innerHTML = persons[i].nev
            tr.appendChild(td)

            const td2 = document.createElement('td')
            td2.innerHTML = persons[i].eletkor
            tr.appendChild(td2)
        }
    }
}

const dm = new Datamanager([
    {nev: 'Józsi', eletkor: 17},
    {nev: 'Teri', eletkor: 16},
    {nev: 'Gábor', eletkor: 17},
    {nev: 'Pisti', eletkor: 17},
    {nev: 'Jani', eletkor: 23},
    {nev: 'Teri', eletkor: 17},
    {nev: 'Ádám', eletkor: 17},
    {nev: 'Zoli', eletkor: 21},
    {nev: 'Peti', eletkor: 20},
    {nev: 'Nándi', eletkor: 20},
    {nev: 'Matyi', eletkor: 19},

])

const table = new DataTable(dm)

const label1 = document.createElement('label')
label1.innerHTML = 'Név: '
document.body.appendChild(label1)

const input1 = document.createElement('input')
document.body.appendChild(input1)

const br1 = document.createElement('br')
document.body.appendChild(br1)

const label2 = document.createElement('label')
label2.innerHTML = 'Életkor: '
document.body.appendChild(label2)

const input2 = document.createElement('input')
document.body.appendChild(input2)

const br2 = document.createElement('br')
document.body.appendChild(br2)

input1.addEventListener('input', function(e){
    e.preventDefault()

    dm.filtername(e.target.value)
})

input2.addEventListener('input', function(e){
    e.preventDefault()

    dm.filterage(Number(e.target.value))
})