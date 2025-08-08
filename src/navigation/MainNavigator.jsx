import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from "./AuthStackNavigator";
import { TabNavigator } from "./TabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfilePictureQuery } from "../services/user/userApi";
import { setProfilePicture, setUser } from "../features/user/userSlice";
import { useEffect } from "react";
import { initSessionTable, getSession } from "../db";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../global/colors";


export const MainNavigator = () => {
    const userEmail = useSelector(state => state.userReducer.userEmail);
    const localId = useSelector(state => state.userReducer.localId);
    const [checkingSession, setCheckingSession] = useState(true);
    const dispatch = useDispatch();
    const { data: profilePicture, isLoading, error } = useGetProfilePictureQuery(localId);

    useEffect(() => {
        const autoConfig = async () => {
            await initSessionTable();
            const session = await getSession();
            if (session) {
                console.log("Session", session)
                dispatch(setUser({ email: session.userEmail, localId: session.localId }))
            }
            setCheckingSession(false);
        }
        autoConfig();
    }, []);


    useEffect(() => {
        if (profilePicture) {
            dispatch(setProfilePicture(profilePicture.image))
        }
    }, [profilePicture]);

    if (checkingSession) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={colors.light.darkBlue} />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {
                userEmail ? <TabNavigator /> : <AuthStackNavigator />
            }
        </NavigationContainer>
    )
}