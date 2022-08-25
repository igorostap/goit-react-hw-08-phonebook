import { Button, Section } from './AppBar.styled';
export default function UserAuth() {
  return (
    <>
      <Section>
        <Button to={'register'}>Register</Button>
        <Button to={'login'}>LogIn</Button>
      </Section>
    </>
  );
}
