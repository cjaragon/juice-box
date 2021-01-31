import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            input: {
                title: '',
                artist: '',
                genre: ''
            }
        }
        
    }
    
    render() {
        return (
            <form className='form'>
                <input
                className='input'
                placeholder='Title'
                onChange=''/>
                <input
                className='input'
                placeholder='Artist'
                onChange=''/>
                <input
                className='input'
                placeholder='Genre'
                onChange=''/>
                <button
                className='form-button'
                onClick=''> Add Song </button>
            </form>
        )
    }
}

export default Form