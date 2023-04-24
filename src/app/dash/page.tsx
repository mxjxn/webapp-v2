// import next image
import Button from 'components/Button'
// import chakra button
export default async function Page() {
  const items = [
    { title: 'Item 1', description: 'Item 1 description', image: 'https://via.placeholder.com/100' },
    { title: 'Item 2', description: 'Item 2 description', image: 'https://via.placeholder.com/100' },
    { title: 'Item 3', description: 'Item 3 description', image: 'https://via.placeholder.com/100' },
  ]
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Dashboard page content</p>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.image} />
          <Button>Buy</Button>
        </div>
      ))}
    </div>
  )
}
