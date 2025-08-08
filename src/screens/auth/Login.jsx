import { StyleSheet, Text, View, TextInput, Pressable, Dimensions, Switch } from 'react-native'
import { colors } from '../../global/colors';
import { useState, useEffect } from 'react';
import { TextDeliusBold } from '../../components/TextDeliusBold';
import { TextDeliusSwashCapsRegular } from '../../components';
import { useLoginMutation } from '../../services/auth/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user/userSlice';
import { saveSession, clearSession } from '../../db';

const textInputWidth = Dimensions.get('window').width * 0.7

const Login = ({ navigation, route }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [persistSession, setPersistSession] = useState(false)
    const [triggerLogin, result] = useLoginMutation()

    const dispatch = useDispatch()
    const onsubmit = () => {
        triggerLogin({ email, password })
    }
    console.log(result)
    console.log(persistSession);

    useEffect(() => {
        if (result.status === "fulfilled") {
            dispatch(setUser({ email: result.data.email, localId: result.data.localId }))
        }
    }, [result]);


    useEffect(() => {
        const saveLoginSession = async () => {
            if (result.status === "fulfilled") {
                try {
                    const { localId, email } = result.data;

                    if (persistSession) {
                        await saveSession(localId, email);
                    } else {
                        await clearSession();
                    }
                    dispatch(setUser({ localId, email }));
                } catch (error) {
                    console.log("Error al guardar sesión:", error);
                }
            } else if (result.status === "rejected") {
                console.log("Hubo un error al iniciar sesión");
            }
        };
        saveLoginSession();
    }, [result]);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vibrar con la Luna</Text>
            <TextDeliusBold style={styles.subTitle}>Login</TextDeliusBold>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor={colors.light.shadowColor}
                    placeholder="Email"
                    style={styles.textInput}
                />
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor={colors.light.shadowColor}
                    placeholder='Password'
                    style={styles.textInput}
                    secureTextEntry
                />
            </View>
            <View style={styles.footTextContainer}>
                <TextDeliusSwashCapsRegular style={styles.accentTxt}>Do you not have an account?</TextDeliusSwashCapsRegular>
                <Pressable onPress={() => navigation.navigate('Signup')}>
                    <TextDeliusSwashCapsRegular style={
                        {
                            ...styles.accentTxt,
                            ...styles.underLineText
                        }
                    }>
                        Sign up!
                    </TextDeliusSwashCapsRegular>
                </Pressable>
            </View>

            <Pressable style={styles.btn} onPress={onsubmit}><TextDeliusBold style={styles.btnText}>Enter</TextDeliusBold></Pressable>
            <View style={styles.rememberMe}>
                <TextDeliusSwashCapsRegular style={{ fontSize: 16, color: colors.light.shadowColor }}>Remember me</TextDeliusSwashCapsRegular>
                <Switch
                    onValueChange={() => setPersistSession(!persistSession)}
                    value={persistSession}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                />
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.light.headline,
        fontFamily: 'Pacifico-Regular',
        fontSize: 40,
        letterSpacing: 1,
    },
    subTitle: {
        fontSize: 24,
        color: colors.light.darkBlue,
        letterSpacing: 1,
    },
    inputContainer: {
        gap: 16,
        margin: 16,
        marginTop: 48,
        alignItems: 'center',
    },
    textInput: {
        fontFamily: 'DeliusSwashCaps-Regular',
        textAlign: 'left',
        width: 240,
        padding: 8,
        paddingLeft: 16,
        borderRadius: 16,
        backgroundColor: colors.light.darkBlue,
        color: colors.light.tags,
    },
    footTextContainer: {
        flexDirection: 'row',
        gap: 4,
    },
    accentTxt: {
        color: colors.light.shadowColor,
    },
    underLineText: {
        textDecorationLine: 'underline',
    },
    btn: {
        paddingVertical: 8,
        paddingHorizontal: 32,
        backgroundColor: colors.light.purchaseBtn,
        borderRadius: 16,
        marginVertical: 24,
    },
    btnText: {
        alignItems: 'center',
        color: colors.light.darkBlue,
        fontSize: 20,
        textTransform: 'uppercase'
    },
    // error: {
    //     padding: 16,
    //     backgroundColor: colors.red,
    //     borderRadius: 8,
    //     color: colors.white
    // },
    rememberMe: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 4
    }
})