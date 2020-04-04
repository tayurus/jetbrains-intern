import React from 'react';
import './LaunchInfo.scss';
import {calcTimeToLaunch} from './../../helpers';
import PropTypes from 'prop-types';

export class LaunchInfo extends React.Component {
    componentDidMount() {
        this.descriptor = setInterval(() => {
            this.setState({});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.descriptor);
    }

    render() {
        const {
            mission,
            launch: {years, months, date, hours, minutes},
            vehicle,
            location
        } = this.props;

        const launchDate = new Date(years, months, date, hours, minutes);

        return (
            <tr className='launch-info'>
                <td className='launch-info__cell'>{mission}</td>
                <td className='launch-info__cell'>{vehicle}</td>
                <td className='launch-info__cell'>{location}</td>
                <td className='launch-info__cell'>{launchDate.toGMTString()}</td>
                <td className='launch-info__cell'>{calcTimeToLaunch(launchDate)}</td>
            </tr>
        );
    }
}

LaunchInfo.propTypes = {
    mission: PropTypes.string,
    launch: PropTypes.shape({
        years: PropTypes.number,
        months: PropTypes.number,
        date: PropTypes.number,
        hours: PropTypes.number,
        minutes: PropTypes.number
    }),
    vehicle: PropTypes.string,
    location: PropTypes.string
};

LaunchInfo.defaultProps = {
    mission: 'Unknown'
};
