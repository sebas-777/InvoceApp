 export const invoice={
    id:10,
    name:'Componentes PC',
    client:{
        name:'Pepe',
        lastName:'doe',
        address:{
            country:'Colombia',
            city:'Bogota',
            street:'Calle 1',
            number:123
        }
    },
    company:{
        name:'New Egg',
        fiscalNumber:1234567,
    },
    items:[
        { 
            id:1,
            product:'CPU',
            price:1000,
            quantity:2
        },
        { 
            id:2,
            product:'GPU',
            price:2000,
            quantity:1  
        },
        {   
            id:3,
            product:'RAM',
            price:3000,
            quantity:1
        }
    ]

}