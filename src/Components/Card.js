import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${name}?set=set4`} width='200' height='200' alt='robots'/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;