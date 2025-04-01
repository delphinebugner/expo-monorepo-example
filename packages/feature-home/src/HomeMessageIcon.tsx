import { Text, TextProps } from 'react-native';

export const HomeMessageIcon = ({ style, ...props }: TextProps) => (
  <Text style={[{ fontSize: 28 }, style]} {...props}>
    👋
  </Text>
);
