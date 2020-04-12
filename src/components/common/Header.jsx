import React, { useContext } from 'react';
import SimpleContext from '../context/SimpleContext';
import { Badge } from 'react-bootstrap';


const Header = ({ appTitle }) => {
    const myContext = useContext(SimpleContext);
    const { persons } = myContext;

    let badgeStyle = "";

    if (persons.length >= 3) badgeStyle = "success"
    if (persons.length <= 2) badgeStyle = "warning"
    if (persons.length <= 1) badgeStyle = "danger"


    return (
        <div>
            <div>
                <h2>{appTitle}</h2>
                <p>You Saved
                            <Badge pill variant={badgeStyle} className="m-1 " >
                        {persons.length}
                    </Badge>
                    Member
                        </p>
            </div>

        </div>
    );
}

export default Header;