import ComponenteUm from "./components/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";

function app(){
    return(
        <div>
            <ComponenteUm />
            <ComponenteDois />
            <ComponenteTres />
            <ComponenteQuatro texto="Que fase tá  Coringão" />
        </div>
    )
}