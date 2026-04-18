<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the portfolio site. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.ts` to route events through `/ingest` — improving ad-blocker resilience. Four user actions are now tracked across three client components, with error tracking enabled globally via `capture_exceptions: true`.

## Changes made

| File | Change |
|------|--------|
| `instrumentation-client.ts` | Created — initializes PostHog on the client with EU host, reverse proxy, and exception capture |
| `next.config.ts` | Added `/ingest` rewrites pointing to `eu.i.posthog.com`, plus `skipTrailingSlashRedirect: true` |
| `.env.local` | Created — `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` |

## Events instrumented

| Event | Description | File |
|-------|-------------|------|
| `project_expanded` | User opens a project accordion to view its details and media | `src/components/ProjectList.tsx` |
| `project_collapsed` | User closes an open project accordion | `src/components/ProjectList.tsx` |
| `image_lightbox_opened` | User clicks on a project image to view it full-size in the lightbox | `src/components/MediaStrip.tsx` |
| `email_link_clicked` | User clicks the contact email link — key conversion action on the portfolio | `src/components/ui/underline-to-background.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/161912/dashboard/629818
- **Project expansions over time**: https://eu.posthog.com/project/161912/insights/H4ntP7Vv
- **Most viewed projects** (breakdown by project name): https://eu.posthog.com/project/161912/insights/ZhXciTnw
- **Email link clicks over time**: https://eu.posthog.com/project/161912/insights/fUQCgrno
- **Image lightbox opens by project**: https://eu.posthog.com/project/161912/insights/cF17BFww
- **Visitor conversion funnel** (project expanded → image viewed → email clicked): https://eu.posthog.com/project/161912/insights/6uQju9NF

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
