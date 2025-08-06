import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import { TextDeliusSwashCapsRegular } from '../../components/TextDeliusSwashCapsRegular';
import { SearchInput } from '../../components/SearchInput';
import { FlatCard } from '../../components/FlatCard';
import { colors } from '../../global/colors';
import { useSelector } from 'react-redux';

const ProductsByCategory = ({ navigation }) => {
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [keyword, setKeyword] = useState("");
    const products = useSelector((state) => state.shopReducer.products)
    const category = useSelector((state) => state.shopReducer.categorySelected)
    // console.log(route);
    // const { category } = route.params;
    const filteredByCategory = useSelector(state => state.shopReducer.productsFilteredByCategory);
    useEffect(() => {
        // const filteredByCategory = products.filter(product => product.categoryId === category);
        if (keyword) {
            const filteredByKeyword = filteredByCategory.filter(
                product => product.title.toLowerCase().includes(keyword.toLowerCase())
            );
            setProductsFiltered(filteredByKeyword);
        } else {
            setProductsFiltered(filteredByCategory);
        }
    }, [category, keyword, products]);

    const renderProductByCategory = ({ item }) => (
        <Pressable onPress={() => navigation.navigate("ProductDetail", { product: item })}>
            <FlatCard style={styles.productContainer}>
                <TextDeliusSwashCapsRegular style={styles.text}>{item.title}</TextDeliusSwashCapsRegular>
                <Image
                    source={{ uri: item.mainImage }}
                    alt={item.title}
                    style={styles.productImg}
                />
            </FlatCard>
        </Pressable>
    )

    return (
        <View>
            <SearchInput keyword={keyword} setKeyword={setKeyword} />
            <FlatList
                data={productsFiltered}
                renderItem={renderProductByCategory}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ProductsByCategory;

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: "row",
        justifyContent: "center",
        height: 80,
        marginVertical: 12,
    },
    text: {
        fontSize: 18,
        color: colors.light.text,
    },
    productImg: {
        height: 72,
        width: 72,
        resizeMode: 'contain'
    }
})