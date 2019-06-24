import React from 'react'
import { SafeAreaView } from 'react-navigation';
import { List, ListItem, Text } from 'native-base';

export default class Drivers extends React.Component {
    state = {
        results: [],
    };

    constructor(props){
        super(props);

        this.redirectTo = this.redirectTo.bind(this);
    }

    componentDidMount(){
        const season = this.props.navigation.getParam('season');

        this.getData(season);
    }

    getData(season){
        fetch(`http://ergast.com/api/f1/${season}/Drivers.json?limit=36`)
        .then((response) => response.json())
        .then((data) => {
           this.setState({
               results: data.MRData.DriverTable.Drivers
           });
        });
    }


    redirectTo(driverId){
        this.props.navigation.navigate('Driver', {
            driverId
        });
    }

    renderItem(item){
        return(
            <ListItem key={`driver_${item.driverId}`} onPress={() => this.redirectTo(item.driverId)} >
                <Text>
                    Nome: { item.givenName } { item.familyName } {"\n"}
                    Nacionalidade: { item.nationality } {"\n"}
                    Data de Nasc.: { item.dateOfBirth }
                </Text>
            </ListItem>
        );
    }

    render(){
        return(
            <SafeAreaView>
                <List>
                    { this.state.results.map(this.renderItem) }
                </List>
            </SafeAreaView>
        );
    }
}