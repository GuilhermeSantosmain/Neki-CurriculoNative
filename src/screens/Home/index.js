import React, { useState, useEffect, useContext } from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth'
import { DataTable } from 'react-native-paper';
import styles from '../Login/styles';
import CadastroSkill from '../../components/CatalogoSkills'

const Home = () => {
  const { user, skills, logOut, getHabilidades, getHabilidadesNaoUsadas, http, setSkill } = useContext(AuthContext)

  useEffect(() => {
    getHabilidades()
    getHabilidadesNaoUsadas()
  }, [])

  const navigation = useNavigation();
  const [shouldShow, setShouldShow] = useState(false)

  
  function navCadastroSkill() {
    navigation.navigate('CadastroSkill')
  }
  function navEditSkill(skill) {
    setSkill(skill)
    navigation.navigate('EditSkill')
  }
  function adicionaHabilidade(habilidade) {
    http.post('usuario/adiciona/'+habilidade.id, user)
      .then(response => {
        console.log(response.data)
        getHabilidades()
        getHabilidadesNaoUsadas()

      }).catch(erro => {
        console.log(erro)
      })

  }
  
  function removerHabilidade(idHabilidade) {
    console.log(idHabilidade);
    console.log(user);
    http.post('usuario/remove/' + idHabilidade, user)
      .then(response => {
        getHabilidades()
        getHabilidadesNaoUsadas()

      }).catch(erro => {
        console.log(erro)
      })

  }
  if(user){
  return (
    <View>

      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
         
          <TouchableOpacity onPress={navCadastroSkill}>
            <Text style={{padding: 8, borderColor:'#000', borderWidth:1, borderRadius:20, margin:10}}>Cadastro de skill</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => logOut()}>
            <Text style={{padding: 8, borderColor:'#000', borderWidth:1, borderRadius:20, margin:10}}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.txt, {color: '#000', textAlign: "center"}]}>{user.nome}</Text>

        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>#</DataTable.Title>
              <DataTable.Title>Skill</DataTable.Title>
              <DataTable.Title>Domínio</DataTable.Title>
              <DataTable.Title>-</DataTable.Title>
              <DataTable.Title>-</DataTable.Title>
            </DataTable.Header>
            {skills.map((skill) => {

              return (
                <View>
                  <DataTable.Row>
                    <DataTable.Cell>
                      <Image source={skill.habilidade.imagem} />
                    </DataTable.Cell>
                    <DataTable.Cell>{skill.habilidade.nome}</DataTable.Cell>
                    <DataTable.Cell>{skill.nivel}</DataTable.Cell>
                    <DataTable.Cell >
                      <TouchableOpacity onPress={() => navEditSkill(skill)}>
                        <Text style={{color: '#191970'}}>Editar</Text>
                      </TouchableOpacity>
                    </DataTable.Cell>
                    <DataTable.Cell>
                      <TouchableOpacity onPress={() => removerHabilidade(skill.id)}>
                        <Text  style={{color: '#DC143C'}}>Remover</Text>
                      </TouchableOpacity>
                    </DataTable.Cell>

                  </DataTable.Row>


                </View>
              )
            })}

          </DataTable>

        </View>
        <View style={styles.btnLogin}>
                <TouchableOpacity style={styles.btn} onPress={() => setShouldShow(!shouldShow)}>
                    <Text style={styles.txt}>Catalogo Skills</Text>
                   
                </TouchableOpacity>
            </View>
        
            <CadastroSkill shouldShow={shouldShow} adicionaHabilidade={adicionaHabilidade} />
        
        
        
      </ScrollView>


    </View>
      )
  }else{
    return null
  }
}

      export default Home;