import {Text, View, TextInput, TouchableOpacity} from "react-native"

import { styles } from "./styles"

export default function Home(){
    function handleParticipantAdd(){
        console.log("Você acabou de adicionar!")
    }
    function handleParticipantRemove(){
        console.log("Você acabou de remover!")
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.eventName}> Teste de APP </Text>
            <Text style = {styles.eventDate}> React Native </Text>

            <View style = {styles.form}>
                <TextInput style = {styles.input}
                placeholder="Insira a sua senha"
                placeholderTextColor = "#FFFFFF"
                />

                <TouchableOpacity style = {styles.buttonAdd} onPress={handleParticipantAdd}>
                    <Text style = {styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.buttonRemove} onPress={handleParticipantRemove}>
                    <Text style = {styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}