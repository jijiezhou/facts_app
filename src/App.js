/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-09-21 22:22:18
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-09-21 22:38:05
 */
import "./style.css";

function App() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I learned logo" />
        <h1>Today I learned</h1>
      </div>
      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
  );
}

export default App;
