const express = require('express');
const cors = require('cors');
const oficinaRoutes = require('./routes/oficinas.routes');
const empleadoRoutes = require('./routes/empleados.routes');
const clienteRoutes = require('./routes/clientes.routes');
const pagosRoutes = require('./routes/pagos.routes');
const ordenesRoutes = require('./routes/ordenes.routes');
const lineasProductosRoutes = require('./routes/lineasproductos.routes');
const productosRoutes = require('./routes/productos.routes');
const detallesOrdenesRoutes = require('./routes/detallesordenes.routes');

require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Permite recibir datos en formato JSON 

// --- RUTAS DE LA API ---

app.use('/api/oficinas', oficinaRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/pagos', pagosRoutes);
app.use('/api/ordenes', ordenesRoutes);
app.use('/api/lineas-productos', lineasProductosRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/detalles-ordenes', detallesOrdenesRoutes);

// --- INICIAR SERVIDOR ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});