/**
 * Megjelenit egy formot és kezeli a formfieldek validaciojat és értékeit
 */
class formController{
    /**
     * @type {Manager}
     */
    #manager

    /**
     * @type {FormField}
     */
    #formFieldArray
}

/**
 * Felel a fieldek létrehozásáért értékeiért és
 * az esetlegs hibákért
 */
class FormField{
    /**
     * @type {string}
     */
    #id

    /**
     * @type {string} 
     */
    #type

    /**
     * Kötelező vagy nem
     * @type {Boolean}
     */
    #optional

    /**
     * @type {HTMLInputElement}
     */
    #inputField

    /**
     * @type {HTMLSpanElement}
     */
    #errorField

    /**
     * @type {HTMLLabelElement}
     */
    #labelElement

    get id(){
        return this.#id
    }

    /**
     * @returns {string | boolean}
     */
    get value(){
        if(this.#type === 'checkbox'){
            return this.#inputField.checked
        }
        return this.#inputField.value
    }   

    get optional(){
        return this.#optional
    }

    /**
     * @param {string} value
     */
    set error(value){
        this.#errorField.textContent = value
    }

    constructor(id, labelContent, type, optional=false){
        this.#id = id
        this.#type = type
        this.#optional = optional
        this.#labelElement = Gomszab.makeLabel(id, labelContent)
        this.#inputField = Gomszab.makeInput(id, type)
        this.#errorField = Gomszab.makeErrorField()
        
    }
}