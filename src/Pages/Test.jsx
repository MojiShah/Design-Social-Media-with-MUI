import React from 'react'



const Test = () => {

    const ChangeHandler = (e) => {
        console.log('file', e.target.files[0])
    }

    return (
        <div>
            <input type="file" name="file" onChange={ChangeHandler} />
        </div>
    )
}

export default Test