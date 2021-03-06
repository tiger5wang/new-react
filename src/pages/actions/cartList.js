// 这里是 action
// action 一般有两种写法
// 第一种写法是 标准的形式，是一个纯对象，但是实际工作中最好不这么写，而是写成action creator 的形式；
// export const changeCount = {
//     type: type,
//     payload: id
// }

// 第二种 action creator 的形式 ，是一个函数，它返回一个对象，这个对象才是真正的 action。
export const changeCount = (type, id) => {
    return {
        type: type,
        payload: id
    }
}

// 注意如果不是用 中间件 ，action creator 返回的必须是一个对象，如果包含其他的异步函数，需要使用异步中间件来处理
// 这里先使用 redux-thunk, 注意 dispatch 是在内层的，不是在外层，结合 mapDispatchToProps
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeCount: (type, id) => dispatch(changeCount(type, id)),
//         asyncChangeCount: (type, id) => dispatch(asyncChangeCount(type, id)),
//     }
// }

export const asyncChangeCount = (type, id) => dispatch => {
    setTimeout(() => {
        return dispatch({
            type: type,
            payload: id
        })
    }, 1000)
}

