import { Text } from 'react-native';
import { AppInput, Card, Heading, Page } from '@/components/ui';

export default function SearchScreen() {
  return (
    <Page>
      <Heading>Search</Heading>
      <Card>
        <AppInput placeholder="Search threads, posts, users" />
        <Text>Filters: category, date, relevance</Text>
      </Card>
    </Page>
  );
}
