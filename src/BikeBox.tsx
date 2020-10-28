import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function BikeBox(props: any) {

    const [available, setAvailable] = useState({ stations: [{station_id: null, num_bikes_available: 0}] });
    var bikes = 0;

    useEffect(() => {
        axios.get("https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json",)
          .then((res) => { setAvailable(res.data.data) })
      }, [])
    
    for (var items of available.stations) {
        if (items.station_id === props.value.station_id){
            bikes = items.num_bikes_available
        }
    }

    return (
        <div>
            <Card style={{ width: '18rem' ,margin:'1rem'}} bg="primary">
                <Card.Body>
                    <Card.Title>{props.value.name}</Card.Title>
                    <Card.Text>
                        Du finner stasjonen på {props.value.address} med {bikes} ledige sykler
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BikeBox;