import '../styles/controls.css'

export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls">
      <button
        className={`play-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="speed-control">
        <label htmlFor="speed-range">속도</label>
        <div className="speed-buttons">
          {[0.5, 1, 1.5, 2].map((s) => (
            <button
              key={s}
              className={`speed-btn ${speed === s ? 'active' : ''}`}
              onClick={() => onSpeedChange(s)}
              aria-label={`속도 ${s}x`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
