import { StyleSheet, View, FlatList, Image, Pressable } from 'react-native'
import categories from '../data/categories.json';
import { FlatCard } from '../components/FlatCard';
import { TextDeliusSwashCapsRegular } from '../components/TextDeliusSwashCapsRegular';
import { colors } from '../global/colors';

const Categories = ({ setCategoriesSelected }) => {
    const renderCategoryItem = ({ item }) => (
        <Pressable onPress={()=> setCategoriesSelected(item.id)}>
            <FlatCard>
                <View style={styles.categoryContainer}>
                    <TextDeliusSwashCapsRegular style={styles.text}>{item.name}</TextDeliusSwashCapsRegular>
                    <Image style={styles.image} source={{ uri: item.image }} />
                </View>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
    },
    image: {
        height: 60,
        width: 80,
        resizeMode: 'contain',
    },
    text: {
        color: colors.light.text,
        fontSize: 18,
    }
})


/*  NO ANDA EN LA APP   ->  MIRAR CLASE 4*/