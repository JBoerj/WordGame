import React from 'react'
import ReactDOM from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

function BasicComponent() {
    return <h1>Basic Component!</h1>
}

root.render(<BasicComponent />)