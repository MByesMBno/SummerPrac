import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Header />} path='/'/>
                <Route path='*' element={<div>Not found</div>}/>
            </Routes>
        </BrowserRouter>
    )    
}
export default Router 