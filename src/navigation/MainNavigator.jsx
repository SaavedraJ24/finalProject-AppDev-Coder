import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from "./AuthStackNavigator";
import { TabNavigator } from "./TabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfilePictureQuery } from "../services/user/userApi";
import { setProfilePicture } from "../features/user/userSlice";
import { useEffect } from "react";

export const MainNavigator = () => {
    const userEmail = useSelector(state => state.userReducer.userEmail);
    const localId = useSelector(state => state.userReducer.localId);
    // console.log(userEmail);
    // console.log("Local id:", localId)
    const dispatch = useDispatch();
    const {data: profilePicture, isLoading, error} = useGetProfilePictureQuery(localId);
    useEffect(() => {
        if (profilePicture) {
            dispatch(setProfilePicture(profilePicture.image))
        }
    })
    return (
        <NavigationContainer>
            {
                userEmail? <TabNavigator /> 
                :  <AuthStackNavigator />
            }
        </NavigationContainer>
    )
}