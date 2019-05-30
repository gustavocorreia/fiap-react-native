import React from 'react'
import { SafeAreaView } from 'react-navigation';

export default class Drivers extends React.Component {
    state = {
        results: 0,
    };

    componentDidMount(){
        const season = this.props.navigation.getParam('season');

        this.setState({
            results: season
        });
    }

    render(){
        return(
            <SafeAreaView>
            
            </SafeAreaView>
        );
    }
}