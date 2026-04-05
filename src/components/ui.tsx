import { ComponentProps, PropsWithChildren } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, maxContentWidth, radius, spacing } from '@/theme/tokens';

export function Page({ children }: PropsWithChildren) {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.wrap}>{children}</View>
    </ScrollView>
  );
}

export function Card({ children }: PropsWithChildren) {
  return <View style={styles.card}>{children}</View>;
}

export function Heading({ children }: PropsWithChildren) {
  return <Text style={styles.heading}>{children}</Text>;
}

export function Muted({ children }: PropsWithChildren) {
  return <Text style={styles.muted}>{children}</Text>;
}

type ButtonVariant = 'primary' | 'ghost' | 'danger';

type AppButtonProps = {
  label: string;
  variant?: ButtonVariant;
} & Omit<ComponentProps<typeof Pressable>, 'style' | 'children'>;

export function AppButton({ label, variant = 'primary', ...pressableProps }: AppButtonProps) {
  return (
    <Pressable
      style={[styles.button, variant === 'ghost' && styles.ghostButton, variant === 'danger' && styles.dangerButton]}
      {...pressableProps}
    >
      <Text style={[styles.buttonText, variant === 'ghost' && styles.ghostText]}>{label}</Text>
    </Pressable>
  );
}

export function AppInput(props: ComponentProps<typeof TextInput>) {
  return <TextInput placeholderTextColor={colors.muted} style={styles.input} {...props} />;
}

export const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg },
  wrap: { width: '100%', maxWidth: maxContentWidth, alignSelf: 'center', gap: spacing.lg },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  heading: { fontSize: 24, fontWeight: '700', color: colors.text },
  muted: { fontSize: 14, color: colors.muted },
  button: { backgroundColor: colors.primary, paddingVertical: 12, paddingHorizontal: 14, borderRadius: radius.sm, alignItems: 'center' },
  ghostButton: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.border },
  dangerButton: { backgroundColor: colors.danger },
  buttonText: { color: 'white', fontWeight: '600' },
  ghostText: { color: colors.text },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    backgroundColor: colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: colors.text,
  },
});
