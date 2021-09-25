import './card.css'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import styled, { ThemeProvider } from 'styled-components';
import { MdClose, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Info from '../cardinfo/info';

const ContainerCards = styled.div`
    width: 100%;
    display: inline-flex;
    flex-wrap: nowrap;
`

const ContainerCard = styled.div`
    margin: 1rem;
`

const ViewContainerCard = styled.div`
    visibility: ${props => props.theme.cedula};
    position: relative;
    bottom: 15rem;
    left: 4rem;
    height: 23rem;
    background-color: var(--clr-viewcontainer);
    color: var(--clr-dark);
`

const ContainerImg = styled.img`
width: 17rem;
border-radius: .4rem;
`

const ContainerSlider = styled.div`
    width: 100%;
    height: 370px;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`


//consultar un usuario
const getOneUser = gql`
query const($cod_ciudad : String ){
    buscarUsuario(codigo_ciudad : $cod_ciudad) {
    ced_usuar
    nomb_usuar
    apell_usuar
    telef_usuar
    foto_usuar
  }
  }
`;

const getAllUser = gql`
{
    consultarUsuario {
      ced_usuar
      nomb_usuar
      apell_usuar
      telef_usuar
      foto_usuar
    }
  }
`

function Card({ cod_ciudad }) {
    //consutar un usuario
    const [container, setContainer] = useState(cod_ciudad != null ? cod_ciudad : "")
    const [containerImg, setContainerImg] = useState([])
    const [positionImg, setPositionImg] = useState(0)
    const [infoUser, setiInfoUser] = useState([])
    //realizar la consulta al server
    var consulta = cod_ciudad != null ? getOneUser : getAllUser;

    const { loading, error, data } = useQuery(consulta, {
        variables: { cod_ciudad: container },
    });

    useEffect(() => {
        //actualiza el estado de la variable con la nueva cedula
        setContainerImg(data)
        setContainer(cod_ciudad)
    })

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    var load = containerImg != null ? containerImg.consultarUsuario[positionImg].foto_usuar : "";

    const viewContainerCard = (props) => {
        setiInfoUser(props)
    }

    const btnImg = (props) => {
        setPositionImg(positionImg + props)
    }

    return (
        <div style={{width:"100%"}}>
            <ContainerSlider>
                <MdKeyboardArrowLeft
                    size={35}
                    style={{ pointerEvents: positionImg == 0 ? "none" : "auto" }}
                    className="mdkey" onClick={() => btnImg(-1)} />
                {
                    <img className="containerimg" src={load} />
                }
                <MdKeyboardArrowRight
                    size={35}
                    style={{ pointerEvents: positionImg == data.consultarUsuario.length - 1 ? "none" : "auto" }}
                    className="mdkey" onClick={() => btnImg(1)} />
            </ContainerSlider >
            <ContainerCards>
                {
                    data.consultarUsuario.map((item) => (
                        <ContainerCard onClick={() => viewContainerCard(item)}>
                            <Info {...item} />
                        </ContainerCard>
                    ))
                }
            </ContainerCards>
        </div>
    )
}

export default Card;