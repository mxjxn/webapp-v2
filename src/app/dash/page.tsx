// import next image
import RegisterModal from 'components/modal/RegisterModal'
import Button from 'components/Button'
import Card from 'components/Card'
// import chakra button

// make a component that opens RegisterM

export default async function Page() {
  const items = [
    { title: 'Item 1', description: 'Item 1 description' },
    { title: 'Item 2', description: 'Item 2 description' },
    { title: 'Item 3', description: 'Item 3 description' },
  ]
  return (
    <div>
      <RegisterModal isOpen={true} />
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
