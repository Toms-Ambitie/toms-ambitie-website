import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * ErrorBoundary — catches render errors from any child component or lazy-loaded chunk.
 *
 * Without this, any unhandled error during navigation causes React to unmount the
 * entire component tree, leaving a blank page. The user then has to hard-refresh
 * to recover. With this boundary, we show a friendly error state with a reload button.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log to console so we can spot errors in Vercel runtime logs
    console.error('[ErrorBoundary] Render error caught:', error, info.componentStack);
  }

  handleReload = () => {
    // Full reload resets chunk state and re-fetches any failed lazy imports
    window.location.reload();
  };

  handleBack = () => {
    // Try to go back without reload first; if that fails, go home
    try {
      window.history.back();
    } catch {
      window.location.href = '/';
    }
    // After a short delay, if we're still on the error page, reset state
    setTimeout(() => {
      this.setState({ hasError: false });
    }, 300);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FBFAF6',
            padding: '40px 24px',
            textAlign: 'center',
          }}
        >
          {/* Volt accent top */}
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 4, background: '#C8F000' }} />

          <div
            style={{
              fontFamily: "'Inconsolata', monospace",
              fontSize: 10,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(14,14,12,0.4)',
              marginBottom: 24,
            }}
          >
            Oeps · Fout opgetreden
          </div>

          <div
            style={{
              fontFamily: "'Bebas Neue', 'Helvetica Neue', sans-serif",
              fontSize: 'clamp(48px, 8vw, 104px)',
              lineHeight: 0.92,
              color: '#0E0E0C',
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}
          >
            Pagina niet<br />geladen.
          </div>

          <p
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: 17,
              lineHeight: 1.65,
              color: 'rgba(14,14,12,0.6)',
              marginBottom: 40,
              maxWidth: 420,
            }}
          >
            Er is een onverwachte fout opgetreden. Probeer de pagina te verversen of ga terug.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={this.handleReload}
              style={{
                fontFamily: "'Inconsolata', monospace",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                background: '#C8F000',
                color: '#0E0E0C',
                border: 0,
                padding: '12px 24px',
                cursor: 'pointer',
              }}
            >
              Pagina vernieuwen →
            </button>
            <button
              onClick={this.handleBack}
              style={{
                fontFamily: "'Inconsolata', monospace",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                background: 'transparent',
                color: '#0E0E0C',
                border: '1.5px solid rgba(14,14,12,0.25)',
                padding: '12px 24px',
                cursor: 'pointer',
              }}
            >
              ← Ga terug
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
