import { connect } from "./state/useGlobal";
import DarkMode from "./components/DarkMode";
import AppLayout from "./layouts/AppLayout";
import DarkModeClass from "./components/DarkModeOld";

function App() {
  return (
    <AppLayout>
      <div className="px-6 py-32 mx-auto text-center max-w-7xl sm:py-40 lg:px-8">
        <p className="text-base font-semibold leading-8 text-white">
          Touch me 👇
        </p>
        <DarkMode />
        <DarkModeClass />
      </div>
    </AppLayout>
  );
}

export default connect(App);
