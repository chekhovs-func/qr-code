import '../styles/card.scss';

export default function Card() {
  return (
    <section className='card'>
      <img
        className='qr-code'
        src='./assets/image-qr-code.png'
        alt='A QR code that redirects to the Frontend Mentor website.'
      />
      <h1 className='main-title'>Improve your front-end skills by building projects</h1>
      <p className='main-body'>
        Scan the QR code to visit Frontend Mentor and take your skills to <br />
        the next level
      </p>
    </section>
  );
}
