import { Slider } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

function SliderAntd(props) {
    const onChange = (value) => {
        console.log('onChange: ', value);
    };

    const onAfterChange = (value) => {
        console.log('onAfterChange: ', value);
    };
    return (
        <>
            {/* <Slider range defaultValue={[1000, 50000]} disabled={false} /> */}
            <Slider
                range
                max={1000}
                min={100}
                step={200}
                defaultValue={[300, 500]}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />
        </>
    );
}

export default SliderAntd;
