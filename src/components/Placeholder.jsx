import React, { useState } from "react";
import { PreviewImage } from '../styles/styled';

function Placeholder(props) {
  const [img] = useState(props.img);

  return (
    <PreviewImage img={img}></PreviewImage>
  )
}

export default Placeholder;