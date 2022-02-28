import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './Components/SeasonDisplay';
import Spinner from './Components/Spinner';

class App extends React.Component {

    state = {
        latitude: null,
        errorMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message }),
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error : {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return <div><SeasonDisplay latitude={this.state.latitude} ></SeasonDisplay></div>
        }
        return <div><Spinner message="Please accept the location"></Spinner></div>
    }

    render() {
        return (
            <div>{this.renderContent()}</div>
        )
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)