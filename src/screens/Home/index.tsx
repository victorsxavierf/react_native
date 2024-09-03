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

            <TextInput style = {styles.input}
            placeholder="Insira a sua senha"
            placeholderTextColor = "#FFFFFF"
            />
            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.button1} onPress={handleParticipantAdd}>
                    <Text style = {styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button2} onPress={handleParticipantRemove}>
                    <Text style = {styles.buttonText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}