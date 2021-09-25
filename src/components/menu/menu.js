
import './menu.css'
import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../card/card';
import { Link } from '@reach/router'

const ContainerMenu = styled.div`
    width: 20%;
    height: 120vh;
    background-color: var(--clr-viewcontainer);
`

const ContainerUl = styled.ul`
    list-style: none;
    padding: 0;
`

//menu de navegacion
const getCity = gql`
{
    consultarCiudades {
      cod_ciudad
      nomb_ciudad
      descrip_ciudad
    }
  }
`

function Menu() {
    const [cedula, setCedula] = useState(" ")
    const [container, setContainer] = useState(false)
    const { data, loading, error } = useQuery(getCity)

    useEffect(() => document.title = `${cedula}`)

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <ContainerMenu>
            <ContainerUl name="usuario">
                {
                    data.consultarCiudades.map((item) => (
                        <Link className="navegacion"
                            to={`/${item.cod_ciudad}`}
                            key={item.cod_ciudad} onClick={() => {
                                setCedula(item.cod_ciudad)
                                setContainer(!container)
                            }}>
                            {item.nomb_ciudad}
                        </Link>
                    ))
                }
            </ContainerUl>
        </ContainerMenu>
    );
}

export default Menu;
