import { BrowserRouter } from 'react-router-dom'
import './App.css'
import OneBlock from './components/oneBlock/OneBlock'
import { HowItWorks } from './components/how_it_works/HowItWorks'
import { ThreeBlock } from './components/threeBlock/ThreeBlock'
import { SwiperBlock } from './components/swiperBlock/SwiperBlock'
import { QuestionsBlock } from './components/questions/QuestionsBlock'
import { IntervieweeBlock } from './components/intervieweeBlock/IntervieweeBlock'
import { FormBlock } from './components/forma/FormBlock'


function App() {
  return (
    <BrowserRouter>
      <OneBlock />
      <main>
        <HowItWorks />
        <ThreeBlock />

        <SwiperBlock />
        <QuestionsBlock />
        <IntervieweeBlock />
        <FormBlock />
      </main>

      <footer className='footer'>
        <div className="container">
          <p className='footer__text'>© 2021 Лаборатория интернет</p>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
