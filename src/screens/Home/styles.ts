import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    },

    input: {
        margin: 25,
        backgroundColor: '#333333',
        borderRadius: 5,
        height: 40,
        color: '#FFFFFF',
        paddingLeft: 8
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    buttonText: {
        color: '#FFFFFF',
    },

    button1: {
        width: 70,
        height: 35,
        backgroundColor: '#195820',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 25
    },

    button2: {
        width: 70,
        height: 35,
        backgroundColor: '#800020',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 25
    }
});