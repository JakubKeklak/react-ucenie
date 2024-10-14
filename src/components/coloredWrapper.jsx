import './coloredWrapper.css';

const ColoredWrapper = ({children, color,id}) => {
    return (
        <div className={`colored-wrapper colored-wrapper--${color}`} id={id}>
            {children}
        </div>
    );
}

export default ColoredWrapper;