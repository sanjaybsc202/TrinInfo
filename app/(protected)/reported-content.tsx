import { Text, View } from 'react-native';
import { reportedContent } from '@/data/mock';
import { RoleGuard } from '@/components/role-guard';
import { AppButton, Card, Heading, Page } from '@/components/ui';

export default function ReportedContentScreen() {
  return (
    <RoleGuard role="moderator">
      <Page>
        <Heading>Reported Content</Heading>
        {reportedContent.map((report) => (
          <Card key={report.id}>
            <Text>{report.reason} · {report.targetType}</Text>
            <Text>{report.preview}</Text>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <AppButton label="Approve" variant="ghost" />
              <AppButton label="Delete" variant="danger" />
              <AppButton label="Warn" variant="ghost" />
            </View>
          </Card>
        ))}
      </Page>
    </RoleGuard>
  );
}
