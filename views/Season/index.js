import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Text } from 'native-base';

export default class Season extends React.Component{
    state = {
        results: 0,
    };

    componentDidMount(){
        const season = this.props.navigation.getParam('season');

        this.setState({
            results: season
        });
    }

    redirectToRaces(){
        this.props.navigation.navigate('Races', { 
            season: this.state.results
        });
    }

    redirectToDrivers(){
        this.props.navigation.navigate('Drivers', {
            season: this.state.results
        });
    }

    render(){
        return (
            <SafeAreaView>
                <Button onPress={this.redirectToRaces}>
                    <Text>Corridas</Text> 
                </Button>
                <Button onPress={ this.redirectToDrivers }>
                    <Text>Pilotos</Text> 
                </Button>
            </SafeAreaView>
        );
    }

}