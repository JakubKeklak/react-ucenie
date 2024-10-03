
import './container.css';

const Container = ({Title}) => {
    return (
        <div className='container'id={Title}>
           <h1 > {Title} </h1>
        </div>
    );
}

export default Container;