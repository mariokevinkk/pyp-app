

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";




function App2({nama,harga}) {
  return (
    
    <Card style={{ width: "10pc" }}>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/user/erondu/600x400"
      />
      <Card.Body>
        <Card.Title>{nama}</Card.Title>
        <Card.Text>Harga Rp.{harga}</Card.Text>
        <Button variant="primary">Pesan</Button>
      </Card.Body>
      
    </Card>
    
    
  );
}
export default App2;








