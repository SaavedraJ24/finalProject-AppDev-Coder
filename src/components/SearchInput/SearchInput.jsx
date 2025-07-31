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
      <EvilIcons name='search' size={36} color={colors.light.text}/>
    </View>
  )
}

const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 6,
    },
    searchInput: {
        color: colors.light.text,
        borderWidth: 1,
        borderColor: colors.light.shadowColor,
        borderRadius: 14,
        padding: 8,
        width: '80%',
        fontFamily: 'DeliusSwashCaps-Regular',
    }
})