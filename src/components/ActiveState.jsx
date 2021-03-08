import Output from '../containers/OutputContainer';
import Eating from '../containers/Eating';
import Playing from '../containers/Playing';
import Napping from '../containers/Napping';

const ActiveState = () => (
    <>
        <h1>Meow</h1>
        <Output />
        <Eating />
        <Playing />
        <Napping />
    </>
)

export default ActiveState;
