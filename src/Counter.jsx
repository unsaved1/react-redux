import { connect } from "react-redux";
import * as actions from './actions';
// import { bindActionCreators } from "redux";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="counter">
            <h1 className="counter__title">{counter}</h1>
            <button onClick={dec} className="counter__btn">dec</button>
            <button onClick={inc} className="counter__btn">inc</button>
            <button onClick={rnd} className="counter__btn">rnd</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

// const mapDispatchToProps = (dispatch) => {
//     const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
//     return {
//         inc,
//         dec,
//         rnd
//     }
// }

export default connect(mapStateToProps, actions)(Counter);