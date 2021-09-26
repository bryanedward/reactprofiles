import { useEffect } from "react/cjs/react.development";
import Header from "../components/header/header";

function Perfil(props) {

    console.log(props);
    useEffect(() => {
        document.title = "ok"    
    })
    return (
        <div>
            <Header/>
        </div>
    )
}

export default Perfil