import Highlight, { defaultProps } from 'prism-react-renderer'
import { EditorButtons } from '~/components/EditorButtons'
import vsDark from 'prism-react-renderer/themes/vsDark';

export default function CodeEditor(props) {
  console.log('showDropdown', props.showDropdown);
  return (
    <Highlight {...defaultProps} className={props.className} code={props.code} language={props.language}  theme={vsDark}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
        <EditorButtons code={props.code} showDropdown={props.showDropdown} />
        <pre className="table w-full whitespace-pre-wrap bg-slate-800 text-slate-50 p-6 font-mono text-sm">
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
