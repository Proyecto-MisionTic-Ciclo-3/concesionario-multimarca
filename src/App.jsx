import PublicLayout from 'layouts/PublicLayout';
import Login from 'pages/Login';
import Admin from 'pages/admin/Index';
import Registro from 'pages/Registro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css'
import Index from 'pages/Index';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import Vehiculos from 'pages/admin/Vehiculos';
import Clientes from 'pages/admin/Clientes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/admin','/admin/vehiculos','/admin/clientes']}>
          <PrivateLayout>
            <Switch>
              <Route path='/admin/vehiculos'>
                <Vehiculos/>
              </Route>
              <Route path='/admin/clientes'>
                <Clientes/>
              </Route>
              <Route path='admin'>
                <Admin/>
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>

        <Route path={['/login', '/registro']}>
          <AuthLayout>
            <Switch>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/registro'>
                <Registro/>
              </Route>
            </Switch>
          </AuthLayout>
        </Route>

        <Route path={['/']}>
          <PublicLayout>
            <Switch>
              <Route path='/'>
                <Index/>
              </Route>
            </Switch>

          </PublicLayout>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
