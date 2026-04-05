import { Link } from 'expo-router';
import { Text } from 'react-native';
import { AppButton, Card, Heading, Page } from '@/components/ui';

export default function ForbiddenScreen() {
  return (
    <Page>
      <Card>
        <Heading>403 - Access Denied</Heading>
        <Text>You do not have permission to access this page.</Text>
        <Link href="/(public)/home" asChild>
          <AppButton label="Back to Home" />
        </Link>
      </Card>
    </Page>
  );
}
