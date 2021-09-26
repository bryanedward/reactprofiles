import './card.css'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdSend } from "react-icons/md";
import ItemCard from '../itemCard/itemCard';

const ContainerCards = styled.div`
    width: 100%;
    display: inline-flex;
    flex-wrap: nowrap;
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
function Card() {
    //consutar un usuario
    const [containerImg, setContainerImg] = useState([])
    const [positionImg, setPositionImg] = useState(0)
    //realizar la consulta al server
    const { loading, error, data } = useQuery(getAllUser);

    useEffect(() => {
        //actualiza el estado de la variable con la nueva cedula
        setContainerImg(data)
        console.log("montaod");
    })

    if (loading) return 'Cargando';
    if (error) return `Error! ${error.message}`;
    if (containerImg != null) {
    }
    var load = containerImg != null ? containerImg.consultarUsuario[positionImg].foto_usuar : "";

    const btnImg = (props) => {
        //avanzar y retroceder imagenes
        setPositionImg(positionImg + props)
    }

    const dialog = () => {
        //avanzar y retroceder imagenes
    }

    return (
        <div style={{ width: "100%" }}>
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
                        <ItemCard {...item}/>
                    ))
                }
            </ContainerCards>
        </div>
    )
}

export default Card;