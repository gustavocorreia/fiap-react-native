import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'native-base';

export default class Driver extends React.Component {

    state = {
        results: [],
    };

    componentDidMount(){
        const driverId = this.props.navigation.getParam('driverId');

        this.getData(driverId);
    }

    getData(driverId){
        fetch(`http://ergast.com/api/f1/drivers/${driverId}.json`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                results: data.MRData.DriverTable.Drivers
            });
        });
    }

    render(){
        const driver = this.state.results[0];
        return(
            <SafeAreaView>
                <Text>
                    Nome: { driver.givenName } { driver.familyName } {"\n"}
                    Nacionalidade: { driver.nationality } {"\n"}
                    Data de Nasc.: { driver.dateOfBirth }
                </Text>
            </SafeAreaView>
        );
    }
}