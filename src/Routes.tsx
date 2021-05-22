import React from "react"
import { RootState } from "./redux/common/reducers"
import { useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"

import Home from "./pages/home"
import Platinum from "./pages/protocols/platinum"
import Deluxe from "./pages/protocols/deluxe"
import Signature from "./pages/protocols/signature"
import Console from "./pages/console/dashboard"
import Users from "./pages/users"
import Page401 from "./pages/common/Page401"
import Page404 from "./pages/common/Page404"


const Routes = () => {
  const user_permissions = useSelector((state: RootState) => state.session.user?.permissions) ?? []
  const user_role = useSelector((state: RootState) => state.session.user?.role) ?? ''
  const has_maintenance = user_permissions.includes('maintenance')
  const has_treatment = user_permissions.includes('treatment')
  const is_admin = user_role === 'admin'

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/protocols/platinum" component={has_treatment ? Platinum : Page401} />
      <Route path="/protocols/deluxe" component={Deluxe} />
      <Route path="/protocols/signature" component={Signature} />
      <Route path="/console" component={has_maintenance ? Console : Page401} />
      <Route path="/users" component={is_admin ? Users : Page401} />
      <Route component={Page404} />
    </Switch>
  )
}

export default Routes
