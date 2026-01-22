import react from "react";
import { useParams } from "react-router-dom";

function SiteDetails(props)
{

    const {SiteNum}= useParams()
    const ID = props.data.find(s => s.SiteID == SiteNum);

    // console.log(ID, SiteNum)
    
    if (ID===undefined)
    {
      return (
      <> 
      <p>Site with ID {ID.SiteID} not found.</p>
      
      </>);
    }

    else{
    return(
        <>
            <h2>{ID.Site}</h2>
        </>
    );
}
}

export default SiteDetails;