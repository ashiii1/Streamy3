import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./utils/firebase-config";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Player from "./pages/Player";
// import TvShow from "./pages/TvShow";
import Netflix from "./pages/Netflix";
// import MoviePage from "./pages/MoviePage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route
          exact
          path="/"
          element={user ? <Netflix /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          exact
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUpPage />}
        />
        <Route
          exact
          path="/player"
          element={user ? <Player /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/tv"
          element={user ? <TvShow /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/movie"
          element={user ? <MoviePage /> : <Navigate to="/login" />}
        />
=======
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage/>} />
        <Route exact path="/player" element={<Player />} />
        {/* <Route exact path="/tv" element={<TvShow />} /> */}
        <Route exact path="/" element={<Netflix />} />
        {/* <Route exact path="/movie" element={<MoviePage />} /> */}
>>>>>>> 5fe5bc569ebc88aba11aaffac02098a66cbe2fbe
      </Routes>
    </BrowserRouter>
  );
}

export default App;
