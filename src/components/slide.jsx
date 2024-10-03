import './slide.css'

const Slide = ({image, imageTitle, title, text}) => {
    return (
        <div className="slide" style={{ backgroundImage: `url(${image})` }}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Slide