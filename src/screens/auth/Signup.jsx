import { StyleSheet, Text, View, TextInput, Pressable, Dimensions } from 'react-native'
import { colors } from '../../global/colors'
import { useEffect, useState } from 'react';
import { TextDeliusBold } from '../../components/TextDeliusBold';
import { TextDeliusSwashCapsRegular } from '../../components';
import { signupSchema } from '../../validations/yupSchema';

const textInputWidth = Dimensions.get('window').width * 0.7

const Signup = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [triggerSignUp, result] = useSignupMutation()

    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

    useEffect(() => {
        if (result.status === "fulfilled") {
            console.log("Usuario creado exitosamente")
            navigation.navigate("Login", { message: "Usuario creado con éxito" })
        } else if (result.status === "rejected") {
            console.log("Hubo un error al crear el usuario")
        }
    }, [result])


    const onsubmit = () => {
        try {
            signupSchema.validateSync({ email, password, confirmPassword })
            setErrorEmail("")
            setErrorPassword("")
            setErrorConfirmPassword("")
            triggerSignUp({ email, password })
        } catch (error) {
            switch (error.path) {
                case "email":
                    setErrorEmail(error.message)
                    break
                case "password":
                    setErrorPassword(error.message)
                    break
                case "confirmPassword":
                    setErrorConfirmPassword(error.message)
                    break
                default:
                    break
            }
        }
        triggerSignUp({ email, password });
    }


    return (
        <View style={styles.gradient}>
            <Text style={styles.title}>Vibrar con la Luna</Text>
            <TextDeliusBold style={styles.subTitle}>Signup</TextDeliusBold>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor={colors.light.shadowColor}
                    placeholder="Email"
                    style={styles.textInput}
                />
                {(errorEmail && !errorPassword) && <TextDeliusSwashCapsRegular style={styles.error}>{errorEmail}</TextDeliusSwashCapsRegular>}
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor={colors.light.shadowColor}
                    placeholder='Password'
                    style={styles.textInput}
                    secureTextEntry
                />
                {errorConfirmPassword && <TextDeliusSwashCapsRegular style={styles.error}>{errorConfirmPassword}</TextDeliusSwashCapsRegular>}
                <TextInput
                    onChangeText={(text) => setConfirmPassword(text)}
                    placeholderTextColor={colors.light.shadowColor}
                    placeholder='Confirm password'
                    style={styles.textInput}
                    secureTextEntry
                />
                {errorConfirmPassword && <TextDeliusSwashCapsRegular style={styles.error}>{errorConfirmPassword}</TextDeliusSwashCapsRegular>}
            </View>
            <View style={styles.footTextContainer}>
                <TextDeliusSwashCapsRegular style={styles.accentText}>Already have an account?</TextDeliusSwashCapsRegular>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <TextDeliusSwashCapsRegular style={
                        {
                            ...styles.accentText,
                            ...styles.underLineText
                        }
                    }>
                        Login
                    </TextDeliusSwashCapsRegular>
                </Pressable>
            </View>

            <Pressable style={styles.btn} onPress={onsubmit}><TextDeliusBold style={styles.btnText}>Create account</TextDeliusBold></Pressable>

        </View>
    )
}

export default Signup;

const styles = StyleSheet.create({
    gradient: {
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
        width: textInputWidth,
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
    accentText: {
        color: colors.light.tags,
    },
    underLineText: {
        textDecorationLine: 'underline',
    },
    btn: {
        paddingVertical: 8,
        paddingHorizontal: 32,
        backgroundColor: colors.light.purchaseBtn,
        borderRadius: 16,
        margin: 24,
    },
    btnText: {
        alignItems: 'center',
        color: colors.light.darkBlue,
        fontSize: 20,
        textTransform: 'uppercase'
    },
    error: {
        padding: 16,
        backgroundColor: colors.light.tags,
        borderRadius: 8,
        color: colors.light.darkBlue,
    }
})