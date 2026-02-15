 export const isLogIn = () => {
    if (document.cookie == "username=admin") return true;
    return false;
  };