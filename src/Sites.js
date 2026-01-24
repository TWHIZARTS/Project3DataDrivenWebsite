import react from "react";
import { Link } from "react-router-dom";

function Sites(props)
{
    return(
        <>
          
          <div className="Imgholder">
            <section id="homeimg"><p>img placeholder</p></section>
          </div>


          <div className="useColumns">

          

          <div className='linktable'> 
           <table>     
         <thead>
            <tr>
               <th>Sites</th>
            </tr>
          </thead>
          <tbody>       
            
               
          {props.data.map(site => 
          <tr>
            <td> 
            <Link to={`/${site.SiteID}`}>
              {site.Site}
            </Link>
            </td> 
            <td></td>
          </tr>
          )}
 
          </tbody> 
      </table>  
      </div>
    
      <h3>About</h3>
      
      </div>
        </>
    );
}

export default Sites;