import * as React from 'react';
import PageContentWrapper from '../PageContentWrapper/PageContentWrapper';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export interface AppState {}

class App extends React.PureComponent<{}, AppState> {
  render() {
    return (
      <Router>
        {/*Header*/}
        <PageContentWrapper>
          <Switch>
            <Route exact path='/'>
              <pre>Hello world!</pre>
            </Route>
          </Switch>
        </PageContentWrapper>
        {/* Footer */}
      </Router>
    );
  }
}

export default App;
