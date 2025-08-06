import { StyleSheet, TextInput, View } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { colors } from '../../global/colors'

export const SearchInput = ({keyword, setKeyword}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput 
        onChangeText={(text) => setKeyword(text)}
        style={styles.searchInput}
        value={keyword}
      />
      <EvilIcons name='search' size={36} style={styles.searchIcon}/>
    </View>
  )
}

const styles = StyleSheet.create({
    searchContainer: {
      alignItems: 'center',
      marginVertical: 16,
    },
    searchInput: {
        color: colors.light.text,
        borderWidth: 1,
        borderColor: colors.light.shadowColor,
        borderRadius: 14,
        padding: 8,
        width: '80%',
        fontFamily: 'DeliusSwashCaps-Regular',
    },
    searchIcon: {
      color: colors.light.shadowColor,
      position: 'absolute',
      right: 42,
    }
})