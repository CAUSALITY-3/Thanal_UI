import { FC } from 'react';
import "./Login.scss";
import { Button } from '../../components/Buttons/Button';

const Login: FC = () => {
    const vai = ''

  return (
      <>
        <div className='joinpage-container'>
            <div className='joinpage-center-div'>
                <div className="joinpage-h1-div">
                    <h1 className='joinpage-h1'>Sherlock Poker</h1>
                </div>
                <div className="joinpage-form">
                    <div className="joinpage-form-content">
                        <input type="text" placeholder='name' className='joinpage-form-name-room' required />
                    </div>
                    <div className="joinpage-form-content">
                        <input type="text" placeholder='room' className='joinpage-form-name-room' disabled value={vai} />
                    </div>
                    <div className="joinpage-form-content">
                        <Button content="JOIN NOW"  />
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default Login