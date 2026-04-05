import { Text } from 'react-native';
import { RoleGuard } from '@/components/role-guard';
import { Card, Heading, Page } from '@/components/ui';

export default function AdminDashboardScreen() {
  return (
    <RoleGuard role="admin">
      <Page>
        <Heading>Admin Dashboard</Heading>
        <Card><Text>Manage users</Text></Card>
        <Card><Text>Manage categories</Text></Card>
        <Card><Text>Moderate content</Text></Card>
        <Card><Text>Analytics cards placeholder</Text></Card>
      </Page>
    </RoleGuard>
  );
}
