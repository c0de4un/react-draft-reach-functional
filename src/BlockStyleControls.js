import { React } from "react";
import { BLOCK_TYPES } from "./BlockTypes";
import { StyleButton } from "./StyleButton";

export function BlockStyleControls(props) {
  let _blockType;
  if (props.editorState) {
    const _selection = props.editorState.getSelection();

    _blockType = props.editorState
      .getCurrentContent()
      .getBlockForKey(_selection.getStartKey())
      .getType();
  }

  return (
    <div className="RichEditor-controls">
      {
        BLOCK_TYPES.map((type) =>
          <StyleButton
            key={type.label}
            active={type.style === _blockType}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        )
      }
    </div>
  );
}
