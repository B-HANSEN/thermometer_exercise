import './App.css';
import Thermometer from './components/thermometer';

function App() {
	return (
		<div className='App'>
			<Thermometer min={0} max={32} target={22} />
		</div>
	);
}

export default App;
