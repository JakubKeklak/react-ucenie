import './Heading.css';

const Heading = ({children, tag}) => {
    const HeadingTag = tag ?? 'h1';

    return (
        <HeadingTag className='heading'>
            {children}
        </HeadingTag>
    )
}

export default Heading