class Area {
    /**
     * 
     * @type {HTMLDivElement}
     */
   #div

    /**
     * 
     *  @returns {HTMLDivElement} visszatér az aktuális területtel, ami az elemeket tartalmazza
     */
    get div() {
        return this.#div
    }

    /**
     * 
     * @param {string} cssClass 
     */
    constructor(cssClass){
        const container = this.#getContainer()
        this.#div = document.createElement('div')
        this.#div.className = cssClass
        container.appendChild(this.#div)
    }

    /**
     * Létrehozza a container classal rendelkező elemet, amelyen belül 
     * a div lesz megtalalhato, ha már létezik akkor a már létezőt adja vissza
     * 
     * @returns {HTMLDivElement} containert tartalmazza
     */
    #getContainer(){
        let container = document.querySelector('container')
        if(!container){
            container = document.createElement('div')
            container.className = 'container'
            document.body.appendChild(container)
        }
        return container
    }
}

/**
 * Ez a terulet fogja tartalmazni a kerdest
 */
class QuestionArea extends Area{ //leszarmazzuk az Area osztalybol
    constructor(cssClass){
        super(cssClass) //az os css class konstruktorát hivja meg 
    }
}

/**
 * Ez a terulet fogja tartalmazni a valaszokat
 */
class AnswerArea extends Area{
    constructor(cssClass){
        super(cssClass)
    }
}




