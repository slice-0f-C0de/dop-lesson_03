import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    setTitle: (title: string) => void
}

const UniversalInput = (props: PropsType) => {

    const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    };

    return (
            <input onChange={onchangeHandler} />
    );
};

export default UniversalInput;