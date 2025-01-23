import './text.css';

const Text = ({children, margin, size}) => {
    const variant = margin === false ? `text--margin-off` : '';

    return (
        <p className={`text ${variant}  text--${size ? size : 'regular'} container`}>
            {children}
        </p>
    )
}

export default Text