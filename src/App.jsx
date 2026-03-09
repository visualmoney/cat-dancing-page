import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'
import './styles/app.css'

export default function App() {
  const { isPlaying, speed, toggle, changeSpeed } = useAnimation()

  return (
    <main className="app">
      <div className="stage-wrapper">
        <h1 className="title">
          <span className="title-emoji">🐱</span>
          댄싱 캣
          <span className="title-emoji">🎵</span>
        </h1>

        <DancingCat isPlaying={isPlaying} speed={speed} />

        <AnimationControls
          isPlaying={isPlaying}
          speed={speed}
          onToggle={toggle}
          onSpeedChange={changeSpeed}
        />

        <p className="subtitle">
          {isPlaying ? '신나게 춤추는 중... 🕺' : '잠깐 쉬는 중... 😴'}
        </p>
      </div>
    </main>
  )
}
