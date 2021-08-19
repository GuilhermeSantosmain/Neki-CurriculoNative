import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../helpers/dimensions";

const styles = StyleSheet.create({
    inputs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputTxt: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        width: windowWidth / 1.5,
        padding: 5,
        marginBottom: windowHeight / 30,
    },

    inputSenha:{

        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        width: windowWidth / 1.5,
        padding: 5,
        marginBottom: windowHeight / 30,
        flexDirection: 'row'
    },

    iconSenha:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },

    input: {
        width: '80%',
        height: windowHeight / 15,
        padding: 10
    },

    msgCadastro: {
        marginTop: windowHeight / 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    msg: {
        fontSize: 16
    },

    msgBtn: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        padding: 10,
    },

    btn: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth / 1.8,
        backgroundColor: '#000',
    }

});

export default styles;