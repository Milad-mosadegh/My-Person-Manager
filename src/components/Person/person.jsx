import React from 'react';
import '../../App.css'
import Zoom from 'react-reveal/Zoom';

const Person = ({ fullname, personDelete, nameChanger }) => {
    return (
        <Zoom >
            <div className="container d-flex mb-2 shadow-lg p-4 gooshe">
                <div className="input-group" onChange={nameChanger}>
                    <input className="form-control" onChange={nameChanger} type="text" value={fullname} />
                    <button className="btn btn-danger  fa fa-trash" onClick={personDelete} ></button>
                    {/* <button className="btn btn-success  fa fa-pencil" onClick={nameChanger} ></button> */}
                </div>
            </div >
        </Zoom>

    );
}

export default Person; 