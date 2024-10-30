import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <div className="aboutme">
            <h1>網路程式設計about.html功課</h1>
            <h2>自我介紹</h2>
        </div>

        <div className="personalinformation">
            <table>
                <tr>
                    <th>名稱</th>
                    <th>年齡</th>
                    <th>系級</th>
                    <th>學號</th>
                    <th>座號</th>
                </tr>
                <tr>
                    <td><strong>張子儀</strong></td>
                    <td><strong>20</strong></td>
                    <td><strong>資管3C</strong></td>
                    <td><strong>411631087</strong></td>
                    <td><strong>045</strong></td>
                </tr>
            </table>
        </div>

        <div className="experience">
            <h2>經歷</h2>
            <ul>
                <li>畢業於桃園市大園國小</li>
                <li>畢業於桃園市立大園雙語國民中學</li>
                <li>畢業於桃園市立觀音高級中等學校</li>
                <li>曾在全聯福利中心打工</li>
                <li>現就讀淡江大學
                    <ul>
                        <li>2022-2023 淡江大學資管系1C</li>
                        <li>2023-2024 淡江大學資管系2C</li>
                        <li>2024-2025 淡江大學資管系3C 擔任IOS Club 資訊顧問社-社長</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div className="Hobby">
            <h2>興趣喜好</h2>
            <ul>
                <li>看漫畫</li>
                <li>看人繪圖/看別人排版、建模</li>
                <li>自學繪圖</li>
                <li>玩遊戲</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default App
