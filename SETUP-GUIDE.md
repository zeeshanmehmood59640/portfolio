# Portfolio Setup — Step by Step

## Prerequisites (check these first)
- Node.js 18+ → run: node --version
- Git → run: git --version
- A Claude Pro or Max subscription (needed for Claude Code)
- VS Code installed

---

## STEP 1 — Create GitHub Repo
1. Go to github.com → New repository
2. Name it: `portfolio`
3. Set to Public (Vercel needs to read it on free tier)
4. Add README: YES
5. .gitignore: Node
6. Click "Create repository"
7. Copy the repo URL (e.g. https://github.com/YOURUSERNAME/portfolio)

---

## STEP 2 — Clone & Bootstrap Next.js
Open your terminal (or VS Code integrated terminal) and run:

```bash
# Clone the repo
git clone https://github.com/YOURUSERNAME/portfolio
cd portfolio

# Create Next.js app INSIDE the repo folder
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm
# When asked "Would you like to use Turbopack?" → Yes
# When asked about ESLint → Yes

# Install additional dependencies
npm install framer-motion lucide-react @vercel/analytics
npm install ai @ai-sdk/anthropic
npm install @upstash/redis @upstash/ratelimit

# Install shadcn/ui
npx shadcn@latest init
# Choose: Default style, Slate base color, CSS variables: yes

# Add commonly needed shadcn components
npx shadcn@latest add button card badge sheet dialog input textarea

# Add typecheck script to package.json scripts section manually:
# "typecheck": "tsc --noEmit"
```

---

## STEP 3 — Add Your Config Files
Copy CLAUDE.md and CONTENT.md into the ROOT of your project folder
(same level as package.json):

```
portfolio/
  CLAUDE.md        ← paste here
  CONTENT.md       ← paste here
  package.json
  app/
  ...
```

Also create your environment file:

```bash
# Create .env.local (this is gitignored by default)
touch .env.local
```

Open .env.local and add:
```
ANTHROPIC_API_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
NEXT_PUBLIC_FORMSPREE_ID=
```
(Fill in values as you set up each service — see Step 5)

---

## STEP 4 — Connect to Vercel
1. Go to vercel.com → Sign up / Login with GitHub
2. Click "Add New Project" → Import your `portfolio` repo
3. Framework Preset: Next.js (auto-detected)
4. Click Deploy → wait ~60 seconds
5. You'll get a URL like `portfolio-xyz.vercel.app` — it's live!

### Connect your domain (zeeshanmehmood.be)
1. In Vercel project → Settings → Domains
2. Add `zeeshanmehmood.be` → Add
3. Add `www.zeeshanmehmood.be` → Add
4. Vercel shows you 2 DNS records:
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`
5. Go to Nomeo dashboard → DNS Management → add both records
6. Wait 10–60 minutes → check status in Vercel

### Add environment variables to Vercel
In Vercel → Project → Settings → Environment Variables,
add the same 4 variables from your .env.local once you have the values.

---

## STEP 5 — Get API Keys

### Anthropic (for the chatbot)
1. Go to console.anthropic.com
2. API Keys → Create Key → copy it
3. Add to ANTHROPIC_API_KEY in both .env.local and Vercel

### Upstash Redis (for rate limiting — free tier)
1. Go to upstash.com → Sign up free
2. Create a Redis database → choose Frankfurt (closest to Belgium)
3. Copy REST URL and REST Token
4. Add to UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN

### Formspree (for contact form — free tier)
1. Go to formspree.io → Sign up free
2. Create a new form → copy the form ID (e.g. xabc1234)
3. Add to NEXT_PUBLIC_FORMSPREE_ID

---

## STEP 6 — Install Claude Code
```bash
# Install via npm (requires Node 18+)
npm install -g @anthropic-ai/claude-code

# Or use the native installer (no Node required):
# Mac: curl -fsSL https://claude.ai/install.sh | sh
# Windows: winget install Anthropic.ClaudeCode

# Verify installation
claude --version

# Authenticate (opens browser)
claude auth login
```

For VS Code integration:
- Open VS Code Extensions (Ctrl+Shift+X)
- Search "Claude Code"
- Install the official Anthropic extension
- The Claude Code panel appears in your sidebar

---

## STEP 7 — First Claude Code Session

Open your terminal in VS Code (Ctrl+`) and navigate to your project:

```bash
cd portfolio
claude
```

Claude Code starts. Now type these prompts IN ORDER:

---

### Prompt 1 — Orient Claude (paste this exactly):
```
Read CLAUDE.md and CONTENT.md fully before doing anything else.
Then visit https://zeeshanmehmood59640.github.io/Profile/ and note
any content or sections that are NOT already in CONTENT.md.
Report back with: (1) what you read in both files, (2) anything
new found on the old portfolio. Do not write any code yet.
```

Wait for Claude to confirm it has read everything.

---

### Prompt 2 — Plan the build:
```
Create a detailed implementation plan for the portfolio. List every
file you will create, in what order, and what each one does.
Show me the plan and wait for my approval before writing any code.
Use plan mode.
```

Review the plan. If something looks wrong, correct it before proceeding.

---

### Prompt 3 — Build Phase 1 (foundation):
```
Implement Phase 1:
1. Update app/layout.tsx with full SEO metadata from CONTENT.md
2. Create the design system (globals.css color variables, Tailwind config)
3. Build the Navbar component (sticky, frosted glass, mobile hamburger menu)
4. Build the Hero section with typing animation and CTA buttons

Run typecheck and lint when done. Commit with message "feat: Phase 1 - layout, navbar, hero"
```

---

### Prompt 4 — Build Phase 2 (main sections):
```
Implement Phase 2:
1. About section
2. Skills section (grouped badges by category)
3. Experience timeline
4. Projects card grid with all 4 projects from CONTENT.md

All sections should animate in on scroll with Framer Motion.
Run typecheck and lint. Commit "feat: Phase 2 - about, skills, experience, projects"
```

---

### Prompt 5 — Build Phase 3 (achievements, education, contact):
```
Implement Phase 3:
1. Achievements section with the LegoLib award as a highlight card
2. Education timeline
3. Contact section with email link, LinkedIn link, and Formspree contact form

Run typecheck and lint. Commit "feat: Phase 3 - achievements, education, contact"
```

---

### Prompt 6 — Build Phase 4 (AI chatbot):
```
Implement Phase 4 — the AI chatbot:
1. Create app/api/chat/route.ts using the Vercel AI SDK streamText with
   claude-haiku-4-5-20251001. Use the system prompt from CONTENT.md.
   Add Upstash rate limiting (20 messages per IP per hour).
2. Create components/chatbot/ChatButton.tsx — floating button bottom-right
3. Create components/chatbot/ChatWindow.tsx — drawer with message list,
   input, send button, 3 starter question chips, streaming response display
4. Add the ChatButton to app/layout.tsx so it appears on all pages

The API key must NEVER be in client code. Test that streaming works.
Run typecheck and lint. Commit "feat: Phase 4 - AI chatbot"
```

---

### Prompt 7 — Final polish:
```
Final polish pass:
1. Check all pages on mobile (390px) and desktop (1280px)
2. Verify all external links in CONTENT.md are present and correct
3. Add a /public/cv.pdf placeholder (I will replace with real PDF)
4. Run Lighthouse audit hints — fix any obvious accessibility issues
5. Ensure og:image meta tag references a real file
6. Final typecheck, lint, and commit "feat: final polish"
```

---

## Daily Workflow After Setup

Every time you open the project:
```bash
# Pull latest
git pull

# Start dev server
npm run dev

# Open Claude Code in another terminal
claude
```

When Claude does something wrong twice → add a rule to CLAUDE.md so it
doesn't repeat. The file gets smarter over time.

---

## Useful Claude Code Commands
- `/init` — regenerate CLAUDE.md from codebase (use after major refactor)
- `Shift+Tab` — toggle plan mode (review before Claude writes code)
- `/compact` — compress conversation history to free context window
- `/clear` — start a fresh conversation
- `Escape` — interrupt Claude mid-generation
- `@filename` — reference a file in your prompt
