
class Factory{
    // TODO 1, 2, 3, 4, 9, 10
    constructor()
    {
        this.manolist = []
        this.reszlegek = []
    }
    addMano(mano)
    {
        this.manolist.push(mano)
        createRow(mano) //tablauzathoz sor hozzáadása
        appendToSelector(mano)
    }
    createId(){
        return this.manolist.length //a hossza lesz az index
    }
    showProducts(id){
        for(let i = 0; i < this.manolist.length; i++){
            if(this.manolist[i].id == id){
                refreshProductList(this.manolist[i])
            }
        }
    }
    addProductToMano(product, id){
        for(let i = 0; i < this.manolist.length; i++){
            if(this.manolist[i].id == id){
                this.manolist[i].addProduct(product)
                this.showProducts(this.manolist[i].id)
            }
        }
    }
    addReszleg(reszleg){
    if(!this.reszlegek.includes(reszleg))
        this.reszlegek.push(reszleg)
    

        //1. végigmegyunk a reszlegek listan
        //2. megnezzuk, hogy a reszlegek listaban benne van e már a bement paraméter
        //3. miutan végignéztük a listát megnézzük hogy benne van e mar a bementi paraméter
        //4. ha nincs benne akkor belerakjuk

        /*
        let vanebenne = false
        for(let i = 0; i< this.reszlegek.length; i++) //végigmegy a reszlegek listan pipa
            {
                const currentelement = this.reszlegek[i] //az aktualis elemet kivesszuk egy valtozoba
                if(currentelement == reszleg){ //menezi hogy az aktualis elem egyenlo-e a bemeneti parameterrel
                    vanebenne = true
                    break
                }
            }
        if(vanebenne === false){
            this.reszlegek.push(reszleg) //hozzáadja a bementi paramétert a reszlegekhez
        }
        */
    }

}
   
   class Companion{
    // TODO 5
    constructor(id, keresztnev, vezeteknev, reszleg) 
        {
            this.id = id
            this.keresztnev = keresztnev
            this.vezeteknev = vezeteknev 
            this.reszleg = reszleg
            this.products = []
        }
        addProduct(product){ // product hozzáadás
            this.products.push(product)
        }
        getName(){ // teljes név kiirása
            return this.keresztnev + " " + this.vezeteknev
        }
    }
    

