import { manifest } from '../../../data/about';
import BlinkCursor from '../../ui/BlinkCursor';
import TerminalWindow from '../../ui/TerminalWindow';

const Str = ({ children }) => <span className="text-ink">"{children}"</span>;

/** Renders the manifest object as a JSON-style terminal output. */
export default function ManifestTerminal() {
  const entries = Object.entries(manifest.data);

  return (
    <TerminalWindow
      title={manifest.path}
      className="h-full"
      footer={
        <>
          <span>{manifest.hash}</span>
          <span>STATUS: OK</span>
        </>
      }
    >
      <pre className="font-mono text-[13px] leading-7 whitespace-pre-wrap">
        <span className="text-crimson-soft">{manifest.prompt} cat</span> manifest.json{'\n'}
        <span className="text-crimson-soft">{'{'}</span>
        {'\n'}
        {entries.map(([key, value], i) => (
          <span key={key}>
            {'  '}
            <Str>{key}</Str>:{' '}
            {Array.isArray(value) ? (
              <>
                [{value.map((v, j) => (
                  <span key={v}>
                    <Str>{v}</Str>
                    {j < value.length - 1 && ', '}
                  </span>
                ))}]
              </>
            ) : key === 'status' ? (
              <span className="text-crimson-soft">"{value}"</span>
            ) : (
              <Str>{value}</Str>
            )}
            {i < entries.length - 1 && ','}
            {'\n'}
          </span>
        ))}
        <span className="text-crimson-soft">{'}'}</span>
        {'\n\n'}
        <span className="text-crimson-soft">{manifest.prompt}</span> <BlinkCursor />
      </pre>
    </TerminalWindow>
  );
}
