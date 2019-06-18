import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

import style from './style';

class Seasons extends PureComponent {
    renderSeasons() {
        let items = [];


        for (let i = 1950; i < 2020; i++) {
            const year = i;
            items.push(
                <Button style={ style.button }
                    onPress={ () => this.props.onHandleData(year) }
                    key={ `season-${i.toString()}` }
                >
                    <Text>
                        { year } 
                    </Text>
                </Button>
            );
        }

        return items;
    }

    render() {
        return(
            <View style={ style.container }>
                { this.renderSeasons() }
            </View>
        );
    }
}

export default Seasons;