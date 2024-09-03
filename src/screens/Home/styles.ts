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
        flex: 1,
        margin: 25,
        backgroundColor: '#333333',
        borderRadius: 5,
        height: 56,
        color: '#FFFFFF',
        paddingLeft: 8,
        marginRight: 20
        },

    form: {
        marginTop: 25,
        marginBottom: 36,
        flexDirection: 'row',
        width: '95%'
    },

    buttonText: {
        color: '#FFFFFF',
    },

    buttonAdd: {
        marginTop: 25,
        width: 56,
        height: 56,
        backgroundColor: '#195820',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonRemove: {
        marginTop: 25,
        width: 56,
        height: 56,
        backgroundColor: '#800020',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    }
});