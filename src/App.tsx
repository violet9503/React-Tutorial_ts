import React from 'react';
import Counter from './Counter';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';

const App: React.FC = () => {
  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  // return <MyForm onSubmit={onSubmit} />;

  return (
    <>
      <Counter />
      <hr />
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </>
  );
};

export default App;
