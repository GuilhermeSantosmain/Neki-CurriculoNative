import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../helpers/dimensions'
const styles = StyleSheet.create({
    inputs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cxtTxt: {
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
        padding: 3,
        textDecorationLine: 'none'
    },

    msgCadastro: {
        marginTop: 20,
        flexDirection: 'row',
    },

    msg: {
        fontSize: 16
    },

    msgBtn: {
        fontSize: 16,
        color: '#29d97b'
    },

    btn: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth / 1.8,
        backgroundColor: '#000',
    },

    txt: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        padding: 10,
    },

    btnLogin: {
        marginTop: windowHeight / 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
       
});

export default styles;