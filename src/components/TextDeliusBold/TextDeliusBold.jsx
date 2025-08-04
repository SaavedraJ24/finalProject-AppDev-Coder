import { Text } from 'react-native';

export const TextDeliusBold = ({ children, style }) => {
  return (
    <Text style={{ fontFamily: 'Kalam-Bold', ...style }}>{children}</Text>
  )
}
