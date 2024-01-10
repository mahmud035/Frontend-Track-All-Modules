// import { useState } from 'react';
// import UseStateExample from './pages/UseStateExample';
// import StateLiftingExample from './pages/StateLiftingExample';
// import UseStateExampleForm from './pages/UseStateExampleForm';

// import UseReducerExample from './pages/UseReducerExample';
// import UseReducerExampleForm from './pages/UseReducerExampleForm';

// import UseEffectExample from './pages/UseEffectExample';
// import UseEffectCleanupExample from './pages/UseEffectCleanupExample';
// import UseEffectFetchCleanupExample from './pages/UseEffectFetchCleanupExample';
// import UseEffectUseObjectAsADependency from './pages/UseEffectUseObjectAsADependency';

// import UseRefExample from './pages/UseRefExample';
// import UseRefReferenceOfHtmlTag from './pages/UseRefReferenceOfHtmlTag';
// import UseRefWithForwardRef from './pages/UseRefWithForwardRef';

// import ContextAPIExample from './pages/ContextAPIExample';
// import { MenuItem, MenuList } from './components/Menu';

import UsersContainer from './components/UsersContainer';

function App() {
  // const [counter, setCounter] = useState(0);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {/* <UseStateExample /> */}
      {/* <StateLiftingExample counter={counter} setCounter={setCounter} /> */}
      {/* <UseStateExampleForm /> */}

      {/* <UseReducerExample /> */}
      {/* <UseReducerExampleForm /> */}

      {/* <UseEffectExample /> */}
      {/* <UseEffectCleanupExample /> */}
      {/* <UseEffectFetchCleanupExample /> */}
      {/* <UseEffectUseObjectAsADependency /> */}

      {/* <UseRefExample /> */}
      {/* <UseRefReferenceOfHtmlTag /> */}
      {/* <UseRefWithForwardRef /> */}

      {/* <ContextAPIExample /> */}
      {/* <MenuList>
        <MenuItem />
      </MenuList> */}

      {/* Pattern */}
      <UsersContainer />
    </div>
  );
}

export default App;
