import React from 'react';

import { 
    Alert,
    Button,
    StyleSheet, 
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    AppRegistry,
    Image,
} from 'react-native';

// import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
// import { Icon } from 'react-native-elements';
// import { AppRegistry, View, Image } from 'react-native';
///////////////////



export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        //info który gracz
          gameState:   [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ],
          turn:1,
        }
    };

    componentDidMount(){
        this.initGame();
    };

    initGame = () => {
        this.setState({gameState:
            [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ],
            turn: 1,
        });
      
        
    };


whoWin = () => {
    var sum;
    var myArr= this.state.gameState;

    //line checking
    for (let i=0;i<3;i++){
        sum = myArr[i][0]+myArr[i][1]+myArr[i][2];
        if (sum == 3){
            return 1;
        }else if (sum == -3){
            return -1;
        }
    }
// colums
    for (let i=0;i<3;i++){
        sum = myArr[0][i]+myArr[1][i]+myArr[2][i];

        if (sum == 3){
            return 1;
        }else if (sum == -3){
            return -1;
        }

    }
// przek
sum = myArr[2][0]+myArr[1][1]+myArr[0][2];

    if (sum == 3){
        return 1;
    }else if (sum == -3){
        return -1;
    }
////////////
sum = myArr[0][0]+myArr[1][1]+myArr[2][2];

    if (sum == 3){
        return 1;
    }else if (sum == -3){
        return -1;
    }
//--remis
    return 0;
};
////////////////////////////////




renederImg = (line,col) => {
    let val= this.state.gameState[line][col];
    switch(val){
        case 1: return <Image source={require('./img/img2.png')}/>;
        case -1: return <Image source={require('./img/img.png')}/>;
        default: return <View></View>;
    }
};
oneMoreTime=()=>{
    this.initGame();  
;}
whenImgPress = (line,col) => {
    // only one press  - button
    let val = this.state.gameState[line][col];
    // (val >0 || val<0)
    // val !== 0
        if (val >0 || val<0) {
            return;}

    // Alert.alert('działa');
    let turn = this.state.turn;

    let myArr = this.state.gameState.slice();
    myArr[line][col] = turn;
    this.setState({gameState: myArr});
    // sec. player switchingn
    // sec. player switchingn
    let nextPlayer= (turn === 1)? -1 : 1;
    this.setState({turn: nextPlayer});

    // finalWinner function call:
    let finalWinner = this.whoWin();
    if (finalWinner == 1 ){
        Alert.alert('The finalWinner is: Player one!');
        this.initGame();
    }else if (finalWinner == -1){
        Alert.alert('The finalWinner is: Player two!');
        this.initGame();

    }
    // else {
    //     Alert.alert('No one win.');
    //     this.initGame();

    // }

;}
////////////////


    render(){
        return (
            <View style={styles.container}>
            {/* <Image source={require('./img/img.png')}/>   */}

            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>this.whenImgPress(0,0) } style={[styles.title, {borderLeftWidth:0 ,borderTopWidth:0}]}>
                    {/* <Image source={require('./img/img2.png')}/>  */}
                    {this.renederImg(0,0)}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.whenImgPress(0,1) }  style={[styles.title, {borderTopWidth:0}]}>
                    {/* <Image source={require('./img/img.png')}/>  */}
                    {this.renederImg(0,1)}
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>this.whenImgPress(0,2) } style={[styles.title, {borderRightWidth:0 ,borderTopWidth:0}]}>
                    {this.renederImg(0,2)}

                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity  onPress={()=>this.whenImgPress(1,0) }  style={[styles.title,{borderLeftWidth:0}]}>
                    {this.renederImg(1,0)}
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>this.whenImgPress(1,1) } style={styles.title}>
                    {this.renederImg(1,1)}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.whenImgPress(1,2) }  style={[styles.title,{borderRightWidth:0}]}>
                {this.renederImg(1,2)}
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity  onPress={()=>this.whenImgPress(2,0) } style={[styles.title,{borderLeftWidth:0},{borderBottomWidth:0}]}>
                {this.renederImg(2,0)}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.whenImgPress(2,1) }  style={[styles.title,{borderBottomWidth:0}]}>
                {this.renederImg(2,1)}
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.whenImgPress(2,2) }  style={[styles.title,{borderRightWidth:0},{borderBottomWidth:0}]}>
                {this.renederImg(2,2)}
                </TouchableOpacity>
                
            </View>
            
            <View style={styles.last}>  

            </View>

            <Button
                style={styles.myButt}
                onPress={this.oneMoreTime}
                title="try one more time."
                color="#841584"
                
                />

            </View>
        ); 
    }
};
///////////


///////////////
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
        
      
     
    },

    title: {
        
        borderWidth: 5,
        borderStyle: 'dotted',
        width: 100,
        height: 100,
        // padding-right: 0.5em;
        borderColor: 'grey',
        paddingBottom: 10

    },
    myButt: {
        paddingTop: 10,
    },
    last: {
       padding: 50, 
    }


});