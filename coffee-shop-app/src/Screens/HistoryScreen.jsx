import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Building1 from '../img/Building1.png'
import Building2 from '../img/Building2.png'
import Building3 from '../img/Building3.png'
import Building4 from '../img/Building4.png'

//Pure HTML with few images importend from img folder located in source
function HistoryScreen() {
  return (

    <div className="bg-banner">
    <div className="backgroundColour-1">
        <h1 className="text-center mt-3">History</h1>
      <div className="customFont-1 text-center mt-5 m-3">
          <p>Older generation Bristolians might well recall the Cloakroom Cafe's more humble origins - as purpose built public convenience! </p>
          <p>Built in 1904 the restroom existed at a time when the surrounding Park Row area was an elegant, thriving Victorian destination.</p>
          <p>Park Row was home to the Prince’s Theatre which opened in 1876 & to the Coliseum, which was built in the early 19th century & housed various entertainments. The Coliseum also later became Bristol’s first cinema in 1912.</p>
      </div>
    </div>
    
    <div className="backgroundColour-2">
      <div className="customFont-1  mt-5 m-3">
      <Container className="text-center">
        <Row>
            <Col><img src={Building1} alt="Building1" width={130}/></Col>
            <Col><img src={Building2} alt="Building2" width={130}/></Col>
        </Row>
            <p className="text-center">Neighbouring historic landmarks, Bristols Victorian era Coliseum & Prince's theater.</p>
        <Row>
            <Col><img src={Building3} alt="Building1" width={130}/></Col>
            <Col><img src={Building4} alt="Building2" width={130}/></Col>
        </Row>
        </Container>
          
          
          <div className="text-center mt-5">
            <p>Cloakroom Café now resides in what is known as Tyndall’s park conservation area & is considered a building of historical & architectural interest. A lasting example of civic pride in an affluent bygone era of Bristol’s history.</p>
          </div>

          <div className="text-center">
            <p>The building is now considered a rarity as most public conveniences of this era in Britain have been recently demolished, being deemed as commercially unviable spaces for the modern age.</p>
          </div>
      </div>
    </div>
  </div>
  )
}

export default HistoryScreen