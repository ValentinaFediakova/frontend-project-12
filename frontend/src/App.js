import logo from './logo.svg';
import './App.css';

const fastifyStatic = require('@fastify/static');
fastify.register(fastifyStatic, {
  root: `${process.cwd()}/my-app/build`,
});

fastify.setNotFoundHandler((req, res) => {
  res.sendFile('index.html');
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
