import { Text } from 'react-native';
import { notifications } from '@/data/mock';
import { AppButton, Card, Heading, Page } from '@/components/ui';

export default function NotificationsScreen() {
  return (
    <Page>
      <Heading>Notifications</Heading>
      {notifications.map((item) => (
        <Card key={item.id}>
          <Text>{item.message}</Text>
          <AppButton label={item.read ? 'Mark Unread' : 'Mark Read'} variant="ghost" />
        </Card>
      ))}
    </Page>
  );
}
