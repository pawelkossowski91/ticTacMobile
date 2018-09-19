import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
export default class Note extends Component {
    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                <TouchableOpacity onPress={this.props.deleteFunction} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>del.</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 22,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#3d3c3c'
        
    },
    noteText: {
        // paddingLeft: 10,
        fontWeight: 'bold',
      
    },
    noteDelete: {
        borderRadius: 15,
        fontWeight: 'bold',

        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: '#3d3c3c'
        
    }
});