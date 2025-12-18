# 📦 Proyecto React

Esta aplicación de React ha sido desarrollada para el requerimiento técnico detallado en el repositorio:
🔗 **[Prueba Técnica - Requerimiento](https://github.com/miguelmendozabluex/prueba-tecnica)**

---

## 🛠️ Requisitos Previos

Para asegurar la estabilidad del proyecto, se requiere la versión Node.js **LTS** 22 o superior

- **Node.js**
- **npm**

### Verifica tu entorno actual:

```bash
node -v
npm -v
```

## 🚀 Instalación de Node.js (en caso de no existir)

### Mac o Linux

Descargar e instalar nvm:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Cargar NVM :

```
\. "$HOME/.nvm/nvm.sh"
```

Descargar e instalar Node.js:

```
nvm install 24
```

Verificar la version de Node.js:

```
node -v # Debera imprimir "v24.12.0".
```

Verificar la version de npm:

```
npm -v # Debera imprimir "11.6.2".
```

#### Windows

Descargar e instalar Chocolatey:

```
powershell -c "irm https://community.chocolatey.org/install.ps1|iex"
```

Descargar e instalar Node.js:

```
choco install nodejs --version="24.12.0"
```

Verificar la version de Node.js:

```
node -v # Debera imprimir "v24.12.0".
```

Verificar la version de npm:

```
npm -v # Debera imprimir "11.6.2".
```

#### Linux

## 🖥️ Clonar Repositorio

- Abre tu terminal y ejecuta lo siguiente para clonar el repositorio

```
git clone https://github.com/eniwez/prueba-frontend.git
```

- Ingresa a la carpeta desde la terminal ya abierta donde clonaste el codigo

```
cd prueba-frontend
```

- Instala las dependencias:

```
npm install
```

### 💾 Variables de entorno

crea un archivo .env en la raiz del archivo y colaco el valor de la siguientes variables

```
VITE_API_BASE_URL=XXXXXXXXXX
```

### ▶️ Levantar el proyecto en modo desarrollo

Ejecuta lo siguiente para levantar el proyecto en modo desarrollo

```
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

## 📁 Estructura del proyecto

```
src/
├── api/            # Lógica de comunicación con APIs
├── assets/         # Recursos estáticos
├── components/     # Componentes reutilizables de UI
├── config/         # Configuración global (constantes)
├── context/        # React Contexts para manejo de estado global 
├── hooks/          # Custom Hooks reutilizables
├── layouts/        # Layouts de la aplicación 
├── pages/          # Páginas principales (vistas asociadas a rutas)
├── utils/          # Funciones utilitarias
├── index.css       # Estilos globales de la aplicación
└── main.tsx        # Punto de entrada principal de la app y enrutador
```


