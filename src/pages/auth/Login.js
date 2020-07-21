import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import logo from '../../assets/mxm20_logo.png';
import { MxmInput } from '../../components/mxm-reusable/input';
import { MxmButton } from '../../components/mxm-reusable/button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const responsiveImg = {
    height: '100%',
    maxHeight: 200,
    width: 'auto',
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <img src={logo} alt="MAXIMA 2020 Logo" style={responsiveImg} />
        <MxmInput
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MxmInput
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MxmButton mt="1.5em">Masuk</MxmButton>
        <Box mt={4}>
          <Link to="/daftar" exact style={{ textDecoration: 'none' }}>
            <h4 className="mxm-cyan">
              Belum memiliki akun?
              <span style={{ fontFamily: 'canaro-bold', marginLeft: 5 }}>Daftar</span>
            </h4>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
