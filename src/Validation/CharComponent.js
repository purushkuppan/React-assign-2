import React from 'react';

const CharComp = (probs) => {
    const per = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        border: '1px solid green'

}
   return ( <div style={per} onClick={probs.click}>
        <h6>{probs.inletter}</h6>
    </div>)
}

export default CharComp;