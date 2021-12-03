import { Routes, Route } from 'react-router-dom';
import HelloWorld from 'components/HelloWorld';
import NotFound from 'components/NotFound';

const App = () => (
  <Routes>
    <Route index element={<HelloWorld />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
