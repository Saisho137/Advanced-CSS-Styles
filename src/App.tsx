import { AnimatedLogos } from "@/pages";
import { Icons } from "@/components/icons";
import "./App.scss";

function App() {
	return (
		<>
			<h1>Styles Testing App</h1>
			<Icons.Logo className="logo" />
			<AnimatedLogos />
		</>
	);
}

export default App;
