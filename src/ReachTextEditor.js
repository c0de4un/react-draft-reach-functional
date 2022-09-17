import { React, useState, useRef } from "react";
import {Editor, EditorState, RichUtils, getDefaultKeyBinding} from 'draft-js';
import { BlockStyleControls } from "./BlockStyleControls";
import { InlineStyleControls } from "./InlineStyleControls";
import 'draft-js/dist/Draft.css';

export function ReachTextEditor(props) {
  const editorRef = useRef();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const _toggleInlineStyle = (inlineStyle) => {
    const newState = RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle);

    setEditorState(newState);
  };

  const _handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);

      return true;
    }
    return false;
  };

  const _mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        editorState,
        4, /* maxDepth */
      );

      if (newEditorState !== editorState) {
        setEditorState(newEditorState);
      }

      return;
    }

    return getDefaultKeyBinding(e);
  };

  const _toggleBlockType = (blockType) => {
    const newState = RichUtils.toggleBlockType(this.state.editorState, blockType);

    setEditorState(newState);
  }

  return (
    <div className="RichEditor-root">
      <BlockStyleControls
        editorState={editorState}
        onToggle={(_type) => {
          _toggleBlockType(_type);
        }}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={(_style) => {
          _toggleInlineStyle(_style);
        }}
      />
      <div
        className={'RichEditor-editor'}
        onClick={() => {
          editorRef.current.focus();
        }}
      >
        <Editor
          editorState={editorState}
          onChange={(_state) => {setEditorState(_state);}}
          handleKeyCommand={(command, editorState) => {_handleKeyCommand(command, editorState);}}
          keyBindingFn={(e) => {_mapKeyToEditorCommand(e);}}
          placeholder={'Введите текст'}
          ref={editorRef}
          spellCheck={true}
        />
      </div>
    </div>
  );
}
