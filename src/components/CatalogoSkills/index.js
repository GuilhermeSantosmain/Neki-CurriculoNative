import React, { useState, useEffect, useContext } from 'react';
import { DataTable } from 'react-native-paper';
import {
    TouchableOpacity,
    View,
    ScrollView,
    Text,
    Image
  } from 'react-native';
  import { AuthContext } from '../../contexts/auth'
const CatalogoSkills = (props) => {    
  const {skillsUnused} = useContext(AuthContext)
  if(props.shouldShow){
    return<View>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>#</DataTable.Title>
                <DataTable.Title>Skill</DataTable.Title>
                <DataTable.Title>Descrição</DataTable.Title>
                <DataTable.Title>-</DataTable.Title>
              </DataTable.Header>
              {skillsUnused.map((skill) => {
  
                return (
                  <View>
                    <DataTable.Row style={{flexDirection: 'row'}}>
                        <Image
                          source={{uri: skill.imagem} }
                          style={{width: 50,
                            height: 50,
                            resizeMode: 'cover',
                            borderRadius: 10,
                            marginBottom: 8,
                            marginTop: 8,
                            marginRight: 12,

                          }} />
                      <DataTable.Cell>{skill.nome}</DataTable.Cell>
                      <DataTable.Cell>{skill.descricao}</DataTable.Cell>
                      <DataTable.Cell >
                        <TouchableOpacity onPress={() => props.adicionaHabilidade(skill)}>
                          <Text style={{color: '#32CD32'}}>Adicionar</Text>
                        </TouchableOpacity>
                      </DataTable.Cell>
  
  
                    </DataTable.Row>
  
  
                  </View>
                )
              })}
  
            </DataTable>
          </View>
  }else{
      return null
  }

}
export default CatalogoSkills;