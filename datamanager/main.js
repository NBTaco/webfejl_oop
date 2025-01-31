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

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        datamanager.setupdatecallback(persons => {
            tbody.innerHTML = ""

            for(let i = 0; i < persons.length; i++){
                const tr = document.createElement('tr')
                tbody.appendChild(tr)

                const td = document.createElement('td')
                td.innerHTML = persons[i].nev
                tr.appendChild(td)

                const td2 = document.createElement('td')
                td2.innerHTML = persons[i].eletkor
                tr.appendChild(td2)
            }
        })
    }
}

const dm = new Datamanager([
    {nev: 'Józsi', eletkor: 17},
    {nev: 'Teri', eletkor: 16},
    {nev: 'Gábor', eletkor: 17}
])

const table = new DataTable(dm)