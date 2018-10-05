import React from 'react';

const Validation = (probs) => {
    if(probs.textval && probs.textval.length > 5) {
        return <h6>Length is high</h6>
    } else {
        return <h6>Length long enough</h6>
    }
}

export default Validation;