import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { useMyContext } from '../../context/Mycontexts';
import { useNavigate } from 'react-router-dom'; // ✅ import navigate
import { getAuth, signOut } from "firebase/auth";
import {auth } from '../../firebase'; // ✅ import auth
const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

function Footer() {
  const { setUser, setIsLogin, setUsername , setPassword } = useMyContext();
  const theme = useTheme();
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleLogout = () => {
     signOut(auth)
    setUser(null);
    setIsLogin(false);
    setUsername('');
    setPassword('');
    navigate('/'); // ✅ redirect to home
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Quiz Arena</Logo>
        <button onClick={handleLogout}>Logout</button>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
