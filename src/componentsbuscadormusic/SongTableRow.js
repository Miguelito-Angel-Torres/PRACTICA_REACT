import React from 'react'
import { useHistory } from 'react-router-dom';

const SongTableRow = ({id,el,handleDeleteSong}) => {
    console.log(el);
    let {bio,search} =el;
    let avatar = bio.artists[0].strArtistThumb;
    let history = useHistory();
    let avatarStyles = {
        width:"auto",
        height:"40px",
    }

    return (
        <tr>
            <td><img style={avatarStyles} src={avatar} alt={search.artist} /></td>
            <td>{search.artist}</td>
            <td>{search.song}</td>
            <td>
                <button onClick={()=>history.push(`/${id}`) }>Ver</button>
                <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
            </td>
        </tr>
    )
    }

export default SongTableRow

//https://www.youtube.com/watch?v=iERtngM9br4&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=70