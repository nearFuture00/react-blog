import { Link } from "react-router-dom";


function NavBrand(props){

    return(
        <div id="nav-brand">
            <Link to="/"><h1>Branded</h1></Link>
        </div>
    );
}

export default NavBrand;