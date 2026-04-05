import { Text, View } from 'react-native';
import { forumData } from '@/hooks/use-forum-data';
import { useAuthStore } from '@/store/auth-store';
import { AppNav, Card, Heading, Muted, Page, StatChip, SubHeading, useAppTheme } from '@/components/ui';

export default function ProfileScreen() {
  const user = useAuthStore((s) => s.currentUser) ?? forumData.users[2];
  const userThreads = forumData.threads.filter((t) => t.authorId === user.id);
  const userReplies = forumData.replies.filter((r) => r.authorId === user.id);
  const { colors } = useAppTheme();

  return (
    <Page>
      <AppNav />
      <Card>
        <Text style={{ fontSize: 42 }}>👤</Text>
        <Heading>{user.username}</Heading>
        <Muted>{user.bio}</Muted>
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          <StatChip label={`Role: ${user.role}`} />
          <StatChip label={`Reputation: ${user.reputation}`} />
          <StatChip label={`Joined: ${user.joinDate}`} />
        </View>
        <Text style={{ color: colors.primary, fontWeight: '600' }}>Badges: {user.badges.join(' • ')}</Text>
      </Card>

      <Card>
        <SubHeading>Your Threads</SubHeading>
        {userThreads.length === 0 ? <Muted>No threads created yet.</Muted> : userThreads.map((t) => <Text key={t.id}>• {t.title}</Text>)}
      </Card>

      <Card>
        <SubHeading>Your Replies</SubHeading>
        {userReplies.length === 0 ? <Muted>No replies yet.</Muted> : userReplies.map((r) => <Text key={r.id}>• {r.content}</Text>)}
      </Card>
    </Page>
  );
}
