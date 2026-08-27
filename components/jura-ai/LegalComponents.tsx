"use client";

import { useState } from "react";
import { Badge, Button, Card } from "@/components/ui/Primitives";
import {
  Check,
  CheckCircle2,
  Copy,
  Download,
  FileText,
  Gavel,
  MoreHorizontal,
  Sparkles,
  Upload,
} from "@/components/icons/LegalIcons";

export type Judgment = {
  title: string;
  court: string;
  citation: string;
  year: string;
  score: string;
  summary: string;
};

export function CitationCard({ judgment, onQuickView }: { judgment: Judgment; onQuickView: () => void }) {
  return (
    <Card className="citation-card">
      <div className="citation-topline">
        <div className="court-mark"><Gavel size={14} /> {judgment.court}</div>
        <Badge tone="success" dot>{judgment.score} Match</Badge>
      </div>
      <h3>{judgment.title}</h3>
      <p className="citation-meta">{judgment.citation} · {judgment.year}</p>
      <p className="citation-summary">{judgment.summary}</p>
      <div className="citation-actions">
        <Button variant="ghost" size="sm" onClick={onQuickView}>Quick view <span aria-hidden="true">↗</span></Button>
        <button className="icon-button" aria-label="More judgment actions"><MoreHorizontal size={17} /></button>
      </div>
    </Card>
  );
}

export function AiResponseCard({ onExport }: { onExport: () => void }) {
  const [copied, setCopied] = useState(false);

  function copyResponse() {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Card className="ai-response-card">
      <div className="ai-response-header">
        <div className="ai-avatar"><Sparkles size={17} /></div>
        <div><strong>Jura AI</strong><span>Research assistant · just now</span></div>
        <Badge tone="gold" dot>Processing AI</Badge>
      </div>
      <div className="ai-response-body">
        <p><strong>Short answer</strong></p>
        <p>Under Article 199, the High Court may exercise constitutional jurisdiction when an alternate remedy is not equally efficacious. The record should establish a clear public-law element and an arguable jurisdictional error.</p>
        <div className="source-row"><span className="source-chip"><CheckCircle2 size={13} /> PLD 2022 SC 23</span><span className="source-chip"><CheckCircle2 size={13} /> 2021 SCMR 145</span></div>
      </div>
      <div className="ai-response-footer">
        <span className="typing-dot"><i /> Verified against 12 sources</span>
        <div className="response-tools">
          <button className="tool-button" onClick={copyResponse}><Copy size={14} /> {copied ? "Copied" : "Copy"}</button>
          <button className="tool-button" onClick={onExport}><Download size={14} /> Export</button>
        </div>
      </div>
    </Card>
  );
}

export function UploadDropzone() {
  const [uploaded, setUploaded] = useState(false);
  return (
    <button className={`upload-dropzone ${uploaded ? "is-uploaded" : ""}`} onClick={() => setUploaded(true)} type="button">
      <span className="upload-icon">{uploaded ? <Check size={20} /> : <Upload size={20} />}</span>
      <span className="upload-copy">
        <strong>{uploaded ? "Case file ready" : "Upload your case file"}</strong>
        <span>{uploaded ? "petition-draft.docx · 48% processed" : "Drag & drop a PDF or DOCX, or browse"}</span>
      </span>
      <span className="upload-limit">{uploaded ? "Processing" : "Max 25 MB"}</span>
    </button>
  );
}

export function FileStatusRow({ name, progress }: { name: string; progress: number }) {
  return (
    <div className="file-status-row">
      <div className="file-icon"><FileText size={17} /></div>
      <div className="file-status-copy"><strong>{name}</strong><span>{progress === 100 ? "Drafting complete" : "Extracting case facts and citations"}</span><div className="progress-track"><span style={{ width: `${progress}%` }} /></div></div>
      {progress === 100 ? <Check className="file-check" size={16} /> : <span className="file-progress">{progress}%</span>}
    </div>
  );
}
