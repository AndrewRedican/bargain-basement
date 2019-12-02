import React from 'react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from 'shards-react'

const PackageCard = props => (
  console.log(props),
  (
    <Card style={{ maxWidth: '20%', marginLeft: 10, marginRight: 10 }}>
      <CardHeader>{props.name}</CardHeader>
      <CardImg src='https://place-hold.it/300x200' />
      <CardBody>
        <CardTitle>{props.price} USD</CardTitle>
        <p>{props.description}</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      {/* <CardFooter>{}</CardFooter> */}
    </Card>
  )
)

export default PackageCard
