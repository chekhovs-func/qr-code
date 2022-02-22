import '../styles/footer.scss';

export default function Footer() {
  return (
    <p className='footer-body'>
      Challenge by{' '}
      <a className='footer-link' href='https://www.frontendmentor.io/home' target={'_blank'}>
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a className='footer-link' href='https://github.com/chekhovs-func' target={'_blank'}>
        Bert Butler
      </a>
      .{' '}
    </p>
  );
}
