import React, { useState } from 'react'

const Input = (props) => {

    const [ search , setSearch] = useState('')
    const onHandlerCHanger = ({ target: { value } }) => {

        setSearch(value)
        props.startDate(value);
    }

    console.log(search)
    return (
        <input
            type={props.type}
            class={`form-control ${props.class}`}
            value={search}
            onChange={onHandlerCHanger}
        />
    )
};

export default Input;