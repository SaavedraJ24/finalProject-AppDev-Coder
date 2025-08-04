import { StyleSheet, FlatList, Image, Pressable } from 'react-native'
import categories from '../../data/categories.json';
import { FlatCard } from '../../components/FlatCard';
import { TextDeliusSwashCapsRegular } from '../../components/TextDeliusSwashCapsRegular';
import { colors } from '../../global/colors';

const Categories = ({ navigation }) => {
    const renderCategoryItem = ({ item }) => (
        <Pressable onPress={() => navigation.navigate("Products", {category: item.id})}>
            <FlatCard style={styles.categoryContainer}>
                <TextDeliusSwashCapsRegular style={styles.text}>{item.name}</TextDeliusSwashCapsRegular>
                <Image style={styles.image} source={{ uri: item.image }} />
            </FlatCard>
        </Pressable>
    )
    return (
        <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
        />
    )
}

export default Categories;

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    image: {
        height: 60,
        width: 75,
        resizeMode: 'contain',
    },
    text: {
        color: colors.light.text,
        fontSize: 28,
    }
})