import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root1")
)

// react-redux在connect()()中做了监控
// 监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
// store.subscribe(()=>{
//     ReactDOM.render(<App/>, document.getElementById("root1"))
// })