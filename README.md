# 📄 Shortly AI — Transform PDFs into Powerful Summaries with AI 🧠✨

Shortly AI is an AI-powered SaaS platform built with modern web technologies like **Next.js 15 App Router**, **Clerk**, **GeminiAI/ OpenAI GPT-4**, **Langchain**, **TailwindCSS**, and **Stripe**. It lets users upload PDF files, summarize them intelligently with AI (including emojis and markdown formatting), and manage those summaries efficiently.

> ✅ Try it now: [https://shortly-ai-summarize.vercel.app](https://shortly-ai-summarize.vercel.app)

![Project Banner](https://shortly-ai-summarize.vercel.app/summary-image.png)

---

## 🚀 Features

- 📄 Upload PDFs (up to 32MB) for instant summarization
- 🧠 AI-generated summaries with contextual understanding, markdown, and emojis
- 🗂️ View summaries in a beautiful dashboard with timestamps and status
- 🚫 Limit upload counts for free tier users
- 💳 Stripe-powered Pro subscription with secure checkout
- 🔐 Auth via Clerk with Google sign-in
- 📱 Responsive UI for all screen sizes
- 🎬 Nice animations using Motion

---

## 🛠️ Tech Stack

### ⚙️ Core Technologies
- **Next.js 15** — App Router, Server Components, API routes
- **React** — Interactive UI components
- **Clerk** — User authentication and session management
- **OpenAI GPT-4** — Text summarization
- **LangChain** — PDF text parsing, chunking, and embedding
- **UploadThing** — File upload handling
- **Neon (PostgreSQL)** — Serverless database
- **Stripe** — Subscription billing (Basic and Pro)
- **ShadCN/UI & TailwindCSS** — UI components and utility-first styling
- **TypeScript** — Type-safe development
- **Motion** — Beautiful animations

---

## 📦 Application Features

- 🔍 Context-rich summaries with insights and key points
- 📈 Interactive summary viewer with progress indicators
- 📂 Secure PDF upload and preview
- 👥 Dashboard for managing summaries
- 🧩 Modular component architecture (Shadcn, Motion, etc.)
- 📜 PDF-to-Markdown with emojis and AI formatting
- 📬 Stripe webhooks to handle subscription lifecycle events
- ⚡ Server actions, loading states, and form validation
- 📊 Word count and metadata extraction

---

## 🔐 Auth & Plans

| Plan | Upload Limit | Features |
|------|--------------|----------|
| Basic | 5 uploads    | Basic dashboard and AI summary |
| Pro  | Unlimited    | Full access + priority AI queue |

> ⚠️ Webhook routes are protected. Ensure the proper Stripe secret is set.

---

Create a `.env.local` file with:

GEMINIAI_API_KEY='...'
OPENAI_API_KEY='...'
STRIPE_SECRET_KEY='...'
STRIPE_WEBHOOK_SECRET='...'
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='...'
CLERK_SECRET_KEY='...'
UPLOADTHING_SECRET='...'
DATABASE_URL='...'


---

## 🧪 Local Development

```bash
git clone https://github.com/ADNUKUNHOME/SHORTLY-AI-SUMMARIZE
cd shortly-ai-summarize
npm install
npm run dev


📤 Deployment
This project is deployed on Vercel. Webhooks are set to point to:
https://shortly-ai-summirize.vercel.app/api/webhook 
Use Vercel's environment variables UI to securely store your secrets.