
class Factory{
    // TODO 1, 2, 3, 4, 9, 10
    constructor()
    {
        this.manolist = []
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
            if(this.manolist[i].getName() == id){
                this.manolist[i].addProduct(product)
                this.showProducts(this.manolist[i].id)
            }
        }
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
    

