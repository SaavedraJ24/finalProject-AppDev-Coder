import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../global/colors";
import { TextDeliusBold } from "../TextDeliusBold";
import { useNavigation } from "@react-navigation/native";
import { clearSession } from "../../db";
import { clearUser } from "../../features/user/userSlice";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useDispatch, useSelector } from "react-redux";

export const Header = ({ title, subtitle }) => {
    const navigate = useNavigation();
    const canGoBack = navigate.canGoBack();
    const user = useSelector(state => state.userReducer.userEmail);
    const dispatch = useDispatch();
    
    const handleClearSession = async () => {
        try {
            const result = await clearSession();
            dispatch(clearUser());
        } catch {
            console.error(error);
        }
    }
    
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
            {
                user
                &&
                <Pressable onPress={handleClearSession}>
                    <EvilIcons name="close-o" size={44} style={styles.btnExit} />
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
    },
    btnExit: {
        
    }
})
