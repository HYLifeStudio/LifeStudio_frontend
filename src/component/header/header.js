import React from 'react';
import './header.scss';
import { useHistory } from 'react-router';

function Header() {
  let history = useHistory();

  return (
    <>
      <div>
          <button
            class="button_1"
            onClick={() => {
              history.replace('/');
              window.location.reload();
            }}
          >인생 사진관</button>
    </div>
    </>
  );
}

export default Header;
