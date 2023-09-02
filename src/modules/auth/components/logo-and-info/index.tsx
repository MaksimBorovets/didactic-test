import { LinkTo, Logo } from '../../styles';
import LOGO from '../../../../assets/didactic-logo.png';

export const LogoAndInfo = () => {
  return (
    <>
      <Logo src={LOGO} alt="Website Logo" />
      <p>
        <center>
          <i>currently in beta</i>
        </center>
      </p>
      <p>
        Sign-up for personalized recommendations.{' '}
        <p>
          Learn more on how it works on{' '}
          <LinkTo
            href="https://www.didactic.ai/"
            target="_blank"
            rel="noopener noreferrer">
            Didactic.AI
          </LinkTo>
          .
        </p>
      </p>
    </>
  );
};
