import { Text } from 'react-native';
import { forumData } from '@/hooks/use-forum-data';
import { useAuthStore } from '@/store/auth-store';
import { Card, Heading, Muted, Page } from '@/components/ui';

export default function ProfileScreen() {
  const user = useAuthStore((s) => s.currentUser) ?? forumData.users[2];
  const userThreads = forumData.threads.filter((t) => t.authorId === user.id);
  const userReplies = forumData.replies.filter((r) => r.authorId === user.id);

  return (
    <Page>
      <Heading>{user.username}</Heading>
      <Card>
        <Muted>{user.bio}</Muted>
        <Text>Reputation: {user.reputation}</Text>
        <Text>Badges: {user.badges.join(', ')}</Text>
        <Text>Joined: {user.joinDate}</Text>
      </Card>
      <Card>
        <Text style={{ fontWeight: '700' }}>Threads ({userThreads.length})</Text>
        {userThreads.map((t) => <Text key={t.id}>• {t.title}</Text>)}
      </Card>
      <Card>
        <Text style={{ fontWeight: '700' }}>Replies ({userReplies.length})</Text>
        {userReplies.map((r) => <Text key={r.id}>• {r.content}</Text>)}
      </Card>
    </Page>
  );
}
