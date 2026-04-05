import { Text } from 'react-native';
import { Card, Heading, Page } from '@/components/ui';

export default function HelpScreen() {
  return (
    <Page>
      <Heading>Help / FAQ</Heading>
      <Card>
        <Text>Q: How do I create a thread? A: Visit Create Thread after login.</Text>
        <Text>Q: How do I report content? A: Open a thread or reply and tap Report.</Text>
      </Card>
    </Page>
  );
}
