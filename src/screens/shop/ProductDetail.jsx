import { SafeAreaView } from 'react-native'
import { TextDeliusSwashCapsRegular } from '../../components/TextDeliusSwashCapsRegular'

const ProductDetail = ({ route }) => {
    // console.log(route);
    const { product } = route.params;
    return (
        <SafeAreaView>
            <TextDeliusSwashCapsRegular>{product.title}</TextDeliusSwashCapsRegular>
        </SafeAreaView>
    )
}

export default ProductDetail;