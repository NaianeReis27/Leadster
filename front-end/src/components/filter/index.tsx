import Button from '../Button'
import { Select, Label, Container } from './styles'

const Filter = () => {
  return (
    <Container>
      <div>
        <Button types="secondary" text="Chatbot" />
        <Button types="secondary" text="Agências" />
        <Button types="secondary" text="Marketing Digital" />
        <Button types="secondary" text="Geração de Leads" />
        <Button types="secondary" text="Mídia Paga" />
      </div>
      <div>
        <h3></h3>
        <Label htmlFor="data">Ordenar por</Label>
        <Select id="data">
          <option selected value={"Data de publicação"} disabled hidden>
          Data de publicação
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </Select>
      </div>
    </Container>
  )
}

export default Filter
