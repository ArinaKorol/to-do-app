import './App.css'
import './index.css'
import { Header } from '../components/header.component.jsx'
import { AsideBar } from '../components/asidebar.component.jsx'
import { RunningTasks } from '../components/running-tasks.component.jsx'
import { CompletedTasks } from '../components/completed-tasks.component.jsx'

function App() {
  return (
    <>
    <Header/>
    <div className='content'>
      <AsideBar/>
      <div className='mainContent'>
        <RunningTasks />
        <CompletedTasks />
      </div>
      <button className='btn-addnewpage'><img src="/newpage.svg" /></button>
    </div>
    </>
  )
}


export default App