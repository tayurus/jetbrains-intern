import React from 'react';
import './App.scss';
import {LaunchInfo} from './components';

class App extends React.Component {
    state = {
        entries: []
    };

    async componentDidMount() {
        const response = await fetch(
            'https://raw.githubusercontent.com/denissokolov/tc-internship-task/master/launches.json'
        );
        const data = await response.json();
        this.setState({entries: data});
    }

    render() {
        return (
            <table className={'app__table'}>
                <tr>
                    <th>Mission</th>
                    <th>Vehicle</th>
                    <th>Location</th>
                    <th>Launch date</th>
                    <th>Time to / from launch</th>
                </tr>
                {this.state.entries.map((it, index) => (
                    <LaunchInfo {...it} />
                ))}
            </table>
        );
    }
}

export default App;
