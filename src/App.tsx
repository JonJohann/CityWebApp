import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import BikeBox from './BikeBox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

  const [bikeInfo, setBikeInfo] = useState({ stations: [] });
  const [page, setPage] = useState(0)

  useEffect(() => {
    axios.get("https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json",)
      .then((res) => { setBikeInfo(res.data.data) })
  }, [])

  return (
    <div>
      <Container>
        <Row>
          {bikeInfo.stations.slice(page, page+6).map((value: any, key) => {
            return <BikeBox value={value} key={key} />
          })}
        </Row>
        <Button style={{margin: '2px'}} onClick={()=>{setPage(page-6)}}>Se forrige</Button>
        <Button onClick={()=>{setPage(page+6)}}>Se neste</Button>
      </Container>

    </div>
  );
}

export default App;
