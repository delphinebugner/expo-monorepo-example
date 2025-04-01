// 📝 Note: for the sake of brevity, some of the code is omitted...
import { Alert, Text, View } from 'react-native';
import { ContextMenuView } from 'react-native-ios-context-menu';

export function Menu(_props) {
  return (
    <ContextMenuView
      menuConfig={{
        // Note: If you don't want a menu title to appear for your
        // context menu, you can just pass in an empty string
        menuTitle: 'ContextMenuViewExample01',
        menuItems: [
          {
            actionKey: 'key-01',
            actionTitle: 'Action #1',
          },
          {
            actionKey: 'key-02',
            actionTitle: 'Action #2',
          },
          {
            actionKey: 'key-03',
            actionTitle: 'Action #3',
          },
        ],
      }}
      onPressMenuItem={({ nativeEvent }) => {
        Alert.alert(
          'onPressMenuItem Event',
          `actionKey: ${nativeEvent.actionKey} - actionTitle: ${nativeEvent.actionTitle}`
        );
      }}
    >
      <View style={{ backgroundColor: 'aquamarine', padding: 20 }}>
        <Text className="font-lg">Test Context Menu</Text>
      </View>
    </ContextMenuView>
  );
}
