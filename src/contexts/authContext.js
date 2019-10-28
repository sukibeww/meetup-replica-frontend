import React, {createContext, Component} from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isLoggedIn: false,
    token: null
  }
  checkSession = () =>{
    const session = window.sessionStorage.getItem("insta-clone")
    if(session){
      return true
    }
    return false
  }
  login = (token) =>{
    this.setState((prevState)=> {
      const newState = {
        isLoggedIn: !prevState.isLoggedIn,
        token: token
      }
      window.sessionStorage.setItem("insta-clone", token)
      return newState;
    })
  }
  logout = async () => {
    sessionStorage.removeItem("insta-clone");
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
        token: null
      }
    })
  }
  render() {
    return (
      <AuthContext.Provider value={{...this.state, login: this.login , logout: this.logout, checkSession: this.checkSession}}>
        {this.props.children}
      </AuthContext.Provider>
      );
  }
}

export default AuthContextProvider;