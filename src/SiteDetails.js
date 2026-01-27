import react from "react";
import { useParams, Link } from "react-router-dom";
import { Popup, MapContainer, TileLayer, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
function SiteDetails(props)
{
    const {SiteNum}= useParams()

    //attempt to prevent page crash when refreshing.
    if (!props.data || props.data.length === 0){
        return(
            <p>Loading site...</p>
        )
    }
    const ID = props.data.find(s => s.SiteID == SiteNum);
    console.log(ID, SiteNum)
    
    if (ID===undefined)
    {
      return (
      <p>Site with ID {SiteNum} not found.</p>
      );
    }

    const lat = ID.Latitude
    const lon = ID.Longitude
    const position = [lat, lon]

    console.log(ID.Image)
    return(
        <>
            <h1>{ID.Site}</h1>

            <section className = "sectionImage">
                <img src = {`/images/${ID.Image}`} alt = "pic"/>
            </section>

            <section className = "individualSiteDetails">
                <section className = "sectionDescription">
                    <h3> About</h3>
                    <p>{ID.Description}</p>
                </section>

                <div id="map" style={{ height: "450px", width: "60%", border: "2px solid rgb(168,194,168)" }}>
                    <MapContainer center={position} zoom={17} scrollWheelZoom={true}style={{ height: "100%", width: "100%" }}>
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
        </>
    );
}
export default SiteDetails;