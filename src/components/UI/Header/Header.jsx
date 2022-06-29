import classes from './Header.module.css';
import {Heart} from "phosphor-react";
import {Button} from "../../Button/Button";
import {useCallback} from "react";
import {Link, useNavigate} from "react-router-dom";

export function Header() {
    let navigate = useNavigate();

    const goToFavorites = useCallback(() => {
        navigate("favorites", { replace: true });
    }, []);

    return (
        <header className={classes.Header}>
            <Link to="/">
                <strong>Favorite Dogs</strong>
            </Link>

            <Button onClick={goToFavorites}>
                <Heart size={30}/>
            </Button>
        </header>
    );
}