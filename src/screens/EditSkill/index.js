import React, { useState, useEffect, useContext } from 'react';
import NumericInput from 'react-native-numeric-input'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import { AuthContext } from '../../contexts/auth'
const EditSkill = (props) => {
    const { skill, http, getHabilidades, getHabilidadesNaoUsadas } = useContext(AuthContext)
    const [nivel, setNivel] = useState(skill.nivel)
    const navigation = useNavigation();
    function editarHabilidade() {

        http.put('usuario/editar/habilidade/' + nivel, skill)
            .then(response => {
                console.log(response.data)
                getHabilidades()
                getHabilidadesNaoUsadas()
                navigation.navigate('Home')

            }).catch(erro => {
                console.log(erro)
            })

    }

    return <View style={styles.inputs}>
        <Text style={[styles.txt, { color: "#000" }]} >Domínio de {skill.habilidade.nome}:</Text>
        <NumericInput value={nivel} onChange={value => setNivel(value)} minValue='1' maxValue='10' />
        <View style={styles.msgCadastro}>
            <TouchableOpacity style={styles.btn} onPress={editarHabilidade}>
                <Text style={styles.txt}>Atualizar</Text>
            </TouchableOpacity>
           
        </View>
    </View>
}
export default EditSkill;