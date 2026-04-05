import { Text } from 'react-native';
import { messageThreads } from '@/data/mock';
import { Card, Heading, Page } from '@/components/ui';

export default function MessagesScreen() {
  return (
    <Page>
      <Heading>Messages</Heading>
      {messageThreads.map((thread) => (
        <Card key={thread.id}>
          <Text style={{ fontWeight: '700' }}>{thread.participant}</Text>
          <Text>{thread.lastMessage}</Text>
        </Card>
      ))}
    </Page>
  );
}
