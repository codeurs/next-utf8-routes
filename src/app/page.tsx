import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li><Link href={'/élève'}>élève</Link> ➡️ ❌</li>
      <li><Link href={'/école'}>école</Link> ➡️ ✔️ </li>
    </ul>
  )
}
