import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { forumData } from '@/hooks/use-forum-data';
import { AppButton, AppNav, Card, Heading, Muted, Page, StatChip, SubHeading, useAppTheme } from '@/components/ui';
import { ThreadCard } from '@/components/thread-card';

export default function HomeScreen() {
  const { colors } = useAppTheme();

  return (
    <Page>
      <AppNav />

      <Card>
        <Text style={{ color: colors.primary, fontWeight: '700' }}>Community Forum</Text>
        <Heading>Connect with builders, gamers, and wellness enthusiasts.</Heading>
        <Muted>Ask better questions, share real progress, and discover quality discussions curated by the community.</Muted>
        <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
          <Link href="/(auth)/login" asChild><AppButton label="Login" /></Link>
          <Link href="/(auth)/register" asChild><AppButton label="Create account" variant="ghost" /></Link>
        </View>
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          <StatChip label="12k+ members" />
          <StatChip label="2.8k weekly posts" />
          <StatChip label="94% resolved threads" />
        </View>
      </Card>

      <View style={{ gap: 12 }}>
        <SubHeading>Trending discussions</SubHeading>
        {forumData.threads.slice(0, 3).map((thread) => <ThreadCard key={thread.id} thread={thread} />)}
      </View>

      <View style={{ gap: 12 }}>
        <SubHeading>Explore categories</SubHeading>
        {forumData.categories.map((cat) => (
          <Card key={cat.id}>
            <Link href={`/category/${cat.id}`}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: colors.text }}>{cat.name}</Text>
            </Link>
            <Muted>{cat.description}</Muted>
            <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
              <StatChip label={`${cat.topicCount} topics`} />
              <StatChip label={`Active ${cat.recentActivity}`} />
            </View>
          </Card>
        ))}
      </View>
    </Page>
  );
}
