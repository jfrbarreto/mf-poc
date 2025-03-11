import './App.css';

import ProviderButton2 from 'provider2/component';
// import { CONSTANT } from 'provider2/constant';
import { useStuff } from 'provider2/hook';

const App = () => {

  const { writeStuff } = useStuff()


  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>

      {/* <p>{CONSTANT}</p>  */}

      <ProviderButton2 label='123' onClick={writeStuff} />
    </div>
  );
};

export default App;
