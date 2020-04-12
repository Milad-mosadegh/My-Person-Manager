import React, { useContext } from 'react';

import SimpleContext from '../context/SimpleContext';



const NewPerson = () => {

    const context = useContext(SimpleContext);


    return (
        // <SimpleContext.Consumer>
        //     {context => (
        <div >
            <form className="form-inline justify-content-center" onSubmit={e => e.preventDefault()}>
                <div className="input-group w-50 mb-5">
                    <input
                        type="text"
                        placeholder="New Person"
                        className="form-control"
                        onChange={context.setPerson}
                        value={context.person}
                    />
                    <button type="submit" className="fa fa-plus btn btn-primary" onClick={context.handleNewPerson}></button>
                </div>
            </form>

        </div>
        //     )}
        // </SimpleContext.Consumer>
    );
}

export default NewPerson;