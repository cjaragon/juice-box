import Form from './form'
import logo from './logo.png'

const Header = (props) => {
    return (
        <section className='header'>
            <img src={logo} alt='Logo' className='logo'/>
            
            <br/>
            <Form addSong={props.addSong} />
        </section>
    )
}

export default Header