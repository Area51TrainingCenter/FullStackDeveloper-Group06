import jwt = require("jwt-simple")
import moment = require("moment")
import randToken = require("rand-token")

const crearAccessToken = (_id: String) => {
	const tiempoVidaTokens = +process.env.TIEMPO_VIDA_TOKENS

	const payload = {
		_id,
		iat: moment().unix(),
		exp: moment().add(tiempoVidaTokens, "seconds").unix()
	}

	const accessToken = jwt.encode(payload, process.env.PALABRA_SECRETA_TOKENS)

	return accessToken
}

const crearRefreshToken = () => {
	const refreshToken = randToken.uid(256)

	return refreshToken
}

const validarAccessToken = (accessToken: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(accessToken, process.env.PALABRA_SECRETA_TOKENS)

			resolve(payload)
		} catch (error) {
			if (error.message.toLowerCase() == "token expired") {
				reject({
					estado: 401,
					message: "El token ha expirado"
				})
			} else {
				reject({
					estado: 501,
					message: "El token es inválido"
				})
			}
		}
	})
}

export { crearAccessToken, crearRefreshToken, validarAccessToken }