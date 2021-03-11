import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import { useEffect } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/ducks/user";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  let dispatch = useDispatch();
  let authentication = null;

  useEffect(() => {
    authentication = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => {
      authentication = null;
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
