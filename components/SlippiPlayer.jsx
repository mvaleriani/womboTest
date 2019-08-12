import React from 'react'
import {SlippiVisualizer} from 'react-slippi-visualizer';

const SlippiPlayer = (props) => {

    const [player, setPlayer] = React.useState(undefined)
    const [rawSlp, setRawSlp] = React.useState(undefined)


    React.useEffect(() => {
        if (rawSlp !== undefined) {
            // debugger
            setPlayer(<SlippiVisualizer replay={ rawSlp }/>)
        }
    }, [rawSlp]);

    return (
        <div>
            { player }
            <input type="file" id="slp-upload" accept=".slp" onChange={(e) => { setRawSlp(e.target.files[0]) }}/>
        </div>
    );
}

export default SlippiPlayer;