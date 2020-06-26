import React from 'react'
import { useQuery } from 'react-apollo'
import dailyPack from './graphql/dailypack.graphql'

const AddToPackBtn: StorefrontFunctionComponent = ({
}) => {
  const { data, loading, error } = useQuery(dailyPack, {
    variables: {
      acronym: 'dailypack'
    },
    ssr: false
  })
  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <div> I'm test
    </div>
  )
}

export default AddToPackBtn
