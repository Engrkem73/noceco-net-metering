import React from 'react'
import { Consumer } from './types'
import ConsumersCard from '../components/ConsumersCard'

interface ConsumerCardListProps {
  filteredConsumers: Consumer[]
}

const ConsumerCardList: React.FC<ConsumerCardListProps> = ({ filteredConsumers }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {filteredConsumers.map((consumer) => (
        <ConsumersCard key={consumer.id} {...consumer} />
      ))}
    </div>
  )
}

export default ConsumerCardList