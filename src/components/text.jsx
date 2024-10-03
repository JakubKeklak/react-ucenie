import './text.css';

const Text = ({children}) => {
    return (
        <p className='text container'>
            {children}
        </p>
    )
}

export default Text