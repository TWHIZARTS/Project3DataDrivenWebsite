import react from "react";
import { useParams } from "react-router-dom";
import { Popup, MapContainer, TileLayer, CircleMarker } from 'react-leaflet'

function SiteDetails(props)
{
    const {SiteNum}= useParams()
    const ID = props.data.find(s => s.SiteID == SiteNum);
    console.log(ID, SiteNum)
    

    const lat = ID.Latitude
    const lon = ID.Longitude
    const position = [lat, lon]

    if (ID===undefined)
    {
      return (
      <>

      <p>Site with ID {ID.SiteID} not found.</p>
      
      </>);
    }

    else{
        console.log(ID.Image)
    return(
        <>
        <head>
             <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                crossorigin=""/>
            
            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossorigin=""></script>

        </head>
        <body>
             
            <h1>{ID.Site}</h1>

        <section className = "individualSiteDetails">
            <section className = "sectionImage">
                <img src = {`/images/${ID.Image}`} alt = "pic"/>
            </section>


            <section className = "sectionDescription">
                {ID.Description}
            </section>

            <div id="map">
                <MapContainer style={{ height: "450px", width: "100%" }} center={position} zoom={17} scrollWheelZoom={true}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <CircleMarker center={position} radius={20} pathOptions={{ color: 'red' }}>
                    <Popup>
                        Visit {ID.Site}!
                    </Popup>
                    </CircleMarker>
                </MapContainer>
            </div>
        </section>
        </body>
        </>
    );
}
}

export default SiteDetails;