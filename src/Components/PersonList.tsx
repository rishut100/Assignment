import React from 'react';
import {Data} from './Interfaces';

interface PList{
    items : Data[]
}

const PersonList: React.FC<PList> = ({items} ) => {
    return (
        <div className="person-list mt-5">
            {items.map((item: Data) => {
                return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" key={item.id}>{item.email}</div>
                    </div>
                </div>
                ); 
            })}

        </div>
    );
}

export default PersonList;