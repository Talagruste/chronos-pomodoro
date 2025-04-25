import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';

import './styles/global.css';
import './styles/theme.css';

type MainTemplateProps = {
    children: React.ReactNode;
}

export function MainTemplate({children}: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}