import { AppButton, AppInput, Card, Heading, Page } from '@/components/ui';

export default function SettingsScreen() {
  return (
    <Page>
      <Heading>Settings</Heading>
      <Card>
        <AppInput placeholder="Change email" />
        <AppInput placeholder="Change password" secureTextEntry />
        <AppButton label="Save account changes" />
      </Card>
      <Card>
        <AppButton label="Toggle notification preferences" variant="ghost" />
        <AppButton label="Update privacy settings" variant="ghost" />
      </Card>
    </Page>
  );
}
