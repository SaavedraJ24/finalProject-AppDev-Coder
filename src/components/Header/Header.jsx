import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/colors";
import { TextDeliusBold } from "../TextDeliusBold";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export const Header = ({ title, subtitle }) => {
    const navigate = useNavigation();
    const canGoBack = navigate.canGoBack();
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>{title}</Text>
            <TextDeliusBold style={styles.subtitle}>{subtitle}</TextDeliusBold>
            {
                canGoBack &&
                <Pressable onPress={() => navigate.goBack()}>
                    <EvilIcons name="arrow-left" size={40} style={styles.btnGoBack} />
                </Pressable>
            }
        </View>


    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: '5%',
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light.background,
    },
    title: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 40,
        color: colors.light.headline,
        resizeMode: 'contain',
    },
    subtitle: {
        fontSize: 24,
        color: colors.light.shadowColor,
        resizeMode: 'contain',
    },
    btnGoBack: {
        color: colors.light.shadowColor,
        position: 'absolute',
        right: '150',
        bottom: '-20',
    }
})
