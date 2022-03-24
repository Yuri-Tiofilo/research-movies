import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import Loading from 'components/Controllers/Loading'
import routes from 'routes'

import { Route } from './Route'

import { Container } from './styles'

const Main = () => (
  <Container>
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
            isPrivate={route.isPrivate}
          />
        ))}
      </Switch>
    </Suspense>
  </Container>
)

export { Main }
