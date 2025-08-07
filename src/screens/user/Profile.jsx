import { Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { colors } from "../../global/colors";
import { CameraIcon, TextDeliusSwashCapsRegular } from '../../components';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from "react-redux";
import { usePutProfilePictureMutation } from '../../services/user/userApi';
import { setProfilePicture } from '../../features/user/userSlice'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from "react";

const Profile = () => {
    const user = useSelector(state => state.userReducer.userEmail);
    const localId = useSelector(state => state.userReducer.localId);
    const image = useSelector(state => state.userReducer.profilePicture);
    const [triggerPutProfilePicture, result] = usePutProfilePictureMutation();
    const [location, setLocation] = useState(null);
    const [locationLoaded, setLocationLoaded] = useState(false);
    const [address, setAddress] = useState("");
    const dispatch = useDispatch();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
            base64: true,
        });

        if (!result.canceled) {
            const imgBase64 = `data:image/jpeg;base64,${result.assets[0].base64}`;
            dispatch(setProfilePicture(imgBase64));
            triggerPutProfilePicture({ localId: localId, image: imgBase64 });
        }
    }

    useEffect(() => {
        async function getCurrentLocation() {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    console.log("Error al obtener los permisos")
                    setLocationLoaded(true);
                    return;
                }


                let location = await Location.getCurrentPositionAsync({});
                if (location) {
                    const response = await fetch(
                        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${process.env.EXPO_PUBLIC_GMAPS_API_KEY}`
                    );
                    const data = await response.json()

                    setAddress(data.results[0].formatted_address)

                    setLocation(location);
                }
            } catch (error) {
                console.log("Error al obtener la ubicación:", error);
            } finally {
                setLocationLoaded(true);
            }
        }

        getCurrentLocation();
    }, []);






    return (
        <View style={styles.profileContainer}>
            <View style={styles.imgProfileContainer}>
                {
                    image ?
                        <Image source={{ uri: image }} resizeMode="cover" style={styles.profileImage} />
                        :
                        <TextDeliusSwashCapsRegular style={styles.textProfilePlaceholder}>{user.charAt(0).toUpperCase()}</TextDeliusSwashCapsRegular>
                }
                <Pressable onPress={pickImage} style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }, styles.cameraIcon]}>
                    <CameraIcon />
                </Pressable>
            </View>
            <TextDeliusSwashCapsRegular style={styles.profileData}>Email: {user}</TextDeliusSwashCapsRegular>
            <View>
                <TextDeliusSwashCapsRegular>Mi ubicacion:</TextDeliusSwashCapsRegular>
            </View>
            <View>
                {
                    location
                        ?
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <Marker coordinate={{ "latitude": location.coords.latitude, "longitude": location.coords.longitude }} title={"Vibrar con la Luna"} />
                        </MapView>
                        :
                        (
                            locationLoaded
                                ?
                                <Text>Hubo un problema al obtener la ubicación</Text>
                                :
                                <ActivityIndicator />
                        )

                }
            </View>
            <View style={styles.placeDescriptionContainer}>
                <View style={styles.addressContainer}>
                    <TextDeliusSwashCapsRegular style={styles.address}>{address || ""}</TextDeliusSwashCapsRegular>
                </View>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    profileContainer: {
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgProfileContainer: {
        width: 128,
        height: 128,
        borderRadius: 128,
        backgroundColor: colors.light.tags,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 128
    },
    textProfilePlaceholder: {
        color: colors.light.text,
        fontSize: 48,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    profileData: {
        paddingVertical: 16,
        fontSize: 16
    },
    mapContainer: {
        width: '100%',
        height: 240,
        overflow: "hidden",
        shadowOffset: { height: 4, width: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginBottom: 12
    },
    map: {
        height: 240,
    },
    placeDescriptionContainer: {
        flexDirection: 'row',
        gap: 16
    }
})