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
      <Pressable style={styles.confirmBtn}>
        <TextDeliusBold style={styles.confirmBtnTxt}>Confirmar</TextDeliusBold>
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
        <TextDeliusSwashCapsRegular style={styles.price}>Precio unitario: {item.price}</TextDeliusSwashCapsRegular>
        <TextDeliusSwashCapsRegular style={styles.quantity}>Cantidad: {item.quantity}</TextDeliusSwashCapsRegular>
        <TextDeliusSwashCapsRegular style={styles.total}>Total: ${item.quantity * item.price}</TextDeliusSwashCapsRegular>
        <Pressable onPress={() => dispatch(removeItems(item.id))}>
          <Icon name='delete' size={24} color={colors.light.shadowColor} style={styles.deleteIcon} />
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
            ListHeaderComponent={<TextDeliusBold style={styles.cartScreenTitle}>Tu carrito:</TextDeliusBold>}
            ListFooterComponent={<FooterComponent />}
          />
          :
          <TextDeliusSwashCapsRegular>Aún no hay productos en tu carrito.</TextDeliusSwashCapsRegular>
      }
    </>
  )
}

export default Cart;

const styles = StyleSheet.create({
  footerContainer: {

  },
  totalTxt: {

  },
  confirmBtn: {

  },
  confirmBtnTxt: {

  },
  cartImage: {

  },
  cartDescription: {

  },
  title: {

  },
  description: {

  },
  price: {

  },
  quantity: {

  },
  total: {

  },
  deleteIcon: {

  },
  cartScreenTitle: {

  },
})