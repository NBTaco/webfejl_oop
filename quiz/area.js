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
     * @param {Manager} manager
     */
    constructor(cssClass, manager){
        const container = this.#getContainer()
        this.#div = document.createElement('div')
        this.#div.className = cssClass
        container.appendChild(this.#div)
        manager.setFinishCallback((resulttext) => {
            container.innerHTML = ''
            const resultDIv = document.createElement('div')
            resultDIv.textContent = resulttext
            resultDIv.className = 'result'
            container.appendChild(resultDIv)
        })
    }

    /**
     * Létrehozza a container classal rendelkező elemet, amelyen belül 
     * a div lesz megtalalhato, ha már létezik akkor a már létezőt adja vissza
     * 
     * @returns {HTMLDivElement} containert tartalmazza
     */
    #getContainer(){
        let container = document.querySelector('.container')
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

    /**
     * 
     * @param {cssClass} cssClass 
     * @param {Manager} manager
     */
    constructor(cssClass, manager){
        super(cssClass, manager) //az os css class konstruktorát hivja meg 
        manager.setNextQuestionCallback((kerdesszoveg) => {
            this.div.innerHTML = ''
            const questionCard = document.createElement('div')
            questionCard.textContent = kerdesszoveg
            this.div.appendChild(questionCard)
        })
    }
}

/**
 * Ez a terulet fogja tartalmazni a valaszokat
 */
class AnswerArea extends Area{

    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager){
        super(cssClass, manager)
        manager.setNextAnswerCallback((valaszok) => {
            this.div.innerHTML = ''
            for(const valasz of valaszok){
                const answerCard = document.createElement('div')
                answerCard.className = 'item'
                answerCard.textContent = valasz
                answerCard.addEventListener('click', ()=> {
                    manager.nextQuestion(valasz)
                })
                this.div.appendChild(answerCard)
            }
        })
    }
}




