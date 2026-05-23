import { useState } from 'react'
import Cloud from './components/Cloud'
import Drop from './components/Drop'
import type { DropData } from './types'

const CLOUDS = [
  { id: 1, x: 5,  y: 60,  size: 'large'  as const },
  { id: 2, x: 25, y: 30,  size: 'medium' as const },
  { id: 3, x: 48, y: 80,  size: 'small'  as const },
  { id: 4, x: 65, y: 45,  size: 'large'  as const },
  { id: 5, x: 80, y: 25,  size: 'medium' as const },
]

// Sample drops to test our component - not real gameplay yet
const TEST_DROPS: DropData[] = [
  { id: 1, x: 100, y: 120, question: '7 + 3',  answer: 10, speed: 1 },
  { id: 2, x: 280, y: 200, question: '15 - 6', answer: 9,  speed: 1 },
  { id: 3, x: 480, y: 150, question: '4 × 3',  answer: 12, speed: 1 },
  { id: 4, x: 650, y: 280, question: '9 + 8',  answer: 17, speed: 1 },
]

function App() {
  // targetedId tracks which drop the player is currently answering
  const [targetedId, setTargetedId] = useState<number>(1)

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(180deg, #b8dff0 0%, #cceaf7 60%, #a8d4e8 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Clouds */}
      {CLOUDS.map(cloud => (
        <Cloud
          key={cloud.id}
          x={cloud.x}
          y={cloud.y}
          size={cloud.size}
        />
      ))}

      {/* Raindrops */}
      {TEST_DROPS.map(drop => (
        <Drop
          key={drop.id}
          x={drop.x}
          y={drop.y}
          question={drop.question}
          isTargeted={drop.id === targetedId}
        />
      ))}

      {/* Ocean */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(180deg, #2196f3 0%, #1976d2 100%)',
        }}
      />

      {/* HUD */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.75)',
            borderRadius: '20px',
            padding: '6px 16px',
            fontSize: '22px',
            display: 'flex',
            gap: '4px',
          }}
        >
          ❤️❤️❤️
        </div>

        <div
          style={{
            background: 'rgba(255,255,255,0.75)',
            borderRadius: '12px',
            padding: '6px 18px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
          }}
        >
          SCORE: 0
        </div>
      </div>

      {/* Answer input */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <input
          type="number"
          placeholder="Type answer..."
          style={{
            padding: '8px 20px',
            borderRadius: '20px',
            border: '2px solid rgba(255,255,255,0.8)',
            background: 'rgba(255,255,255,0.9)',
            fontSize: '16px',
            textAlign: 'center',
            outline: 'none',
            width: '180px',
          }}
        />

        {/* Shows which drop is targeted - for testing */}
        <div style={{ fontSize: '13px', color: '#555' }}>
          Targeting drop {targetedId} — click a number to change:
          {TEST_DROPS.map(d => (
            <button
              key={d.id}
              onClick={() => setTargetedId(d.id)}
              style={{
                marginLeft: '6px',
                padding: '2px 8px',
                borderRadius: '10px',
                border: 'none',
                background: d.id === targetedId ? '#1976d2' : '#ccc',
                color: d.id === targetedId ? '#fff' : '#333',
                cursor: 'pointer',
              }}
            >
              {d.id}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App