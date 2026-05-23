interface CloudProps {
  x: number      // horizontal position (percentage across screen)
  y: number      // vertical position in pixels
  size: 'small' | 'medium' | 'large'
}

function Cloud({ x, y, size }: CloudProps) {
  // Different sizes for variety
  const dimensions = {
    small:  { width: 80,  height: 28 },
    medium: { width: 120, height: 38 },
    large:  { width: 160, height: 48 },
  }

  const { width, height } = dimensions[size]

  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* Main cloud body */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: 'rgba(255,255,255,0.85)',
          borderRadius: '50px',
        }}
      />
      {/* Left bump */}
      <div
        style={{
          position: 'absolute',
          bottom: '40%',
          left: '15%',
          width: '40%',
          height: '70%',
          background: 'rgba(255,255,255,0.85)',
          borderRadius: '50%',
        }}
      />
      {/* Right bump */}
      <div
        style={{
          position: 'absolute',
          bottom: '40%',
          left: '40%',
          width: '35%',
          height: '60%',
          background: 'rgba(255,255,255,0.85)',
          borderRadius: '50%',
        }}
      />
    </div>
  )
}

export default Cloud