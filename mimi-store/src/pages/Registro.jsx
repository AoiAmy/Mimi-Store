import { useState } from "react";

function Registro() {
	const [nombre, setNombre] = useState("");
	const [correo, setCorreo] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);
	const [nombreTouched, setNombreTouched] = useState(false);
	const [correoTouched, setCorreoTouched] = useState(false);
	const [passwordTouched, setPasswordTouched] = useState(false);

	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		password: /^(?=.*[A-Za-z])(?=.*\d).{8,12}$/
	};

	const nombreValido = nombre === "" ? null : expresiones.nombre.test(nombre);
	const correoValido = correo === "" ? null : expresiones.correo.test(correo);
	const passwordValido = password === "" ? null : expresiones.password.test(password);

	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");

		if (!expresiones.nombre.test(nombre)) {
			setError("Nombre inválido (solo letras y espacios, máximo 40).");
			return;
		}
		if (!expresiones.correo.test(correo)) {
			setError("Correo inválido.");
			return;
		}
		if (!expresiones.password.test(password)) {
			setError("Contraseña inválida (8-12 caracteres, al menos una letra y un número).");
			return;
		}

		const registros = JSON.parse(localStorage.getItem("registros")) || [];
		registros.push({ nombre: nombre.trim(), correo: correo.trim(), password });
		localStorage.setItem("registros", JSON.stringify(registros));

		setSuccess(true);
		setTimeout(() => {
			setSuccess(false);
			setNombre("");
			setCorreo("");
			setPassword("");
		}, 1500);
	};

	return (
		<div className="container py-5">
			<h1>Registro</h1>

			<form onSubmit={handleSubmit} noValidate>
				<div className="mb-3">
					<label className="form-label">Nombre</label>
					<input
						type="text"
						className={`form-control ${nombreTouched ? (nombreValido ? "is-valid" : "is-invalid") : ""}`}
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						onBlur={() => setNombreTouched(true)}
					/>
					<div className="invalid-feedback">Solo letras y espacios. Máximo 40 caracteres.</div>
				</div>

				<div className="mb-3">
					<label className="form-label">Correo</label>
					<input
						type="email"
						className={`form-control ${correoTouched ? (correoValido ? "is-valid" : "is-invalid") : ""}`}
						value={correo}
						onChange={(e) => setCorreo(e.target.value)}
						onBlur={() => setCorreoTouched(true)}
					/>
					<div className="invalid-feedback">Introduce un correo válido.</div>
				</div>

				<div className="mb-3">
					<label className="form-label">Contraseña</label>
					<input
						type="password"
						className={`form-control ${passwordTouched ? (passwordValido ? "is-valid" : "is-invalid") : ""}`}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						onBlur={() => setPasswordTouched(true)}
					/>
					<div className="invalid-feedback">8-12 caracteres, al menos una letra y un número.</div>
				</div>

				{error && <div className="alert alert-danger">{error}</div>}
				{success && <div className="alert alert-success">Registro completado.</div>}

				<button type="submit" className="btn btn-primary">Registrarse</button>
			</form>
		</div>
	);
}

export default Registro;
