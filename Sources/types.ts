// This describes what a single raindrop looks like in our game
export interface DropData {
  id: number          // unique identifier
  x: number           // horizontal position
  y: number           // vertical position
  question: string    // math question shown on drop
  answer: number      // correct answer
  speed: number       // how fast it falls
}