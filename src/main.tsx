import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/antd.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  /*
   * React18 strict模式已启用
   * 以下代码在 development 模式下，会立即执行两次，用以模拟组件的卸载和装载。
   * 具体内容请查看 https://react.docschina.org/docs/strict-mode.html
   * useEffect(() => {
   *    console.log('mount')
   * }, [])
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
