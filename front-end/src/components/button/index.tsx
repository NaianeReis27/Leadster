import { Container} from "./styles";
interface PropsButton {
  text: string;
  types: "primary"|"secondary" 
};
const Button = ({text, types}: PropsButton)=> {
    return (
        <Container types={types}>
          {text }
        </Container>
    );
  };

export default Button;