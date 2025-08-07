import { StyleSheet, FlatList, Image, Pressable } from 'react-native'
//import categories from '../../data/categories.json';
import { FlatCard } from '../../components/FlatCard';
import { TextDeliusSwashCapsRegular } from '../../components/TextDeliusSwashCapsRegular';
import { colors } from '../../global/colors';
import { useSelector, useDispatch } from 'react-redux';
import { setCategorySelected, filterProducts } from '../../features/shop/shopSlice';
import { useGetCategoriesQuery } from '../../services/shop/shopApi';



const Categories = ({ navigation }) => {
    // const categories = useSelector((state) => (state.shopReducer.categories))
    const {data: categories, isLoading, error} = useGetCategoriesQuery();
    // console.log(categories)
    

    const dispatch = useDispatch();

    const renderCategoryItem = ({ item }) => (
        <Pressable onPress={
            () => {
                dispatch(setCategorySelected(item.id))
                dispatch(filterProducts())
                navigation.navigate("Products")
            }} >
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