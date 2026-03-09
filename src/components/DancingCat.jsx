import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

export default function DancingCat({ isPlaying, speed }) {
  const animationStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: `${2 / speed}s`,
  }

  return (
    <div className="cat-stage">
      <div className="music-notes" aria-hidden="true">
        {isPlaying && (
          <>
            <span className="note note-1">♪</span>
            <span className="note note-2">♫</span>
            <span className="note note-3">♩</span>
            <span className="note note-4">♬</span>
          </>
        )}
      </div>

      <div
        className="cat-container"
        style={animationStyle}
        role="img"
        aria-label="춤추는 고양이"
      >
        <img
          src={catSvg}
          alt="춤추는 고양이"
          className="cat-image"
        />
      </div>

      <div className="dance-floor" aria-hidden="true" />
    </div>
  )
}
