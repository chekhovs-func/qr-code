import '../styles/app.scss';
import Card from './Card';

export default function App() {
  return (
    <div className='container'>
      <Card />
      <section className='attribution'>
        <p className='body'>
          Challenge by{' '}
          <a
            className='link'
            href='https://www.frontendmentor.io/home'
            target={'_blank'}
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            className='link'
            href='https://github.com/chekhovs-func'
            target={'_blank'}
          >
            Robert Butler
          </a>
          .{' '}
        </p>
      </section>
    </div>
  );
}
