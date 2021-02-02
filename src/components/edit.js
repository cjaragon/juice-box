import React, { Component } from 'react'
class Edit extends Component {
    constructor() {
        super()
        this.state = {
            update: ''
        }
    }

    handleChange = (val) => {
        this.setState({ update: val })
    }

    updateSong = () => {
        const {update} = this.state
        const {updateSongFn, id, showEdit} = this.props

        updateSongFn(id, update)
        showEdit()
    }

    render() {
        return (

            <div className='edit-menu' >
                <input className='edit-input'
                    placeholder='Genre'
                    onChange={e => this.handleChange(e.target.value)} />
                <button className='update-button' 
                onClick={this.updateSong} >Update</button>
            </div>

        )
    }
}

export default Edit