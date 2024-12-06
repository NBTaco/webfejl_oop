/**
 * @type {{
*   firstName: string;
*   lastName: string;
*   products: string[];
*   area: string;
* }[]}
*/
const companionList = [
   {
       firstName: 'Géza',
       lastName: 'Kiss',
       area: 'plastic',
       products: ['kisauto', 'barbibaba']
   },
   {
       firstName: 'Ferenc',
       lastName: 'Tóth',
       area: 'paper',
       products: ['könyv']
   },
   {
       firstName: 'Gábor',
       lastName: 'Nagy',
       area: 'plastic',
       products: ['zokni']
   },
]
const factory = new Factory();

document.getElementById('companion').addEventListener('submit',function(e){
   e.preventDefault();
   const form =  e.currentTarget
   addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
   e.preventDefault();
   const form = e.currentTarget;
   addProductForm(form, factory)
});

/**
* table render
*/
function initTable(){

   // TODO 6
    for(let i = 0; i < companionList.length; i ++) //végigmegy a companionList-en 
    {
        const mano = companionList[i] //List- i-dik eleme kivéve
        const companion = new Companion(i, mano.firstName, mano.lastName, mano.area) //Companion objektum létrehoz, contruktorra példányositjuk
        for (const y of mano.products)  //mano objektum products-on megy végig
        {
            companion.AddProduct(y) //hozzáadja az companion objektumhoz a productot
        }
    }
}


initTable()

/**
* 
* eventlistener callback for the button click of companion
* 
* @param {EventTarget} e 
*/
function checkEventListener(e){
   const row = e.currentTarget.parentElement.parentElement;
   const companionId = row.id;
   // TODO 10
}