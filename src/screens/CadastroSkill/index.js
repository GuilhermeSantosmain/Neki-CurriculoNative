import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Keyboard, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { AuthContext } from '../../contexts/auth'


function CadastroSkill() {    
    const { http, getHabilidades, getHabilidadesNaoUsadas } = useContext(AuthContext)
    const [descricao, setDescricao] = useState('')
    const [nome, setNome] = useState('')
    const [url, setUrl] = useState('')
    const navigation = useNavigation();

    function handleCadastroSkill() {
        const habilidade = {
            nome: nome,
            descricao: descricao,
            imagem: url
        }
    http.post('habilidade', habilidade)
    .then(response => { 
navigation.navigate('Home')
getHabilidades()
getHabilidadesNaoUsadas()

    }).catch(erro => {
        console.log(erro)
    })
    }

    return (
    // <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
        <View style={styles.inputs}>

            <View style={styles.txts}>
                <View style={styles.inputTxt} >
                    <TextInput placeholder="Nome da skill" style={styles.input} onChangeText={(e) => setNome(e)} />
                </View>
                <View style={styles.inputTxt} >
                    <TextInput placeholder="Descricao" style={styles.input} onChangeText={(e) => setDescricao(e)} />
                </View>
            
                <View style={styles.inputTxt} >
                    <TextInput placeholder="URL da imagem" style={styles.input} onChangeText={(e) => setUrl(e)} />
                </View>



                <View style={styles.msgCadastro}>


                    <TouchableOpacity onPress={handleCadastroSkill} style={styles.btn}>
                        <Text style={styles.msgBtn}>Cadastrar</Text>

                    </TouchableOpacity>
                </View>
            </View>

        </View>

    // </TouchableWithoutFeedback>
    );
}

export default CadastroSkill;

