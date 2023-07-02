import './App.css'
import Dashboard from './pages/Dashboard'

function App() {
	return (
		<>
			<nav className="navbar">

				<div className="navbar__start" >
					<button className="navbar__btn">
						<img src="../src/assets/chevron left.svg" alt="" />

						<p>Atras</p>
					</button>

					<button className="navbar__btn">
						<img src="../src/assets/sidebar.svg" alt="" />
					</button>
				</div>

				<div className="navbar__end">
					<button className="navbar__btn">
						<img src="../src/assets/settings.svg" alt="" />
					</button>
				</div>
			</nav>

			<main>
				<Dashboard />
			</main>

		</>
	)
}

export default App
