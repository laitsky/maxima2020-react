import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { MxmButton, MxmLogoContainer } from '../../../components';
import studentService from '../../../services/student';

const StateOrgDetail = () => {
  const [data, setData] = useState({});
  const [nim, setNim] = useState(Number);
  let { organisator } = useParams();
  const history = useHistory();
  organisator = organisator.split('-').join(' ');
  useEffect(() => {
    document.title = 'Detail Organisator - STATE MAXIMA 2020';
    const decoded = jwtDecode(window.sessionStorage.getItem('token'));
    setNim(decoded.nim);

    const fetchData = async () => {
      try {
        let returnedData = await studentService.getAllState();
        returnedData = returnedData.find(
          (o) => o.name.toLowerCase() === organisator,
        );
        setData(returnedData);
      } catch (err) {
        console.log(err.response);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleClick = async () => {
    // eslint-disable-next-line camelcase
    const { state_id } = data;

    try {
      const returnedStatus = await studentService.registerState({
        nim,
        state_id,
      });
      if (returnedStatus === 200) {
        history.push({
          pathname: '/state',
          data: {
            severity: 'success',
            message: `Kamu berhasil mendaftarkan diri untuk STATE ${organisator.toUpperCase()}`,
          },
        });
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <>
      <h1>Ini adalah halaman organisator untuk {organisator}</h1>
      {data.link_logo && <MxmLogoContainer src={data.link_logo} />}
      <h3>
        TAMPILIN TANGGAL (ntar diisi sama div kosong aja, sesuai UInya
        karena tanggal blm dikasih), sama ruangan (DIGANTI SAMA LINK
        ZOOM). Liat State Website Ui di drive.
      </h3>
      <MxmButton onClick={handleClick}>
        Simpan (Hari {data.day})
      </MxmButton>
    </>
  );
};

export default StateOrgDetail;
