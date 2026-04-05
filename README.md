# TrinInfo Forum (Expo + React Native + Expo Router)

Cross-platform MVP forum app running from one codebase on iOS, Android, and Web.

## Recommended stack
- Expo + React Native + TypeScript
- Expo Router (file-based routing)
- Zustand (session/auth state)
- React Hook Form + Zod (validation)
- TanStack Query provider-ready architecture

## Folder structure
- `app/` route files (`(public)`, `(auth)`, `(protected)`, dynamic `category/[id]`, `thread/[id]`)
- `src/components/` reusable UI and guard components
- `src/data/` mock data layer
- `src/hooks/` forum data hooks
- `src/store/` Zustand auth/session store
- `src/theme/` design tokens
- `src/types/` domain models

## Setup
1. Install dependencies:
   - `npm install`
2. Start app:
   - `npm run start`
3. Platform-specific:
   - `npm run ios`
   - `npm run android`
   - `npm run web`

## Scripts
- `npm run typecheck`
- `npm run lint`

## Notes
- Data is local mock data but organized for easy backend replacement.
- Moderator/admin pages are role-guarded with frontend-only checks.
