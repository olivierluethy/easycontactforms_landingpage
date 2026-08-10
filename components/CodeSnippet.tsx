'use client';

// The product's .snippet block with its copy button, reused for the marketing
// site's embed one-liners. The button turns green on copy, exactly like the
// dashboard's integration panel.

import { useState } from 'react';

export function CodeSnippet({
  code,
  label = 'Copy',
  ariaLabel,
}: {
  code: string;
  label?: string;
  ariaLabel?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked; failing quietly beats an error dialog.
    }
  };

  return (
    <div className="snippet" aria-label={ariaLabel}>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : 'Copy code to clipboard'}
        style={{
          position: 'absolute',
          top: 9,
          right: 9,
          padding: '4px 10px',
          border: `1px solid ${copied ? 'var(--success)' : 'rgba(255,255,255,0.16)'}`,
          borderRadius: 5,
          background: 'rgba(255,255,255,0.07)',
          color: copied ? 'var(--success)' : '#e6edf7',
          font: 'inherit',
          fontSize: 11.5,
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background var(--transition), color var(--transition), border-color var(--transition)',
        }}
      >
        {copied ? '✓ Copied' : label}
      </button>
      <pre style={{ margin: 0, whiteSpace: 'pre', paddingRight: 68 }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
