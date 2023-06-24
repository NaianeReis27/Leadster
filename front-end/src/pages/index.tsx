import { ContainerPage } from "../styles/GlobalStyles";
import Header from "../components/header";
import Banner from "../components/banner";

const index = () => {
    return (
        <ContainerPage>
            <Header></Header>
            <Banner></Banner>
        </ContainerPage>
    );
  };

export default index;