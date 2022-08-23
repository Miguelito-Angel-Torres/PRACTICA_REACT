import React from 'react'
import { useParams } from 'react-router-dom'
import { SongDetails } from '../../componentsbuscadormusic/SongDetails'

function SongPage({mySongs}) {

    let {id} = useParams();
    //console.log(id);
    //console.log(mySongs[id])    
    let currentSong = mySongs[id];
    let {search,lyric,bio} = currentSong;
    return (<SongDetails lyric={lyric} bio={bio} search={search}/>)
}

export default SongPage