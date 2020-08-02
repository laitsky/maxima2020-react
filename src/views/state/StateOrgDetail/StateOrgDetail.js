import React, { useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const StateOrgDetail = () => {
  const { organisator } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!location.day) history.push('/404');
    document.title = 'Detail Organisator - STATE MAXIMA 2020';
  }, [history, location.day]);
  return (
    <div>
      <h1>
        Ini adalah halaman organisator untuk
        {organisator}
      </h1>
      <h3>
        Nanti disini akan ditampilkan data-data yang diminta, kemudian
        ada submisi form untuk konfirmasi pendaftaran state
      </h3>
    </div>
  );
};

export default StateOrgDetail;
