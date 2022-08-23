import React from 'react'
import Message from '../componentscrudapi/Message'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'

export const SongDetails = ({lyric,bio,search}) => {
  if(!lyric || !bio) return null;
  return (
    <>
        {lyric.error || lyric.err || lyric.name === "AbortError"? <Message 
        msg={`Error: no existe la cancion '<em>${search.song}</em>'`} 
        bgColor="#dc3545"/>: <SongLyric title={search.song} lyric={lyric.lyrics}/>}
        {bio.artists? <SongArtist artist={bio.artists[0]}
        />: <Message
        msg={`Error: no existe el interprete '<em>${search.artist}</em>'`}  
        bgColor="#dc3545"
        />}  
    </>
  )
}
//https://www.youtube.com/watch?v=l6S90ah48kk&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=42
