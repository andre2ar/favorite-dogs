import classes from './Dog.module.css';
import {Button} from "../Button/Button";
import {Heart} from "phosphor-react";
import {useCallback} from "react";

export function Dog(props) {
    const isVideo = useCallback((url) => {
        const extension = url.split('.').reverse()[0];
        return extension === 'mp4';
    }, []);

    return (
        <div className={classes.Dog}>
            {isVideo(props.src) ?
                <video autoPlay loop muted>
                    <source src={props.src} type="video/mp4"/>
                </video>
                : <img src={props.src} alt="Dog"/>
            }

            <footer>
                <strong>Cute dog</strong>

                {props.addToFavorites ? (
                    <Button onClick={() => props.addToFavorites(props.src)}>
                        <Heart />
                    </Button>
                ) : null}

            </footer>
        </div>
    );
}