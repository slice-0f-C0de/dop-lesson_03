import React from 'react';

type PropsType = {
    callback: () => void
    name: string
}

const UniversalButton = (props: PropsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default UniversalButton;