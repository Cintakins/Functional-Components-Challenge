
import NavBarSimple from './components/NavBarSimple';
import css from "./App.module.css";
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';

function App() {
  return (
    <div className="App">
      <EventsClass />
      <EventsFunctional />
    </div>
  );
}

export default App;