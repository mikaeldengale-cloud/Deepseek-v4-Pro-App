interface DropProps {
  x: number           // horizontal position in pixels
  y: number           // vertical position in pixels
  question: string    // the math question e.g. "7 + 3"
  isTargeted: boolean // is this the drop the player is currently answering?
}

function Drop({ x, y, question, isTargeted }: DropProps) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      {/* Drop shape */}
      <div
        style={{
          width: '72px',
          height: '86px',
          background: isTargeted
            ? 'radial-gradient(circle at 35% 35%, #90caf9, #0d47a1)'
            : 'radial-gradient(circle at 35% 35%, #64b5f6, #1565c0)',
          clipPath: 'polygon(50% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: isTargeted ? 'brightness(1.15)' : 'brightness(1)',
          transition: 'filter 0.2s, background 0.2s',
        }}
      >
        {/* Shine effect */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '14px',
            width: '14px',
            height: '20px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.25)',
            transform: 'rotate(-30deg)',
          }}
        />

        {/* Math question text */}
        <span
          style={{
            color: '#ffffff',
            fontSize: '11px',
            fontWeight: '600',
            textAlign: 'center',
            lineHeight: '1.2',
            padding: '0 4px',
            textShadow: '0 1px 2px rgba(0,0,0,0.4)',
            position: 'relative',
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {question}
        </span>
      </div>
    </div>
  )
}

export default Drop