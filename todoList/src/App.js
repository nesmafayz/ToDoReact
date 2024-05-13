import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="application">
    {/* <Helmet>
        <meta charSet="utf-8" />
        <title>ReguLoom</title>
        <link rel="canonical" href="/images/reg.png" />
    </Helmet> */}

    <Helmet>
      <title> ReguLoom </title>
      <meta name="description" content="This is an awesome page made with React." />
      <link rel="canonical" href="/images/reg.png" />
    </Helmet>
</div>
  );
}

export default App;
