import {Text, View, TextInput} from "react-native"

import { styles } from "./styles"

export default function Home(){
 return(
    <View style = {styles.container}>
        <Text style = {styles.eventName}> Teste de APP </Text>
        <Text style = {styles.eventDate}> React Native </Text>

        <TextInput style = {styles.input}
        placeholder="Insira a sua senha"
        placeholderTextColor = "#FFFFFF"
        />
    </View>
 )
}