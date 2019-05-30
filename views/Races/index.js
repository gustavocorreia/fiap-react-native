import React from 'react';
import { List, ListItem, Text } from 'native-base'
import { SafeAreaView } from 'react-navigation';

export default class Races extends React.Component{

    state = {
        results: [],
    };


    componentDidMount(){
        const season = this.props.navigation.getParam('season');
        
        this.getData(season);
    }

    getData(season) {
        fetch(`http://ergast.com/api/f1/${season}.json`)
        .then((response) => response.json())
        .then((data) => {
           this.setState({
               results: data.MRData.RaceTable.Races
           });
        });
    }

    renderItem(item){
        return (
            <ListItem key={ item.round }>
                <Text>Race: { item.raceName } {"\n"}
                      Round: { item.round } {"\n"}
                      Date: { item.date }</Text>
            </ListItem>
        );
    }

    render(){
        return (
            <SafeAreaView>
                <List>
                    { this.state.results.map(this.renderItem) }
                </List>
            </SafeAreaView>
        )
    }
}
