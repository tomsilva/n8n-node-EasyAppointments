# N8N Node for Easy!Appointments

Este nodo permite interactuar con la API de Easy!Appointments desde N8N.

## Características

- Gestión completa de citas (appointments)
- Gestión de clientes (customers)
- Gestión de proveedores (providers)
- Gestión de servicios (services)
- Gestión de categorías de servicios (service categories)
- Gestión de disponibilidad (availability)
- Gestión de indisponibilidad (unavailability)

## Operaciones

Para cada recurso, el nodo permite realizar las siguientes operaciones:

- Create: Crear un nuevo recurso
- Delete: Eliminar un recurso existente
- Get: Obtener un recurso específico
- GetAll: Obtener todos los recursos
- Update: Actualizar un recurso existente

## Credenciales

El nodo requiere las siguientes credenciales:

- API URL: La URL de tu instancia de Easy!Appointments
- Authentication: Método de autenticación (Bearer Token o Basic Auth)
- API Key: Si usas Bearer Token
- Username y Password: Si usas Basic Auth

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
4. Copia la carpeta `dist` a tu instalación de N8N en la carpeta `custom/nodes`

## Uso

1. En N8N, busca el nodo "Easy!Appointments"
2. Configura las credenciales
3. Selecciona el recurso y la operación que deseas realizar
4. Configura los campos adicionales según sea necesario

## Ejemplos

### Crear una cita

```json
{
  "resource": "appointment",
  "operation": "create",
  "additionalFields": {
    "start": "2024-04-01T10:00:00",
    "end": "2024-04-01T11:00:00",
    "customerId": 1,
    "providerId": 1,
    "serviceId": 1,
    "location": "Oficina Principal",
    "notes": "Primera consulta"
  }
}
```

### Obtener todos los clientes

```json
{
  "resource": "customer",
  "operation": "getAll"
}
```

## Contribuir

Las contribuciones son bienvenidas. Por favor, asegúrate de:

1. Hacer fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. 