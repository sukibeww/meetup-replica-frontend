import React, {createContext, Component} from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isLoggedIn: false,
    token: null,
    userName: null
  }

  checkSession = () =>{
    const session = window.sessionStorage.getItem("insta-clone")
    if(session){
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  login = (data) =>{
    this.setState((prevState)=> {
      const newState = {
        isLoggedIn: !prevState.isLoggedIn,
        token: data.token,
        userName: data.user.name
      }
      window.sessionStorage.setItem("insta-clone", data.token)
      return newState;
    })
  }

  logout = async () => {
    sessionStorage.removeItem("insta-clone");
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
        token: null,
        userName: null
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