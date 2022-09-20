import { useRef, useState, forwardRef } from 'react';

function InputIME(props, ref) {
    const { onChange, value, ...otherProps } = props;

    const onComposition = useRef(false);
    const [inputValue, setInputValue] = useState('');

    const _onChange = (event) => {
        setInputValue(event.target.value);

        if (event.type === 'compositionstart') {
            onComposition.current = true;
            return;
        }

        if (event.type === 'compositionend') {
            onComposition.current = false;
        }

        if (!onComposition.current) {
            onChange(event);
        }
    };

    return (
        <input
            {...otherProps}
            ref={ref}
            value={inputValue}
            onChange={_onChange}
            onCompositionEnd={_onChange}
            onCompositionStart={_onChange}
        />
    );
}

export default forwardRef(InputIME);
