import './App.css';
import { fromEvent } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

fromEvent(document, 'click').pipe(
  filter((event: Event) => event.target instanceof HTMLButtonElement),
  map((event: Event) => event.target as HTMLButtonElement),
  map((button: HTMLButtonElement) => button.id),
  tap((buttonId: string) => console.log(`Reporting click on button: ${buttonId}`)),
).subscribe();

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ color: 'purple', fontSize: '4rem' }}>Hello</h1>
      <p style={{ color: 'gray', fontSize: '2rem', marginTop: '2rem' }}>
        In this page, every button click is registered and sent to a server
      </p>
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <button
          id="option-1"
          style={{
            backgroundColor: 'purple',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '1rem'
          }}
        >
          Option 1
        </button>
        <button
          id="option-2"
          style={{
            backgroundColor: 'purple',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Option 2
        </button>
      </div>
    </div>
  );
}

export default App;
