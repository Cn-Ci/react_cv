import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        Languages: [
            {id:1, value: "CSS", xp:1.3},
            {id:2, value: "Php", xp:1.3},
            {id:3, value: "Javascript", xp:0.5},
            {id:4, value: "Cobol", xp:0.1}
        ], 
        framework: [
            {id:1, value: "Bootstrap", xp:1.3},
            {id:2, value: "Symfony", xp:0.9},
            {id:3, value: "React", xp:0.1},
            {id:4, value: "Sass", xp:0.2}
        ]
    }

    render() {
        let {Languages, framework} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={Languages}
                    className="languageDisplay"
                    title="languages"
                />
                <ProgressBar 
                    languages={framework}
                    className="frameworkDisplay"
                    title="frameworks & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;