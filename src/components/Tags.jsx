// Tags.jsx
import "../App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';//importamos el css de bootstrap esto es lo que hace que aparescan los badges
import Badge from 'react-bootstrap/Badge'

const Tags = ({ text, color }) => {
  return (
   
    <Badge bg={color} className="my-badge">{text}</Badge>
   
    
  );
};

export default Tags;