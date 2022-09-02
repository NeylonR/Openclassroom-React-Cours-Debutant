import './App.css';

function Cart() {
  const [monstera, lierre, bouquet] = [8,10,15];
  const total = monstera + lierre + bouquet;
  return (
    <>
      <h2>Panier</h2>
      <ul>
        <ol>Monstera {monstera}e</ol>
        <ol>olerre {lierre}e</ol>
        <ol>Bouquet de fleurs {bouquet}e</ol>
        <ol>Prix total : {total +'e'}</ol>
      </ul>
    </>
  )
}
function Banner() {
  const text = 'lorem lorem laleil oel';
  return (
    <>
      <h1>Boutique mon c</h1>
      <p>{text}</p>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Banner />
      <Cart />
    </div>
  );
}

export default App;
