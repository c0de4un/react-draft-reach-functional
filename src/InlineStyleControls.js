import { React } from "react";
import { StyleButton } from "./StyleButton";
import { INLINE_STYLES } from "./InlineStyles";

export function InlineStyleControls(props) {
  const _currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {
        INLINE_STYLES.map((type) =>
          <StyleButton
            key={type.label}
            active={_currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        )
      }
    </div>
  );
}
