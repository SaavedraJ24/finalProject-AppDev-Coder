import { StyleSheet,View } from 'react-native';
import { colors } from '../../global/colors';

export const FlatCard = ({ children, style }) => {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: colors.light.background,
        alignItems: 'center',
        paddingVertical: 16,
        margin: 14,
        shadowColor: colors.light.shadowColor,
        elevation: 4, //Android
        shadowOffset: {height: 8, width: 6},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    }
});