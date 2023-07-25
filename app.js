// Importamos el modulo
const sign = require('jwt-encode');
// importamos la libreria de jwt-decode
const jwt_decode = require('jwt-decode');

// Definimos la clave secreta para la firma Signature
const secret = 'mi_clave_secreta';
// Construcción del payload
const data = {
    // sub: 'pedroperez@test.com', Objeto o usuario que emite el JWT
    "iss": "midominio.com",
    "exp": 1540839345,
    "name": "Pedro Perez",
    "email": "pedroperez@midominio.com",
    "iat": 1516239022
    };
console.log(data);

// Devuelve un string firmado, pasando como argumento el Payload y la Signature
const jwt = sign(data, secret);
console.log(jwt);

// Decodificando el token
const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtaWRvbWluaW8uY29tIiwiZXhwIjoxNTQwODM5MzQ1LCJuYW1lIjoiUGVkcm8gUGVyZXoiLCJlbWFpbCI6InBlZHJvcGVyZXpAbWlkb21pbmlvLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.PlNtYcltXHBSR2N7PgOxCbBOG2CN0ghhmxEmkKuKSPc"

const decoded = jwt_decode(token);
console.log("Decodificado");
console.log(decoded);

const decodedHeader = jwt_decode(token, {
    header: true,
});
    console.log(decodedHeader);