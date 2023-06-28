import { useState } from 'react'
import Button from '../Button'
import { Select, Label, Container } from './styles'

const Filter = () => {
  const btns = [
    'Chatbot',
    'Agências',
    'Marketing Digital',
    'Geração de Leads',
    'Mídia Paga',
  ]

  const [isClicked, setIsClicked] = useState<null | number>(null)

  return (
    <Container>
      <div>
        {btns.map((ele, index) => (
          <Button
            setIsClicked={setIsClicked}
            isClicked={isClicked}
            types="secondary"
            index={index}
            key={index}
            text={ele}
          />
        ))}
      </div>
      <div>
        <h3></h3>
        <Label htmlFor="data">Ordenar por</Label>
        <Select id="data">
          <option selected value={'Data de publicação'} disabled hidden>
            Data de publicação
          </option>
          <option value="day">Hoje</option>
          <option value="week">Esta semana</option>
          <option value="month">Este mês</option>
          <option value="year">Este ano</option>
        </Select>
      </div>
    </Container>
  )
}

export default Filter
