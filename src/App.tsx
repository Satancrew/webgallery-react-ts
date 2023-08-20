import { Gallery } from './Components';

function App() {
  return (
    <div className="App">
      <Gallery
        photos={[
          {
            id: 1,
            src: '/photos/1.jpg',
            preview: '/photos/preview/1.jpg',
            alt: 'Norway photo 1',
          },
          {
            id: 2,
            src: '/photos/2.jpg',
            preview: '/photos/preview/2.jpg',
            alt: 'Norway photo 2',
          },
          {
            id: 3,
            src: '/photos/3.jpg',
            preview: '/photos/preview/3.jpg',
            alt: 'Norway photo 3',
          },
          {
            id: 4,
            src: '/photos/4.jpg',
            preview: '/photos/preview/4.jpg',
            alt: 'Norway photo 4',
          },
          {
            id: 5,
            src: '/photos/5.jpg',
            preview: '/photos/preview/5.jpg',
            alt: 'Norway photo 5',
          },
          {
            id: 6,
            src: '/photos/6.jpg',
            preview: '/photos/preview/6.jpg',
            alt: 'Norway photo 6',
          },
          {
            id: 7,
            src: '/photos/7.jpg',
            preview: '/photos/preview/7.jpg',
            alt: 'Norway photo 7',
          },
        ]}
      />
    </div>
  );
}

export default App;
