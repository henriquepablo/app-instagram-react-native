import React, {Component} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from "../styles/list";

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data 
        }

        this.carregaIcone = this.carregaIcone.bind(this);
        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
    }

    mostraLikes(likers) {
        let feed = this.state.feed;

        if (feed.likers <= 0) return;

        return(
            <Text style={style.likes}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        );
    }

    like() {
        let feed = this.state.feed;

        if (feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            });
        }
        else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            });
        }
    }

    carregaIcone(likeada) {
        if (!likeada) return require('../img/like.png');
        return require('../img/likeada.png');
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
                <TouchableOpacity onPress={this.like}>
                    <Image style={style.iconeLike} source={this.carregaIcone(this.state.feed.likeada)} />
                </TouchableOpacity>
                <TouchableOpacity style={style.btnSend}>
                    <Image style={style.iconeLike} source={require('../img/send.png')} />
                </TouchableOpacity>
            </View>

            {this.mostraLikes(this.state.feed.likers)}

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