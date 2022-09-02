import logo from '../assets/logo.png';

export default function Banner() {
    return (
      <div className="lmj-banner">
        <img src={logo} alt='La maison jungle' className='lmj-logo'/>
        <h1>La maison jungle</h1>
      </div>
    );
}