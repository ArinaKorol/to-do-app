import './App.css'
import './index.css'
import { Header } from '../src/components/header.component.jsx'
import { AsideBar } from '../src/components/asidebar.component.jsx'
import { RunningTasks } from '../src/components/running-tasks.component.jsx'
import { CompletedTasks } from '../src/components/completed-tasks.component.jsx'

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