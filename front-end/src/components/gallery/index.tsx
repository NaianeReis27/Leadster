import { Container } from "./styles";
import Card from "../Card";
import { ApiContext } from "../../context/ApiContext";
import { useContext } from "react";
const Gallery = () => {
  const {videos} = useContext(ApiContext)

  return (
    <Container>
      <ul>
      {videos?.data?.map((ele) => <Card key={ele.id} {...ele}></Card>)}
      </ul>
      
    </Container>
  );
};

export default Gallery;
