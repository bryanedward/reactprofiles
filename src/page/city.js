import { gql, useQuery, useLazyQuery } from '@apollo/client'
import styled from 'styled-components';
import ItemCard from '../components/itemCard/itemCard';
import Menu from '../components/menu/menu';


function City({ cod_ciudad }) {

    const ContainerCards = styled.div`
    width: 100%;
    display: inline-flex;
    flex-wrap: nowrap;
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
    }`;

    const { loading, error, data } = useQuery(getOneUser, {
        variables: { cod_ciudad: cod_ciudad },
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        
        <div className="containerHome">
            <Menu />
            <ContainerCards>
                {
                    data.buscarUsuario.map((item) => (
                      <ItemCard {...item}/>  
                    ))
                }
            </ContainerCards>
        </div>
    )
}

export default City