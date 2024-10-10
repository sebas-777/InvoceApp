export const ClientView =({title,client})=>{
    
      //destructuring client
      const {name:clientName,lastName,address}= client;
    
      //destructuring address
      const {country,city,street,number}= address;
    
    return(
    <>
     <h2>{title}</h2>
           <ul className="list-group" >
            <li className="list-group-item active">{clientName} {lastName}</li>
            <li className="list-group-item">{country} {city}</li>
            <li className="list-group-item">{street} / {number}</li>
           </ul> 
    </>
    )
}