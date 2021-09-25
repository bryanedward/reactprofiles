import './info.css'
import styled, { ThemeProvider } from 'styled-components';

const ContainerImg = styled.img`
width: 17rem;
height: 20rem;
object-fit: cover;
border-radius: .4rem;
`
const ContainerDetail = styled.div`
    padding: 0rem;
    background-color: var(--clr-containerimg);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`
const ContainerInfo = styled.div`
    text-transform: uppercase;
    font-weight: bolder;
    padding: 6px;
    text-align: center;

`

function Info(item) {
    return (
        <ContainerDetail>
            <ContainerImg src={item.foto_usuar} />
            <ContainerInfo>
                <p>{item.nomb_usuar} {item.apell_usuar}</p>
            </ContainerInfo>
        </ContainerDetail>
    )
}

export default Info