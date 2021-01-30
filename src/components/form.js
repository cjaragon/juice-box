import React, {Component} from 'react'

class From extends Component {
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
            <form>
                <input
                className='input'
                placeholder=''
                onChange=''/>
                <input
                className='input'
                placeholder=''
                onChange=''/>
                <input
                className='input'
                placeholder=''
                onChange=''/>
                <button
                className='form-button'
                onClick=''> Add Song </button>
            </form>
        )
    }
}

export default Form