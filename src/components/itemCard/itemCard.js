import { MdSend } from "react-icons/md"
import Info from "../cardinfo/info"
import { Link } from '@reach/router'

function ItemCard(item) {
    return (
        <div className="imagenes">
            <div className="containerCard">
                <Info {...item} />
            </div>
            <div className="infoadicional">
                <Link to={`/perfil/${item.ced_usuar}`}
                >
                    <MdSend className="mdSend" />
                </Link>
                <p>Enviar Correo</p>
            </div>
        </div>
    )
}
export default ItemCard