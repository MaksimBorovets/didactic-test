import { Container, SignInBox } from './styles';
import { LogoAndInfo } from './components/logo-and-info';
import { SignInForm } from './components/signin-form';

export const Auth = () => {
  return (
    <Container>
      <SignInBox>
        <LogoAndInfo />
        <SignInForm />
      </SignInBox>
    </Container>
  );
};
