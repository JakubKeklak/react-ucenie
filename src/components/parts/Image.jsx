import './Image.css'

const Image = ({ src, alt }) => {
    return (
        <picture>
            <source media="(max-width:700px)" width="200" height="80" srcset={src} />
            <img src={src} alt={alt} className="image" />
        </picture>
    )
}

export default Image