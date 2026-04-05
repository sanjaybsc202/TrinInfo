import { Link } from 'expo-router';
import { Text } from 'react-native';
import { AppButton, Card, Heading, Page } from '@/components/ui';

export default function NotFoundScreen() {
  return (
    <Page>
      <Card>
        <Heading>404 - Page Not Found</Heading>
        <Text>The page you are looking for does not exist.</Text>
        <Link href="/(public)/home" asChild>
          <AppButton label="Go Home" />
        </Link>
      </Card>
    </Page>
  );
}
