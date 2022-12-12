import React from "react";

import { Waveform } from '@uiball/loaders'

function Loader(){
    return (
        <>
        <button class="btn btn-secondary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
        </button>
        <button class="btn btn-secondary" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        </>
    )
        
}

export default Loader


///<Waveform size={40} ineWeight={3.5} speed={1} color="black"/>