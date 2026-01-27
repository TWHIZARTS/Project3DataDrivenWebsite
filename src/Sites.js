import react from "react";
import { Link } from "react-router-dom";

function Sites(props)
{
    return(
        <>
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
              <tr key = {site.SiteID}>
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
    
      <section className="sectionDescription">
        <h3>About</h3>
        <p>
          The <strong>America 250 KY Boyle county committee</strong> presents the following
          important historical sites. <br /><br />
          Pursue, learn, and celebrate the history of Boyle County!<br /><br />
          Select your choice to explore.
        </p>
      </section>
      
      </div>
        </>
    );
}

export default Sites;