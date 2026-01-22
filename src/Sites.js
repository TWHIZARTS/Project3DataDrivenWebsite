import react from "react";
import { Link } from "react-router-dom";

function Sites(props)
{
    return(
        <>

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
        </>
    );
}

export default Sites;