import styled from 'styled-components';

import useForm, {Email} from '.';

const Card = styled.div`
  margin: 20%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default () => {
  const {name, description, email} = useForm({name: '', description: '', email: Email.of('')});
  return (
    <Card>
      <Form>
        <input {...name} />
        <input {...description} />
        <input {...email} />
        <input type="submit"/>
      </Form>
    </Card>
  )
};