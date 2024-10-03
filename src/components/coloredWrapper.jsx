import './coloredWrapper.css';

const ColoredWrapper = ({children, color}) => {
    return (
        <div className={`colored-wrapper colored-wrapper--${color}`} >
            {children}
        </div>
    );
}

export default ColoredWrapper;