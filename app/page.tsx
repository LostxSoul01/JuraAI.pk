"use client";

import { useState } from "react";
import { Badge, Button, Card, SectionHeading } from "@/components/ui/Primitives";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  FilePlus2,
  FileText,
  Gavel,
  Globe2,
  Menu,
  Mic,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Tag,
  UserRound,
  X,
} from "@/components/icons/LegalIcons";
import { AiResponseCard, CitationCard, FileStatusRow, UploadDropzone, type Judgment } from "@/components/jura-ai/LegalComponents";

const judgments: Judgment[] = [
  {
    title: "Federation of Pakistan v. Aitzaz Ahsan",
    court: "SUPREME COURT",
    citation: "PLD 2022 SC 23",
    year: "2022",
    score: "95%",
    summary: "A leading authority on constitutional review and the limits of executive discretion under public law.",
  },
  {
    title: "Suo Motu Case No. 4 of 2021",
    court: "LAHORE HIGH COURT",
    citation: "2021 SCMR 145",
    year: "2021",
    score: "91%",
    summary: "The Court restated the test for maintainability where an alternate remedy is available to a petitioner.",
  },
  {
    title: "Muhammad Aslam v. The State",
    court: "ISLAMABAD HIGH COURT",
    citation: "2023 YLR 782",
    year: "2023",
    score: "88%",
    summary: "A concise reference on evidentiary value, due process, and the protection of fundamental rights.",
  },
];

const features = [
  { icon: Search, title: "Search case law in plain English", copy: "Move from a natural-language question to authoritative Pakistani judgments, with every result traceable to its source.", link: "Explore case search" },
  { icon: FilePlus2, title: "Draft with legal context", copy: "Turn your case facts into a structured first draft while keeping your argument, citations, and next steps in view.", link: "See AI drafting" },
  { icon: ShieldCheck, title: "Citations you can trust", copy: "Get source tags, relevance scores, and verification cues designed for careful professional review—not black-box answers.", link: "Our approach" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");
  const [selectedJudgment, setSelectedJudgment] = useState<Judgment | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  }

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showToast(query.trim() ? "Jura AI is preparing your research trail" : "Try a question about Pakistani law");
  }

  return (
    <main className="site-shell">
      <div className="topbar"><div className="container topbar-inner"><span><strong>JuraAI.pk</strong> · Legal intelligence, built for Pakistan</span><span className="topbar-right"><span className="topbar-dot" /> Case database updated weekly <span>English / اردو</span></span></div></div>

      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="JuraAI.pk home"><span className="brand-mark">J</span><span className="brand-copy"><strong>JuraAI.pk</strong><span>Legal intelligence platform</span></span></a>
          <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`} aria-label="Main navigation">
            <a href="#search">Case Search</a><a href="#drafting">AI Drafting</a><a href="#pricing">Pricing</a><a href="#about">About</a>
          </nav>
          <div className="nav-actions"><a className="login-link" href="#login">Log in</a><Button size="sm" onClick={() => showToast("Welcome to JuraAI — your workspace is ready")}>Get started <ArrowRight size={14} /></Button></div>
          <button className="menu-trigger" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Pakistan’s legal intelligence platform</span>
            <h1>Clarity for every <em>case.</em></h1>
            <p className="hero-lede">Search the law, understand the precedent, and draft with confidence. JuraAI brings Pakistan’s legal knowledge into one intelligent workspace.</p>
            <form className="hero-search" onSubmit={submitSearch}>
              <Search size={18} color="#63798a" aria-hidden="true" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ask a question about Pakistani law..." aria-label="Ask Jura AI a legal question" />
              <button className="search-mic" type="button" aria-label="Use voice input" onClick={() => showToast("Voice search is ready for your next question")}><Mic size={16} /></button>
              <Button size="md" type="submit">Ask Jura AI <Send size={14} /></Button>
            </form>
            <div className="hero-microcopy"><span><i /> Verified sources</span><span><i /> Built for advocates</span><span><i /> Private by design</span></div>
          </div>
          <div className="hero-panel" aria-label="Example Jura AI response">
            <div className="panel-chrome"><span>JURA / RESEARCH WORKSPACE</span><span className="panel-dots"><i /><i /><i /></span></div>
            <div className="panel-body">
              <div className="panel-query"><span className="panel-query-icon"><Search size={15} /></span><div><p>What is the scope of Article 199 jurisdiction?</p><small>Asked in Constitutional Law · 10:42 AM</small></div></div>
              <div className="panel-answer"><div className="panel-answer-head"><span className="ai-spark"><Sparkles size={13} /></span>Jura AI’s answer <Badge tone="success" dot>Verified</Badge></div><p>Article 199 enables a High Court to protect fundamental rights and review public functionaries where no equally efficacious alternate remedy exists.</p><div className="panel-sources"><span className="panel-source">PLD 2022 SC 23</span><span className="panel-source">Article 199</span><span className="panel-source">12 sources</span></div></div>
            </div>
            <div className="panel-footer"><span className="verified"><CheckCircle2 size={12} /> Citation trail active</span><span>0.8s response</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><span className="trust-label">Made for the people who move the law forward</span><div className="trust-logos"><span>Legal Aid</span><span>BAR COUNCIL</span><span>Advocata</span><span>Law & Policy</span></div></div></section>

      <section className="section" id="about"><div className="container"><SectionHeading eyebrow="One focused workspace" title="Less time searching. More time thinking." copy="The law is complex enough. JuraAI keeps the tools that matter close, so research, drafting, and review flow together." /><div className="feature-grid">{features.map(({ icon: Icon, title, copy, link }) => <Card key={title} className="feature-card"><span className="feature-icon"><Icon size={20} /></span><h3>{title}</h3><p>{copy}</p><a href="#search" className="feature-link">{link} <ArrowRight size={13} /></a></Card>)}</div></div></section>

      <section className="section section-soft workspace-section" id="search"><div className="container workspace-grid"><div className="workspace-copy"><span className="eyebrow">Advanced case search</span><h3>Find the judgment behind the argument.</h3><p>Filter by citation, section, court, or keyword. Every result is organized to help you evaluate relevance at a glance.</p><ul className="check-list"><li><span><Check size={12} /></span> Search across Supreme Court and High Court decisions</li><li><span><Check size={12} /></span> See relevance scores and source citations</li><li><span><Check size={12} /></span> Save, share, and export your research trail</li></ul><Button variant="dark" onClick={() => showToast("Case Search workspace opened")}>Open Case Search <ArrowRight size={14} /></Button></div><div className="search-results-preview"><div className="app-window"><div className="app-window-bar"><div className="app-window-title"><span className="brand-mark">J</span>Case Search</div><div className="app-window-title"><span className="badge badge-neutral"><UserRound size={10} /> Advocate</span><Settings2 size={14} color="#718595" /></div></div><div className="app-window-body"><div className="app-search"><Search size={14} color="#7b8f9d" /><input aria-label="Preview case search" defaultValue="Article 199 alternate remedy" /><button aria-label="Submit preview search"><ArrowRight size={13} /></button></div><div className="filter-row"><span className="filter-pill active">All courts</span><span className="filter-pill">2020—2024</span><span className="filter-pill"><SlidersHorizontal size={9} /> Filters</span></div>{judgments.slice(0, 2).map((item) => <div className="mini-result" key={item.title}><div><h4>{item.title}</h4><p>{item.court} · {item.citation}</p></div><span className="score">{item.score}</span></div>)}</div></div></div></div></section>

      <section className="section workflow-section" id="drafting"><div className="container"><SectionHeading align="center" eyebrow="From question to first draft" title="A better way to move through the work." copy="JuraAI is designed around the real rhythm of legal practice: understand the issue, test the authority, then write." /><div className="workflow-grid"><div className="workflow-step"><span className="step-number">01 / RESEARCH</span><h3>Ask the right question</h3><p>Use plain language or a precise citation. JuraAI turns the question into a focused legal research trail.</p></div><div className="workflow-step"><span className="step-number">02 / VERIFY</span><h3>Read with context</h3><p>Compare judgments, surface relevant passages, and keep verified source tags attached to every insight.</p></div><div className="workflow-step"><span className="step-number">03 / DRAFT</span><h3>Write the next version</h3><p>Generate a structured starting point, then refine it with your own judgment and professional expertise.</p></div></div></div></section>

      <section className="section"><div className="container"><div className="judgment-heading"><SectionHeading eyebrow="The citation layer" title="Authority, not approximation." copy="A preview of the kind of judgment cards you can collect, compare, and return to." /><Button variant="secondary" onClick={() => showToast("Saved citations are coming to your workspace")}>View saved citations <ArrowRight size={14} /></Button></div><div className="judgment-grid">{judgments.map((item) => <CitationCard key={item.title} judgment={item} onQuickView={() => setSelectedJudgment(item)} />)}</div></div></section>

      <section className="section ai-lab" id="ai"><div className="container ai-lab-grid"><div className="ai-lab-art"><div className="art-card"><div className="art-card-top"><span>JURA AI / 03</span><span><Sparkles size={12} /></span></div><div className="art-card-icon"><Gavel size={22} /></div><h4>Draft smarter.</h4><p>Context-aware legal drafting, grounded in the authorities you select.</p><div className="art-scan"><span /></div></div></div><div className="ai-lab-copy"><span className="eyebrow">AI drafting workspace</span><h3>Turn a blank page into a considered first draft.</h3><p>Upload a brief, a petition, or your notes. JuraAI extracts the facts, identifies the legal issue, and helps you shape the next version without losing the thread.</p><UploadDropzone /><FileStatusRow name="constitutional-petition.docx" progress={68} /><AiResponseCard onExport={() => showToast("Export options opened")} /></div></div></section>

      <section className="section" id="pricing"><div className="container"><SectionHeading align="center" eyebrow="Plans for every practice" title="Start with the work in front of you." copy="Simple access for students, advocates, and teams building a more thoughtful legal practice." /><div className="pricing-grid"><Card className="pricing-card"><h3>Law Student</h3><p>Build research habits that stay with you beyond the classroom.</p><div className="price">Free <span>/ forever</span></div><ul className="price-list"><li><Check size={14} /> 10 searches per month</li><li><Check size={14} /> Case law discovery</li><li><Check size={14} /> Personal saved citations</li></ul><Button variant="secondary" onClick={() => showToast("Student plan selected")}>Start exploring</Button></Card><Card className="pricing-card featured"><span className="popular-tag">MOST POPULAR</span><h3>Advocate</h3><p>Research and draft with a focused assistant by your side.</p><div className="price">PKR 2,499 <span>/ month</span></div><ul className="price-list"><li><Check size={14} /> Unlimited case search</li><li><Check size={14} /> AI drafting workspace</li><li><Check size={14} /> Export and source trails</li></ul><Button onClick={() => showToast("Advocate plan selected")}>Book a walkthrough <ArrowRight size={14} /></Button></Card><Card className="pricing-card"><h3>Law Firm</h3><p>Bring a shared, secure research layer to your whole team.</p><div className="price">Let’s talk <span>custom</span></div><ul className="price-list"><li><Check size={14} /> Team workspaces</li><li><Check size={14} /> Admin and billing controls</li><li><Check size={14} /> Priority support</li></ul><Button variant="secondary" onClick={() => showToast("A firm consultation request is ready")}>Contact sales</Button></Card></div></div></section>

      <section className="section testimonial-section"><div className="container"><div className="testimonial-card"><div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" />)}</div><blockquote>“The value is not just speed. It is having the source, the context, and the next question in one place.”</blockquote><cite>— Ayesha R. · Advocate, Lahore</cite></div></div></section>

      <section className="cta-banner"><div className="container cta-inner"><div><span className="eyebrow">Your next argument starts here</span><h2>Make room for better legal thinking.</h2><p>Bring your question, your case file, or simply your curiosity. JuraAI is ready when you are.</p></div><Button size="lg" onClick={() => showToast("Your JuraAI workspace is ready to begin")}>Ask Jura AI <ArrowRight size={15} /></Button></div></section>

      <footer className="footer" id="login"><div className="container footer-top"><div><a className="brand" href="#top"><span className="brand-mark">J</span><span className="brand-copy"><strong>JuraAI.pk</strong><span>Legal intelligence platform</span></span></a><p className="footer-description">A thoughtful legal research and drafting workspace for Pakistan’s next generation of advocates.</p></div><div><h4>Explore</h4><div className="footer-links"><a href="#search">Case Search</a><a href="#drafting">AI Drafting</a><a href="#pricing">Pricing</a><a href="#about">About JuraAI</a></div></div><div><h4>Resources</h4><div className="footer-links"><a href="#faq">Help center</a><a href="#faq">Guides & insights</a><a href="#faq">API access</a><a href="#faq">Contact support</a></div></div><div><h4>Legal</h4><div className="footer-links"><a href="#privacy">Privacy policy</a><a href="#terms">Terms of service</a><a href="#disclaimer">Legal disclaimer</a><a href="#security">Security</a></div></div></div><div className="container footer-bottom"><span>© 2026 JuraAI.pk. All rights reserved.</span><span>AI supports legal work; professional judgment remains yours.</span></div></footer>

      {selectedJudgment ? <div className="modal-backdrop" role="presentation" onClick={() => setSelectedJudgment(null)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="judgment-modal-title" onClick={(event) => event.stopPropagation()}><div className="modal-header"><h3 id="judgment-modal-title">{selectedJudgment.title}</h3><button className="modal-close" onClick={() => setSelectedJudgment(null)} aria-label="Close judgment summary"><X size={19} /></button></div><p>{selectedJudgment.summary}</p><div className="modal-source"><strong>{selectedJudgment.citation}</strong> · {selectedJudgment.court} · {selectedJudgment.year}<br />This quick view is a preview of the source context and relevance trail available in the full workspace.</div><div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}><Button onClick={() => { setSelectedJudgment(null); showToast("Judgment saved to your research trail"); }}>Save citation <Check size={14} /></Button></div></div></div> : null}
      {toast ? <div className="toast"><CheckCircle2 size={16} />{toast}</div> : null}
    </main>
  );
}
