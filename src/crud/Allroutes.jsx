import {React, useEffect } from 'react'
import { Route ,Routes} from 'react-router-dom'
import SinglePage from "./SinglePage"
import Get from './Get'
import Delete from './Delete'
import Counter from "../smallApp/Counter"
import Post from './Post'
import ReactGA from 'react-ga'
const Allroutes = () => {

  useEffect(() => {
    ReactGA.initialize('G-GNKR5KPJHR');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
        <Routes>
            <Route path='/'  Component={Get} />
            <Route path='/counter'  Component={Counter} />
            <Route path='/post'  Component={Post} />


            <Route path='/product/:id' Component={SinglePage} />
            <Route path='/delete/:id' Component={Delete} />
            <Route path='/delete' Component={Delete} />



        </Routes>

    </div>
  )
}

export default Allroutes