import { React, useState } from "react";

export function StyleButton(props) {
  const [active, setActive] = useState(false);

  let _classes = 'RichEditor-styleButton';
  if (active) {
    _classes += ' RichEditor-activeButton';
  }

  const _toggle = () => {
    if (props.onToggle !== undefined) {
      setActive(!active);

      props.onToggle(props.style);
    }
  };

  return (
    <span
      className={_classes}
      onClick={() => {
        _toggle();
      }}
    >
      {props.label}
    </span>
  );
}
