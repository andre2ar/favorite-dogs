import {Dog} from "../../components/Dog/Dog";
import {Grid} from "../../components/UI/Grid/Grid";

export function Favorites(props) {
    return (
        <>
            <h1>Favorites</h1>

            <Grid>
                { props.dogs.map(dogUrl => <Dog key={dogUrl} src={dogUrl} />) }
            </Grid>
        </>
    )
}