import { Link } from 'expo-router';
import { ComponentProps, PropsWithChildren } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native';
import { maxContentWidth, palette, radius, shadow, spacing, typography } from '@/theme/tokens';

export function useAppTheme() {
  const scheme = useColorScheme() ?? 'light';
  const colors = scheme === 'dark' ? palette.dark : palette.light;
  return { colors, scheme };
}

export function Page({ children }: PropsWithChildren) {
  const { colors } = useAppTheme();
  return (
    <ScrollView style={[styles.page, { backgroundColor: colors.background }]} contentContainerStyle={styles.content}>
      <View style={styles.wrap}>{children}</View>
    </ScrollView>
  );
}

export function AppNav() {
  const { colors } = useAppTheme();
  const items = [
    { href: '/(public)/home', label: 'Home' },
    { href: '/(public)/categories', label: 'Categories' },
    { href: '/(protected)/search', label: 'Search' },
    { href: '/(protected)/profile', label: 'Profile' },
  ] as const;

  return (
    <View style={[styles.nav, { backgroundColor: colors.surface, borderColor: colors.border }]}> 
      {items.map((item) => (
        <Link key={item.href} href={item.href} asChild>
          <Pressable style={[styles.navItem, { backgroundColor: colors.elevated }]}>
            <Text style={[styles.navItemText, { color: colors.text }]}>{item.label}</Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

export function Card({ children }: PropsWithChildren) {
  const { colors } = useAppTheme();
  return <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>{children}</View>;
}

export function Heading({ children }: PropsWithChildren) {
  const { colors } = useAppTheme();
  return <Text style={[styles.heading, { color: colors.text }]}>{children}</Text>;
}

export function SubHeading({ children }: PropsWithChildren) {
  const { colors } = useAppTheme();
  return <Text style={[styles.subHeading, { color: colors.text }]}>{children}</Text>;
}

export function Muted({ children }: PropsWithChildren) {
  const { colors } = useAppTheme();
  return <Text style={[styles.muted, { color: colors.muted }]}>{children}</Text>;
}

export function StatChip({ label }: { label: string }) {
  const { colors } = useAppTheme();
  return (
    <View style={[styles.chip, { borderColor: colors.border, backgroundColor: colors.elevated }]}>
      <Text style={[styles.chipText, { color: colors.muted }]}>{label}</Text>
    </View>
  );
}

type ButtonVariant = 'primary' | 'ghost' | 'danger';

type AppButtonProps = {
  label: string;
  variant?: ButtonVariant;
} & Omit<ComponentProps<typeof Pressable>, 'style' | 'children'>;

export function AppButton({ label, variant = 'primary', ...pressableProps }: AppButtonProps) {
  const { colors } = useAppTheme();
  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: colors.primary },
        variant === 'ghost' && { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.border },
        variant === 'danger' && { backgroundColor: colors.danger },
      ]}
      {...pressableProps}
    >
      <Text style={[styles.buttonText, { color: variant === 'ghost' ? colors.text : colors.primaryText }]}>{label}</Text>
    </Pressable>
  );
}

export function AppInput(props: ComponentProps<typeof TextInput>) {
  const { colors } = useAppTheme();
  return <TextInput placeholderTextColor={colors.muted} style={[styles.input, { borderColor: colors.border, color: colors.text, backgroundColor: colors.elevated }]} {...props} />;
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <SubHeading>{title}</SubHeading>
      <Muted>{description}</Muted>
    </Card>
  );
}

export function LoadingState({ label = 'Loading…' }: { label?: string }) {
  return <Muted>{label}</Muted>;
}

export const styles = StyleSheet.create({
  page: { flex: 1 },
  content: { padding: spacing.lg },
  wrap: { width: '100%', maxWidth: maxContentWidth, alignSelf: 'center', gap: spacing.lg },
  nav: {
    borderWidth: 1,
    borderRadius: radius.lg,
    padding: spacing.sm,
    flexDirection: 'row',
    gap: spacing.sm,
    flexWrap: 'wrap',
  },
  navItem: { paddingVertical: spacing.xs, paddingHorizontal: spacing.md, borderRadius: radius.pill },
  navItemText: { fontSize: typography.caption, fontWeight: '600' },
  card: {
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.lg,
    gap: spacing.sm,
    ...shadow.light,
  },
  heading: { fontSize: typography.h1, fontWeight: '800', letterSpacing: -0.4 },
  subHeading: { fontSize: typography.h3, fontWeight: '700', letterSpacing: -0.2 },
  muted: { fontSize: typography.body, lineHeight: 21 },
  chip: { borderWidth: 1, borderRadius: radius.pill, paddingVertical: spacing.xs, paddingHorizontal: spacing.sm },
  chipText: { fontSize: typography.caption, fontWeight: '600' },
  button: { paddingVertical: 12, paddingHorizontal: 16, borderRadius: radius.md, alignItems: 'center' },
  buttonText: { fontWeight: '700', fontSize: typography.body },
  input: { borderWidth: 1, borderRadius: radius.md, paddingHorizontal: 14, paddingVertical: 12, fontSize: typography.body },
});
