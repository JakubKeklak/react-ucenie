import './text.css';

const Text = ({children, margin}) => {
    const variant = margin === false ? `text--margin-off` : '';
    return (
        <p className={`text ${variant} container`}>
            {children}
        </p>
    )
}

export default Text