import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import { FlatCard, TextDeliusSwashCapsRegular } from '../../components'
import { colors } from '../../global/colors'
import { removeItems } from '../../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { TextDeliusBold } from '../../components/TextDeliusBold'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Cart = () => {
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  const total = useSelector(state => state.cartReducer.total);
  const dispatch = useDispatch();

  const FooterComponent = () => (
    <View style={styles.footerContainer}>
      <TextDeliusSwashCapsRegular style={styles.totalTxt}>Total: ${total}</TextDeliusSwashCapsRegular>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.85: 1 }, styles.confirmBtn]}
        onPress={() => null}
      >
        <TextDeliusBold style={styles.confirmBtnTxt}>Purchase</TextDeliusBold>
      </Pressable>
    </View>
  )

  const renderCartItem = ({ item }) => (
    <FlatCard>
      <View>
        <Image
          source={{ uri: item.mainImage }}
          style={styles.cartImage}
          resizeMode='contain'
        />
      </View>
      <View style={styles.cartDescription}>
        <TextDeliusSwashCapsRegular style={styles.title}>{item.title}</TextDeliusSwashCapsRegular>
        <TextDeliusSwashCapsRegular style={styles.description}>{item.description}</TextDeliusSwashCapsRegular>
        <TextDeliusSwashCapsRegular style={styles.price}>Unit price: {item.price}</TextDeliusSwashCapsRegular>
        <TextDeliusSwashCapsRegular style={styles.quantity}>Quantity: {item.quantity}</TextDeliusSwashCapsRegular>
        <TextDeliusSwashCapsRegular style={styles.total}>Total: ${item.quantity * item.price}</TextDeliusSwashCapsRegular>
        <Pressable onPress={() => dispatch(removeItems(item.id))} style={styles.deleteIconBox}>
          <Icon name='delete' size={24} color={colors.light.shadowColor} style={styles.deleteIcon} />
          <TextDeliusSwashCapsRegular style={styles.deleteIconTxt}>--Delete product.</TextDeliusSwashCapsRegular>
        </Pressable>
      </View>
    </FlatCard >
  )
  return (
    <>
      {
        cartItems.length > 0
          ?
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={renderCartItem}
            ListHeaderComponent={<TextDeliusBold style={styles.cartScreenTitle}>Your cart:</TextDeliusBold>}
            ListFooterComponent={<FooterComponent />}
          />
          :
          <TextDeliusSwashCapsRegular style={styles.txtNoProducts}>Not products in cart, yet.</TextDeliusSwashCapsRegular>
      }
    </>
  )
}

export default Cart;

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
  },
  totalTxt: {
    fontSize: 24,
    color: colors.light.darkBlue,
  },
  confirmBtn: {
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: colors.light.purchaseBtn,
  },
  confirmBtnTxt: {
    color: colors.light.darkBlue,
    fontSize: 24,
  },
  cartImage: {
    height: 128,
    width: 128,
    position: 'absolute',
    right: -160,
    top: 80,
  },
  cartDescription: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: colors.light.headline,
  },
  description: {
    fontSize: 16,
    color: colors.light.text,
    padding: 8,
  },
  price: {
    color: colors.light.text,
    fontSize: 16,
    padding: 8,
  },
  quantity: {
    color: colors.light.text,
    fontSize: 16,
    padding: 8,
  },
  total: {
    color: colors.light.text,
    fontSize: 16,
    padding: 8,
  },
  deleteIconBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteIcon: {
    height: 44,
    paddingVertical: 8,
    paddingLeft: 8,
  },
  deleteIconTxt: {
    fontSize: 20,
    color: colors.light.shadowColor,
    textDecorationLine: "underline",
    paddingLeft: 4,
  },
  cartScreenTitle: {
    width: "100%",
    textTransform: "uppercase",
    fontSize: 36,
    paddingTop: 12,
    textAlign: "center",
    color: colors.light.darkBlue,
  },
  txtNoProducts: {
    marginVertical: 100,
    fontSize: 28,
    alignSelf: "center",
    color: colors.light.text,
    textDecorationLine: "underline"
  }
})