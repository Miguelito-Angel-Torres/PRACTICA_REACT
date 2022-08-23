import React,{useState,useEffect} from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import Loader from '../componentscrudapi/Loader';
import Error404 from '../componentsRouter/pages/Error404';
import SongPage from '../componentsRouter/pages/SongPage';
import { helpHttp } from '../helpers/helpHttp';
import { SongDetails } from './SongDetails';
import { SongForm } from './SongForm';
import SongTable from './SongTable';


let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];


const SongSearch = () => {
    // Buscador
    const [search,setSearch] = useState(null);
    //Guarda la cancion
    const [lyric,setLyric] = useState(null);
    //BioGrafia 
    const [bio,setBio] = useState(null);
    //Contrador de Carga
    const [loading,setLoading] = useState(false);
    // Referencia a mis Canciones
    const [mySongs,setMySongs] = useState(mySongsInit);



    useEffect(()=>{
        if(search === null) {return;}
        const fetchData = async () =>{
            const {artist,song} = search;
            console.log(search);

            let artisUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
            // Ambas peticiones
            console.log(artisUrl,songUrl);
            setLoading(true);
            // Instructuracion
            const [artistRes,songRes] =await Promise.all([
                helpHttp().get(artisUrl),
                helpHttp().get(songUrl ),
            ]); 
            console.log(artistRes);
            console.log(songRes)
            setBio(artistRes);
            setLyric(songRes);
            setLoading(false);
            console.log(mySongsInit);   
            
        }
        fetchData()
        localStorage.setItem("mySongs",JSON.stringify(mySongs));
    },[search,mySongs]);

    const handleSearch =(data) =>{
        console.log(data);
    setSearch(data);}

    const handleSaveSong = () =>{
        alert("Salvando cancion en Favoritos");
        let currentSong = {
            search: search,
            lyric: lyric,
            bio: bio,
        }

        let songs = [...mySongs,currentSong]

        setMySongs(songs);
        localStorage.setItem("mySongs",JSON.stringify(songs));

        setSearch(null);

    }
    const handleDeleteSong= (id) =>{
        //alert(`Eliminando Cancion con el id:${id}`);
        let isDelete = window.confirm(`¿Estas seguro de eliminar la cancion con el id "${id}"`);
        if(isDelete){
            let songs = mySongs.filter((el,index) => index !== id);
            setMySongs(songs);
            localStorage.setItem("mySongs",JSON.stringify(songs));
        }

        
    }

    return (
        <div>   
            <HashRouter basename="canciones">
                <header>
                    {loading && <Loader/>}
                    <h2>Song Search</h2>
                    <NavLink to="/">Home</NavLink>
                </header>
                <article className="grid-1-2">
                    <Switch>
                        <Route exact path="/">
                            <SongForm handleSearch = {handleSearch}  handleSaveSong={handleSaveSong} />
                            <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong} />
                            {search && !loading && 
                            (<SongDetails lyric={lyric} bio={bio} search={search}/>)}
                        </Route>
                        <Route exact path="/:id" children={<SongPage mySongs = {mySongs} />}/>
                        <Route path="*" children={<Error404/>}></Route>
                    </Switch>
                </article>
            </HashRouter>
        </div>
    )
}

export default SongSearch

//https://www.youtube.com/watch?v=xmY_-TaY2U0&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=39