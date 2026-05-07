import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Classcomp } from './components/class&functional/Classcomp.jsx';
import { Functionalcomp } from './components/class&functional/Functionalcomp.jsx';
import { Jsxcomp } from './components/JSX/Jsxcomp.jsx';
import Effectcomp from './components/Hooks/Effectcomp.jsx';

import CustomHook from './components/Hooks/CustomHook.jsx';
import Refcomp from './components/Hooks/RefComp.jsx';

const virtualDOMroot = createRoot(document.getElementById('root'));

virtualDOMroot.render(
  <>
    <Classcomp />
    <Functionalcomp />
    <Jsxcomp />
    <Effectcomp />
    <CustomHook />
    <Refcomp/>
  </>
)