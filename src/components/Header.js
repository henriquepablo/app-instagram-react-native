import react, { Component } from "react";
import { View, Image, TouchableOpacity} from "react-native";
import style from "../styles/header";

export default class Header extends Component {
    render() {
        return(
            <View style={style.header}>
                <TouchableOpacity>
                    <Image style={style.logo} source={require('../img/logo.png')} />  
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image style={style.send} source={require('../img/send.png')} />  
                </TouchableOpacity>
                
            </View>
        );
    }
}