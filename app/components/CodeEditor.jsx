import Highlight, { defaultProps } from 'prism-react-renderer'
import { CopyButton } from '~/components/CopyButton'
import vsDark from 'prism-react-renderer/themes/vsDark';

export function CodeEditor(props) {
  return (
    <Highlight {...defaultProps} code={props.code} language={props.language} theme={vsDark}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
        <CopyButton />
        <pre className="table w-full whitespace-pre-wrap bg-slate-800 text-slate-50 rounded-lg p-6 font-mono text-sm">
          {tokens.map((line, i) => (
            <div className="table-row" key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
        </>
      )}
    </Highlight>
  )
}
