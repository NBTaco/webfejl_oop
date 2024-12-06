
class Factory{
    // TODO 1, 2, 3, 4, 9, 10
    constructor()
    {
        this.manolist = []
    }
    addMano(mano)
    {
        this.manolist.push(mano)
    }
}
   
   class Companion{
    // TODO 
    constructor(id, keresztnev, vezeteknev, reszleg)
        {
            this.id = id
            this.keresztnev = keresztnev
            this.vezeteknev = vezeteknev 
            this.reszleg = reszleg
            this.products = []
        }
        AddProduct(product){
            this.products.push(product)
        }
    }
    
    
