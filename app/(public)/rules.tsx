import { Text } from 'react-native';
import { Card, Heading, Page } from '@/components/ui';

export default function RulesScreen() {
  return (
    <Page>
      <Heading>Rules & Guidelines</Heading>
      <Card>
        <Text>1. Be respectful.</Text>
        <Text>2. Stay on topic.</Text>
        <Text>3. No harassment, spam, or hate speech.</Text>
        <Text>4. Report issues with the report action.</Text>
      </Card>
    </Page>
  );
}
