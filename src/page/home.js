import Menu from "../components/menu/menu"
import Card from "../components/card/card"
import styled from "styled-components"

const ContainerHome = styled.div`
    display: flex;
`

function Home(props) {
    return(
        <ContainerHome>
           <Menu/>
           <Card {...props}/>
        </ContainerHome>
    )
}

export default Home