import { useEffect, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import products from '../../data/products.json';
import { TextDeliusSwashCapsRegular } from '../../components/TextDeliusSwashCapsRegular';
import { SearchInput } from '../../components/SearchInput';
import { FlatCard } from '../../components/FlatCard';
import { colors } from '../../global/colors';

const ProductsByCategory = ({ navigation, route }) => {
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [keyword, setKeyword] = useState("");
    // console.log(route);
    const { category } = route.params;

    useEffect(() => {
        const filteredByCategory = products.filter(product => product.categoryId === category);
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
        <Pressable onPress={() => navigation.navigate("ProductDetail", {product: item})}>
            <FlatCard style={styles.flatcardContainer}>
                <View style={styles.productCategory}>
                    <TextDeliusSwashCapsRegular style={styles.text}>{item.title}</TextDeliusSwashCapsRegular>
                </View>
            </FlatCard>
        </Pressable>
    )

    return (
        <SafeAreaView style={styles.container}>
            <SearchInput keyword={keyword} setKeyword={setKeyword} />
            <FlatList
                data={productsFiltered}
                renderItem={renderProductByCategory}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default ProductsByCategory;

const styles = StyleSheet.create({
    container: {
        margin: 12,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: colors.light.text,
    },
    flatcardContainer: {
        padding: 12,
    }
})