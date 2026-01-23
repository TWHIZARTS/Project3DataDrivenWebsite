import react from "react";
import { Link } from "react-router-dom";

function Sites(props)
{
    return(
        <>
          
          <div className="Imgholder">
            <section><p>img placeholder</p></section>
          </div>


          <div className="useColumns">
          <div className='linktable'> 
           <table>     
         <thead>
            <tr>
               <th>Name of Site</th>
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
      
      <section><p>About Column</p></section>

      </div>
        </>
    );
}

export default Sites;