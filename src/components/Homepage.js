import React from 'react';
import fire from '../config/fire';
function HomePage () {
    const logout = () => {
        fire.auth().signOut();
    }
    return(
        <div>
            HomePage
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default HomePage;