export const CompanyView = ({title,companyName,fiscalNumber})=>{
    return(
        <> 
         <h2>{title}</h2>
           <ul className="list-group"> 
            <li className="list-group-item">{companyName}</li>
            <li className="list-group-item">{fiscalNumber}</li>
           </ul>  
        </>
        
    )
}