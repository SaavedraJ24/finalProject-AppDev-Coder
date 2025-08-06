import { Image, Pressable, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native'
import { TextDeliusSwashCapsRegular } from '../../components/TextDeliusSwashCapsRegular'
import { colors } from '../../global/colors';
import { TextDeliusBold } from '../../components/TextDeliusBold';
import { useDispatch } from 'react-redux';
import { addItems } from '../../features/cart/cartSlice';

const ProductDetail = ({ route }) => {
    const { width } = useWindowDimensions();
    const { product } = route.params;
    const dispatch = useDispatch();
    return (
        <ScrollView style={styles.productContainer}>
            <TextDeliusSwashCapsRegular style={styles.textTitle}>{product.title}</TextDeliusSwashCapsRegular>
            <Image
                source={{ uri: product.mainImage }}
                alt={product.title}
                width='100%'
                height={width * .7}
                resizeMode='contain'
            />
            <TextDeliusSwashCapsRegular style={styles.description}>{product.description}</TextDeliusSwashCapsRegular>
            <View style={styles.tagsContainer}>
                <View style={styles.tags}>
                    <TextDeliusBold style={styles.tagText}>{product.tags}!</TextDeliusBold>
                </View>

                {/* {
                    product.discount > 0 && <View style={styles.discount}><TextDeliusSwashCapsRegular style={styles.discountText}>-{product.discount}%</TextDeliusSwashCapsRegular></View>
                } */}
            </View>
            {
                product.stock <= 0 && <TextDeliusSwashCapsRegular style={styles.noStockText}>Sin Stock</TextDeliusSwashCapsRegular>
            }
            <TextDeliusSwashCapsRegular style={styles.price}>Price: ${product.price}</TextDeliusSwashCapsRegular>
            <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, styles.addToCartButton]}
                onPress={()=> dispatch(addItems({product:product, quantity: 1}))}>
                <TextDeliusSwashCapsRegular style={styles.textAddToCart}>Agregar al carrito</TextDeliusSwashCapsRegular>
            </Pressable>
        </ScrollView>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    productContainer: {
        paddingHorizontal: 16,
        marginVertical: 16
    },
    textTitle: {
        fontSize: 36,
        textAlign: "center",
        color: colors.light.shadowColor,
        textTransform: 'capitalize'
    },
    description: {
        fontSize: 20,
        textAlign: 'left',
        color: colors.light.text,
        paddingVertical: 20,
    },
    tagsContainer: {
        position: 'absolute',
        right: 36,
        top: 44,
    },
    tagText: {
        fontSize: 28,
        alignItems: 'center',
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        color: colors.light.tags,
    },
    discount: {
        //backgroundColor: colors.brightOrange,
        width: 52,
        height: 52,
        borderRadius: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    discountText: {
        //color: colors.white,
        textAlign: 'center',
        verticalAlign: 'center'
    },
    noStockText: {
        //color: colors.red
    },
    price: {
        fontSize: 28,
        alignSelf: 'center',
        paddingVertical: 16,
        color: colors.light.text,
    },
    addToCartButton: {
        padding: 8,
        paddingHorizontal: 16,
        backgroundColor: colors.light.purchaseBtn,
        borderRadius: 16,
        marginVertical: 16
    },
    textAddToCart: {
        color: colors.light.text,
        fontSize: 24,
        textAlign: 'center',
    }
})