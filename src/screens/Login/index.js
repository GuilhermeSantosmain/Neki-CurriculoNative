import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles'
import { AuthContext } from '../../contexts/auth'


function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidePass, setHidePass] = useState(true)
    const { logIn } = useContext(AuthContext)

    function handleLogin() {
        logIn(email, password)       
    }

    return (
        <View style={styles.inputs}>
            <View style={styles.inputTxt}>
                <TextInput type="email" value={email} placeholder="E-mail" onChangeText={(e) => setEmail(e)} />
            </View>
            <View style={styles.inputSenha}>
                <TextInput style={styles.input} secureTextEntry={hidePass} value={password} placeholder="Senha" onChangeText={(e) => setPassword(e)} />
                <TouchableOpacity style={styles.iconSenha} onPress={() => setHidePass(!hidePass)}>
                    {hidePass ?
                        <Text>Show</Text>
                        :
                        <Text>Hide</Text>
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.btnLogin}>
                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                    <Text style={styles.txt}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.msgCadastro}>
                    <Text style={styles.msg}>Ainda não tem cadastro? </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                        <Text style={styles.msgBtn}>Cadastre-se</Text>

                    </TouchableOpacity>
                </View>

        </View>

        // </TouchableWithoutFeedback>
    );
}

export default Login;