import React, { Component } from 'react';
import Note from './Element';


import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';


export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            emptyArr: [],
            emptyText: '',
        };
    }
    render() {
       
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
    addNote(){
        if(this.state.emptyText){
            var d = new Date();
            this.state.emptyArr.push({
                'note': this.state.emptyText
            });
            this.setState({ emptyArr: this.state.emptyArr });
            this.setState({emptyText:''});
        }
    }
    deleteLi(key){
        this.state.emptyArr.splice(key, 1);
        this.setState({emptyArr: this.state.emptyArr});
    }
}
const styles = StyleSheet.create({
    
    header: {
        backgroundColor: '#0080ff',
        alignItems: 'center',
        justifyContent:'center',
     
    },
    container: {
        backgroundColor: '#ffb347',
        flex: 1,
        
    },
    headerText: {
        color: 'orange',
        fontFamily: 'Montserrat',
        justifyContent: 'center',
        fontWeight: 'bold',

        fontSize: 18,
        padding: 6
    },
   
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 10,
        backgroundColor: '#3d3c3c',
        // borderTopWidth:2,
        // borderTopColor: '#ededed'
        
    },

    scrollContainer: {
        flex: 1,
        marginBottom: 90
    },

    addButton: {
        // borderTopColor: 'red',
        position: 'absolute',
        zIndex: 11,
        right: 150,
        // center: 0,
        bottom: 39,
        
        backgroundColor: '#ff8547',
        width: 60,
        height: 60,
        borderRadius: 15,

        fontWeight: 'bold',


        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',

        fontSize: 27
    }
});