import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { forumData } from '@/hooks/use-forum-data';
import { AppButton, Card, Heading, Muted, Page } from '@/components/ui';
import { ThreadCard } from '@/components/thread-card';

export default function HomeScreen() {
  return (
    <Page>
      <Card>
        <Heading>Welcome to TrinInfo Community</Heading>
        <Muted>Discuss tech, gaming, health, and more in a friendly modern forum.</Muted>
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          <Link href="/(auth)/login" asChild><AppButton label="Login" /></Link>
          <Link href="/(auth)/register" asChild><AppButton label="Sign Up" variant="ghost" /></Link>
        </View>
      </Card>


      <Card>
        <Text style={{ fontWeight: '700', fontSize: 18 }}>Quick Navigation</Text>
        <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
          <Link href="/(public)/categories"><Text>Categories</Text></Link>
          <Link href="/(protected)/create-thread"><Text>Create Thread</Text></Link>
          <Link href="/(protected)/profile"><Text>Profile</Text></Link>
          <Link href="/(protected)/settings"><Text>Settings</Text></Link>
          <Link href="/(protected)/search"><Text>Search</Text></Link>
          <Link href="/(protected)/notifications"><Text>Notifications</Text></Link>
          <Link href="/(protected)/messages"><Text>Messages</Text></Link>
          <Link href="/(protected)/reported-content"><Text>Reported Content</Text></Link>
          <Link href="/(protected)/admin-dashboard"><Text>Admin Dashboard</Text></Link>
          <Link href="/(public)/rules"><Text>Rules</Text></Link>
          <Link href="/(public)/help"><Text>Help</Text></Link>
        </View>
      </Card>

      <Card>
        <Text style={{ fontWeight: '700', fontSize: 18 }}>Trending Discussions</Text>
        {forumData.threads.slice(0, 2).map((thread) => <ThreadCard key={thread.id} thread={thread} />)}
      </Card>

      <Card>
        <Text style={{ fontWeight: '700', fontSize: 18 }}>Category Preview</Text>
        {forumData.categories.map((cat) => (
          <Link key={cat.id} href={`/category/${cat.id}`}>
            <Text style={{ fontSize: 16, marginBottom: 8 }}>{cat.name} · {cat.topicCount} topics</Text>
          </Link>
        ))}
      </Card>
    </Page>
  );
}
