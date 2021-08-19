import React, { createContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export const AuthContext = createContext({})
const AuthProvider = ({ children }) => {    
    const navigation = useNavigation();
    const [user, setUser] = useState(null)    
    const [skill, setSkill] = useState({}) 
    const [skills, setSkills] = useState([])    
    const [skillsUnused, setSkillsUnused] = useState([])
    const http = axios.create({
        baseURL: 'http://192.168.1.65:8080',
    })

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user')
            if (storageUser) {
                setUser(JSON.parse(storageUser))
            }

        }
        loadStorage()

    }, [])

    async function logIn(email, password) {
        const usuario = {
            email: email,
            senha: password
        }
        http.post('usuario/login', usuario)
            .then(response => {
                setUser(response.data) 
                console.log(response.data.habilidades) 
                navigation.navigate('Home')

            }).catch(erro => {
                console.log(erro)
                setLoginStatus(true)
            })
}
    async function signIn(email, password, nome) {
        const usuario = {
            email: email,
            senha: password,
            nome: nome
        }
        http.post('usuario', usuario)
        .then(response => {
            console.log(response.data.habilidades) 
            navigation.navigate('Login')

        }).catch(erro => {
            console.log(erro)
        })
    }

    async function logOut() {
        navigation.navigate('Login')
        setUser(null)
    }
    async function getHabilidades() {
        http.post('habilidade/usuario', user)
                .then(response => {                    
                    setSkills(response.data)
                    console.log(response.data) 
    
                }).catch(erro => {
                    console.log(erro)
                })
        
    }
    async function getHabilidadesNaoUsadas() {
        http.post('habilidade/unused', user)
                .then(response => {                    
                    setSkillsUnused(response.data)
                    console.log(response.data) 
    
                }).catch(erro => {
                    console.log(erro)
                })
        
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, logIn, logOut, skills, getHabilidades, getHabilidadesNaoUsadas, skillsUnused, skill, setSkill, http}} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;