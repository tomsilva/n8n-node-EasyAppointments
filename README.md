# N8N Node para Easy!Appointments

Este nodo permite integrar Easy!Appointments con N8N, permitiendo la gestión completa de citas, clientes, proveedores y servicios.

## Características

- Gestión completa de citas (appointments)
- Gestión de clientes
- Gestión de proveedores
- Gestión de servicios
- Gestión de categorías de servicios
- Gestión de disponibilidad
- Gestión de indisponibilidad

## Operaciones

Para cada recurso, el nodo soporta las siguientes operaciones:

- Create (Crear)
- Delete (Eliminar)
- Get (Obtener)
- GetAll (Obtener todos)
- Update (Actualizar)

## Credenciales

Para usar este nodo, necesitas configurar las siguientes credenciales:

- API URL: URL de tu instancia de Easy!Appointments (ejemplo: https://demo.easyappointments.org/index.php/api/v1/)
- Autenticación: 
  - Bearer Token: Token de API
  - Basic Auth: Usuario y contraseña

## Instalación

1. Clona este repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Compila el código:
   ```bash
   npm run build
   ```
4. Copia la carpeta `dist` a tu instalación de N8N
5. Reinicia N8N

## Uso

1. En N8N, agrega el nodo Easy!Appointments a tu flujo
2. Configura las credenciales
3. Selecciona el recurso y la operación que deseas realizar
4. Configura los parámetros necesarios según la operación seleccionada

## Ejemplos

### Crear una cita
```json
{
  "start": "2024-01-01 10:00:00",
  "end": "2024-01-01 11:00:00",
  "location": "Oficina Principal",
  "notes": "Cita de prueba",
  "customerId": 1,
  "providerId": 1,
  "serviceId": 1
}
```

### Obtener todos los clientes
```json
{
  "page": 1,
  "length": 10
}
```

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. 