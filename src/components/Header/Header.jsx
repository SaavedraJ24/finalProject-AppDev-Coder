import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/colors";

export const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>Categories</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 40,
        color: colors.light.headline,
    },
    subtitle: {
        fontFamily: 'DeliusSwashCaps-Regular',
        fontSize: 20,
    }
})
