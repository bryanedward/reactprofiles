import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import styled, { ThemeProvider } from 'styled-components';

const ContainerCards = styled.div`
    width: 100%;
    margin-left: 2rem;
    display: inline-flex;
    flex-wrap: nowrap;
`

const ContainerCard = styled.div`
    margin: 1rem;
`

const Wrapper = styled.section`
`

const ContainerImg = styled.img`
width: 17rem;
border-radius: .4rem;
`

Wrapper.defaultProps = {
    theme: {
        main: "palevioletred"
    }
}





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

function Card({ cod_ciudad }) {
    //consutar un usuario
    const [container, setContainer] = useState(cod_ciudad != null ? cod_ciudad : "")

    //realizar la consulta al server
    const { loading, error, data } = useQuery(getOneUser, {
        variables: { cod_ciudad: container },
    });

    useEffect(() => {
        //actualiza el estado de la variable con la nueva cedula
        setContainer(cod_ciudad)
    })

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <ContainerCards>
            {
                data.buscarUsuario.map((item) => (
                    <ContainerCard>
                        <Wrapper>
                            <p>{item.nomb_usuar}</p>
                            <p>{item.apell_usuar}</p>
                        </Wrapper>
                        <ContainerImg src={item.foto_usuar} />
                        <p>{item.ced_usuar}</p>
                    </ContainerCard>
                ))
            }
        </ContainerCards>
    )
}

export default Card;