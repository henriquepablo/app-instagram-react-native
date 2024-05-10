import React, {Component} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from "../styles/list";

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data 
        }
    }

    render() {
        return(
            <View style={style.areaFeed}>
                
            <View style={style.viewPerfil}>
                <Image source={{uri: this.state.feed.imgperfil}}
                style={style.fotoPerfil}
                />
                <Text style={style.nomeUsuario}>{this.state.feed.nome}</Text>
            </View>

            <Image 
                resizeMode="cover"
                style={style.fotoPublicacao} 
                source={{uri: this.state.feed.imgPublicacao}}
            /> 

            <View style={style.areaBtn}>
                <TouchableOpacity>
                    <Image style={style.iconeLike} source={require('../img/like.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={style.btnSend}>
                    <Image style={style.iconeLike} source={require('../img/send.png')} />
                </TouchableOpacity>
            </View>

            <View style={style.viewRodape}>
                <Text style={style.nomeRodape}>
                    {this.state.feed.nome}
                </Text>
                <Text style={style.descRodape}>
                    {this.state.feed.descricao}
                </Text>
            </View>

            </View>
        );
    }
}