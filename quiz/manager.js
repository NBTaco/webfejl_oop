/**
 * @callback NextQuestionCallback
 * @param {string} kerdes a kerdes szovgeget tartalmazza
 * 
 * @callback NextAnswerCallback
 * @param {string []} valaszok a valaszokat szartalmaza
 * 
 * @callback FinishCallback
 * @param {string} result a vegeredmeny szoveget szartalmaza
 */

class Manager{
    /**
     * @type {Question[]} kerdesek tombjet tartalmazza
     */
    #array   

    /**
     * @type {number} az aktualis kerdes szamat tartalmazza
     */
    #currentQuestionNumber

    /**
    * @type {Object} a kerdes szamonkent eltarolt valaszokat tartalmazza
    */
    #selectedAnswer

    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback

    /**
     * @type {NextAnswerCallback}
     */

    #nextAnswerCallback

    /**
     * @type {FinishCallback}
     */
    #finishCallback

    /**
     * 
     * @param {Question[]} array kerdestomb
     */
    constructor(array = []){
        this.#array = array
        this.#currentQuestionNumber = 0
        this.#selectedAnswer = []
    }

    /**
     * 
     * Beallitja a löövetkező kérdé betoltesekor a kerdehez tartozo logikat
     * 
     * @param {NextQuestionCallback} callback tartalmazza a fuggvenyt ami akkor fut le amikor a kovetkezo kerdesre lepunk
     */
    setNextQuestionCallback(callback){
        this.#nextQuestionCallback = callback
    }

    /**
     * 
     * Beallitja a kovetkezo valaszk betoltesekor lefuto logikat
     * 
     * @param {NextQuestionCallback} callback tartalmazza a fuggvenyt ami lefut a kovetkezo valaszokra lepeskor
     */
    setNextAnswerCallback(callback){
        this.#nextAnswerCallback = callback
    }

    /**
     * 
     * Beallitja az eredmeny kiertekelesehez szuikseges fuggvenyt
     * 
     * @param {NextQuestionCallback} callback tartalmazza a fuggvenyt ami akkor fut le amikor avegigerunk a kerdeseket
     */
    setFinishCallback(callback){
        this.#finishCallback = callback
    }
    

    nextQuestion(answer){
        this.#selectedAnswer[this.#currentQuestionNumber] = answer //taroljuk a valasz erteket
        this.#currentQuestionNumber++
        if(this.#currentQuestionNumber < this.#array.length){ //van e meg kerdes
            const nextQuestion = this.#array[this.#currentQuestionNumber]
            this.#nextAnswerCallback(nextQuestion.answers)
            this.#nextQuestionCallback(nextQuestion.questionText)
        } 
        else{
            let counter = 0
            for(const index in this.#array){
                if(this.#array[index] === this.#selectedAnswer[index]){
                    counter++ //akkor noveljuk a countert, ha a rightanswer megegyezik a taroltal
                }
            }
            const result = 'A kerdessor veget ert: ' + this.array.length + ' ' + counter
            this.#finishCallback(result)
        }
    }

    start(){
        this.#nextQuestionCallback(this.#array[0].questionText)
        this.#nextAnswerCallback(this.#array[0].answers)
    }
}