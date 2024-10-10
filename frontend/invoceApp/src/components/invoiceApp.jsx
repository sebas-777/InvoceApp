import { getInvoice } from "../services/getInvoice";
import { ClientView } from "./clientView";
import { CompanyView } from "./companyView";
import { InvoiceView } from "./invoiceView";

export const InvoiceApp =()=>{
    
    // constante invoice de tipo objeto
    const {id,name,client,company,items}= getInvoice();

  

    //destructuring company
    const{name:companyName,fiscalNumber}= company;
    
    return(
        <>
 <div className="container"> 
    <div className="card my-3">
        <div className="card-header"> 
        Datos de la factura :
        
        </div>
    <div className="card-body">
    
        <InvoiceView id={id} name={name}/>
      <div className="row my-3">
        <div className="col">
          <ClientView title="Datos del cliente:" client={client}/>
        </div>

        <div className="col">
          <CompanyView title="Datos de la empresa:" companyName={companyName} fiscalNumber={fiscalNumber}/>
           </div>
        </div>
        
           <h3>Productos de la factura :</h3>
           <table className="table table-striped table-hover">
               <thead>
               <tr>
                 <th>Producto</th>
                 <th>Precio</th>
                 <th>cantidad</th>
                </tr>
               </thead>
               <tbody>
                {items.map(({product,price,quantity})=>{
                    
                    return(<tr key={id}>
                        <td>{product}</td>
                        <td>{price}</td>
                        <td>{quantity}</td>
                    </tr> 
                    )
                })}
                
               </tbody>
             
           </table>
        </div>
    </div>
 </div>
        </>
    );
}
