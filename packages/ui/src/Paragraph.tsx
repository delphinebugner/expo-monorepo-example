import { StyleSheet, Text, TextProps } from 'react-native';

export const Paragraph = ({ children, style, ...props }: TextProps) => (
  <Text {...props} style={[p, style]}>
    {children}
  </Text>
);

const { p } = StyleSheet.create({
  p: {
    fontSize: 24,
    letterSpacing: 0.25,
    marginVertical: 2,
  },
});
