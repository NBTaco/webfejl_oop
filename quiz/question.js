
/**
 * Ezzel az entitással fog dolgozni a managaer osztalyunk
 * (a manager tombje ezeket fogja tardtalmazni)
 */
class Question{
    
    /**
     *@type {string}      
     */
    #questionText

    /**
     * @type {string[]}
     */
    #answers

    /**
     * @type {string}
     */
    #rightAnswer

    /**
     * @returns {string[]} a valaszokat tartalmazza
     */
    get answers(){
        return this.#answers
    }

    /**
     * @returns {string} A kérdés szövegét tartalmazza
     */
    get questionText(){
        return this.#questionText
    }

    /**
     * @returns {string} a jo valasz sziveget tartalmazza
     */
    get rightAnswer(){
        return this.#rightAnswer
    }

    /**
     * 
     * @param {string} questionText 
     * @param {string[]} answers 
     * @param {string} rightAnwer 
     */
    constructor(questionText, answers, rightAnwer){
        this.#answers = answers
        this.#questionText = questionText
        this.#rightAnswer = rightAnwer
    }


}