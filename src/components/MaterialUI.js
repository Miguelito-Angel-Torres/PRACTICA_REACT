import React from 'react';
import MediaCard from "./MaterialCard"
import PersistentDrawerLeft  from "./MaterialDrawer"
export default function MaterialUi({titulo}){
    return(
        <>
            <h2>{titulo}</h2>
            <MediaCard/>
            <PersistentDrawerLeft />

        </>
    )
}

MaterialUi.defaultProps = {
    titulo:"Material UI"
}