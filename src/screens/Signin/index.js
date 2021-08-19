import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Keyboard, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import styles from './styles';


function Signin() {
    const { signIn } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass, setHidePass] = useState(true)
    const navigation = useNavigation();

    function handleSignIn() {
        signIn(email, password, nome)
    }

    return (
    // <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.inputTxt} >
                    <TextInput placeholder="Digite seu nome" style={styles.input} onChangeText={(e) => setNome(e)} />
                </View>
                <View style={styles.inputTxt} >
                    <TextInput placeholder="Seu E-mail" style={styles.input} onChangeText={(e) => setEmail(e)} />
                </View>

                <View style={styles.inputSenha}>
                    <TextInput secureTextEntry={hidePass} value={password} placeholder="Senha" style={styles.input} onChangeText={(e) => setPassword(e)} />
                    <TouchableOpacity style={styles.iconSenha} onPress={ () => setHidePass(!hidePass)}>
                    {hidePass ?
                        <Text>Show</Text>
                        :
                        <Text>Hide</Text>
                    }
                    </TouchableOpacity>
                </View>



                <View style={styles.msgCadastro}>


                    <TouchableOpacity onPress={handleSignIn} style={styles.btn}>
                        <Text style={styles.msgBtn}>Cadastre-se</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.msgCadastro}>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.msgBtnGreen}>Já possuo cadastro</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View>

    // </TouchableWithoutFeedback>
    );
}

export default Signin;

