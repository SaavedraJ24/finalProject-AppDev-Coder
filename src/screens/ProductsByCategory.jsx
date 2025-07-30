import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import products from '../data/products.json';
import { TextDeliusSwashCapsRegular } from '../components/TextDeliusSwashCapsRegular';
import { FlatCard } from '../components/FlatCard';
import { colors } from '../global/colors';

const ProductsByCategory = ({category}) => {
    const [productsFiltered, setProductsFiltered] = useState([]);

    useEffect(()=> {
        setProductsFiltered(products.filter(product => product.categoryId === category));
    },[category])

    const renderProductByCategory = ({ item }) => (
        <FlatCard>
            <View style={styles.productCategory}>
                <TextDeliusSwashCapsRegular style={styles.text}>{item.title}</TextDeliusSwashCapsRegular>
            </View>
        </FlatCard>
    )

    return (
        <SafeAreaView style={styles.container}>
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
    }
})