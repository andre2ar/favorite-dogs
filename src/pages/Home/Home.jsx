import {Dog} from "../../components/Dog/Dog";
import {Grid} from "../../components/UI/Grid/Grid";
import {Button} from "../../components/Button/Button";
import {ArrowClockwise} from "phosphor-react";
import classes from './Home.module.css';

export function Home(props) {
    return (
        <>
            <div className={classes.PageHeader}>
                <h1>Home</h1>
                <Button onClick={props.reloadDogs}>
                    <ArrowClockwise size={30}/>
                </Button>
            </div>

            <Grid>
                { props.dogs.map(dogUrl => <Dog key={dogUrl} src={dogUrl} addToFavorites={props.addToFavorites}/>) }
            </Grid>
        </>
    )
}