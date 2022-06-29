import './App.css'
import {Header} from "./components/UI/Header/Header";
import {Main} from "./components/UI/Main/Main";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {dogsApi} from "./services/dogsApi";
import {Home} from "./pages/Home/Home";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {Favorites} from "./pages/Favorites/Favorites";

function App() {
    const [favoriteDogs, setFavoriteDogs] = useState(() => {
        const favoriteDogs = localStorage.getItem('@FavoriteDogs:favorites');
        if(favoriteDogs) {
            return JSON.parse(favoriteDogs);
        }

        return [];
    });

    const [dogs, setDogs] =  useState([]);

    useEffect(() => {
        loadDogs();
    }, []);

    const addToFavoritesHandler = useCallback((dogUrl) => {
        setFavoriteDogs(oldFavoriteDogs => {
            if(!oldFavoriteDogs.includes(dogUrl)) {
                const favoriteDogs = [...oldFavoriteDogs, dogUrl];

                localStorage.setItem('@FavoriteDogs:favorites', JSON.stringify(favoriteDogs));

                return favoriteDogs;
            }

            return oldFavoriteDogs;
        });
    }, []);

    const loadDogs = useCallback(() => {
        axios.all([
            dogsApi.get('/woof.json'),
            dogsApi.get('/woof.json'),
            dogsApi.get('/woof.json'),
            dogsApi.get('/woof.json'),
            dogsApi.get('/woof.json'),
            dogsApi.get('/woof.json'),
        ]).then(axios.spread((...responses) => {
            setDogs(responses.map((item => item.data.url)));
        }));
    }, []);

    return (
        <>
            <BrowserRouter>
                <Header />

                <Main>
                    <Routes >
                        <Route path='/' element={<Home dogs={dogs} addToFavorites={addToFavoritesHandler} reloadDogs={loadDogs}  />} />
                        <Route path='favorites' element={<Favorites dogs={favoriteDogs} />} />

                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Main>
            </BrowserRouter>
        </>
    );
}

export default App;
