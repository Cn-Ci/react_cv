import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-futbol"></i>
                    <span>Football</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-car"></i>
                    <span>Voitures</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-gamepad"></i>
                    <span>Jeux Vidéo</span>
                </li>
                <li className="hobby">
                    <i className="fab fa-twitter-square"></i>
                    <span>Social Media</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-film"></i>
                    <span>Séries TV</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;