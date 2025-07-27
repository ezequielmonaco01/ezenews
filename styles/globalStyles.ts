import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    disabledText: {
        color: 'gray',
        fontSize: 16,
    },
    disabledContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default globalStyles;