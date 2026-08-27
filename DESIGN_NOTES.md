# JuraAI.pk Design Notes

Source: `/home/ubuntu/upload/pasted_file_q4DRv8_JuraAI_Design_System_Asset_Checklist(8).pdf`

The repository was cloned from `jawadali001/JuraAI.pk` and is currently empty apart from `.git`.

## Design system

- Brand palette: deep navy / executive blue for authority; emerald and AI gold for CTAs and highlights; slate / charcoal neutrals; semantic success green, warning yellow, danger red, and info cyan.
- Typography: a strong legal/editorial heading face such as Cinzel or Plus Jakarta Sans paired with Inter/Geist body text. Scale should include display, H1-H4, subtitle, body large/medium, caption, and tiny/legal disclaimer.
- Layout: 8px grid with 4, 8, 16, 24, 32, 48, 64, and 96px spacing. Responsive breakpoints at approximately 375, 768, 1024, and 1440px+.
- Borders and elevation: 4px, 8px, 12px, and pill radius variants; soft card, hover, and modal shadows.

## Required component inventory

- Buttons: primary actions Ask Jura AI, Generate Petition, Book Consultation; secondary/outline Upload Case File, Download PDF, Filter; ghost Cancel and Learn More; default, hover, pressed, focus, loading, disabled; small/medium/large sizes.
- Inputs: AI natural-language search bar with voice icon and action; advanced case search by citation, section, court, keyword; standard text, multiline legal prompt, password with show/hide; jurisdiction and document selectors; checkboxes, radios, toggles.
- Navigation: main nav with brand, Case Search, AI Drafting, Pricing, About, and login/profile; dashboard sidebar for My Cases, Saved Citations, Drafts, Settings; footer with disclaimers, legal links, social links, and copyright; breadcrumbs and pagination.
- JuraAI-specific: AI response/chat cards with markdown-like formatting, copy/source/export actions; judgment cards with title, court, year, citation number, relevance badge, and quick view; legal document drag/drop upload with progress; pricing cards for students, advocates, and firms; status chips for Verified Citation, High Court, Drafting Complete, and Processing AI.
- Feedback/system states: login/signup, export options, plan-upgrade modal; success/error/info toasts; skeleton cards and AI typing indicator; empty states for no judgments and first upload.

## Brand assets

- Primary horizontal logo in light/dark variants, monogram favicon/app icon, print/letterhead mark.
- Icons: gavel, scales, file text, citation tag, book/statute, shield, search, microphone, upload, download, copy, share, settings, user, sparkles.
- Graphics: hero glow/grid and a legal-tech visual banner.

## Page inventory represented in the initial implementation

The first shipped experience should be a polished public landing page that makes the design system tangible: top navigation, hero with AI search, trust strip, feature cards, judgment/search preview, workflow section, testimonials, pricing preview, CTA banner, and legal footer. Components should be structured for the Next.js handoff paths `/components/ui`, `/components/jura-ai`, and `/components/icons`.

## Handoff structure

The PDF calls for `/components/ui/` atomic components, `/components/jura-ai/` business components, `/components/icons/` SVG/Lucide legal icon library, and `tailwind.config.js` for tokens.
