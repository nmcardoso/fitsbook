import React from 'react';
import LoginForm from './LoginForm';
import Navbar from './Navbar';

class LoginRoute extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid flex-grow-1 d-flex align-items-center justify-content-center" style={{ marginTop: '-50px' }}>
          <div className="card" style={{ maxWidth: '550px' }}>
            {/* <img src={process.env.PUBLIC_URL + '/img/login_card_header.jpg'}
              className="card-img-top"
              style={{ objectFit: 'cover', maxHeight: '56px' }}
              alt="" /> */}
            <div className="card-header" style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/img/login_card_header.jpg')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: 'black'
            }}>
              <h5 className="text-white my-2">LOGIN</h5>
            </div>
            <div className="card-body">
              <LoginForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginRoute;