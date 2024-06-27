import { FlipCard, NumberInput, SearchInput } from './components/index.jsx';
import './index.css';

function App() {
  const list = ['지', '지인', '지인혁'];

  return (
    <main>
      <SearchInput list={list} />
      <NumberInput />
      <FlipCard />
    </main>
  );
}

export default App;
