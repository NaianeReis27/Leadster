import { ContainerPage } from "../styles/GlobalStyles";
import Header from "../components/header";
import Banner from "../components/banner";
import Filter from "../components/filter";
const index = () => {
    return (
        <ContainerPage>
            <Header></Header>
            <Banner></Banner>
            <Filter></Filter>
        </ContainerPage>
    );
  };

export default index;