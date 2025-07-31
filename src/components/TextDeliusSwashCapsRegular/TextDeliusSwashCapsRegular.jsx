import { Text, TextInput } from 'react-native';

export const TextDeliusSwashCapsRegular = ({ children, style }) => {
  return (
    <Text style={{ fontFamily: 'DeliusSwashCaps-Regular', ...style }}>{children}</Text>
  )
}
