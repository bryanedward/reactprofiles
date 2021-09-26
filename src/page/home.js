import Menu from "../components/menu/menu"
import Card from "../components/card/card"
import styled from "styled-components"


function Home() {
    return(
        <div className="containerHome">
           <Menu/>
           <Card/>
        </div>
    )
}

export default Home