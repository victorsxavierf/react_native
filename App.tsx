import {Text, View, StyleSheet} from "react-native"

export default function App(){
 return(
    <View style = {styles.container}>
        <Text style = {styles.eventName}> Teste de APP </Text>
        <Text style = {styles.eventDate}> React Native </Text>
    </View>
 )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151515'
    },

    eventName: {
        marginTop: 50,
        color: '#FFFFFF',
        fontSize: 26,
        textAlign: "center"
    },

    eventDate:{
        color: '#195820',
        fontSize: 26,
        textAlign: "center"
    }
});