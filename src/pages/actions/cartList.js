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

