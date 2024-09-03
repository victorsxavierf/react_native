import {Text, View} from "react-native"

import { styles } from "./styles"

export default function Home(){
 return(
    <View style = {styles.container}>
        <Text style = {styles.eventName}> Teste de APP </Text>
        <Text style = {styles.eventDate}> React Native </Text>
    </View>
 )
}