import React from 'react';
import { StyleSheet } from 'react-native';

import Seasons from '../../components/Seasons';

import { SafeAreaView } from 'react-navigation';

export default class Home extends React.Component {
    constructor(props){
        super(props);

        this.redirectTo = this.redirectTo.bind(this);
    }

    static navigationOptions = () => {
        return {
            title: 'Home'
        };
    }
  
    redirectTo(season){
        this.props.navigation.navigate('Races', { 
            season
        });
    }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Seasons onHandleData={ this.redirectTo } />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
