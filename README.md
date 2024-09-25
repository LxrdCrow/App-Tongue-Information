# App Tongue Information 

## Descrizione

Il progetto 'Tongue Information' si basa su un sistema di API RESTful che permette di popolare un database con informazioni su post, utenti e interazioni. È progettato per fornire contenuti rapidi e accessibili da smartphone e consente la profilazione degli utenti e delle loro interazioni.

### Funzionalità principali:
- Inserimento, modifica e cancellazione di post.
- Gestione degli utenti con nickname, età e città.
- Registrazione e visualizzazione delle interazioni (like/commenti).
- Filtraggio dei post per data e delle interazioni per città e data.

## Tecnologie
- **Node.js**
- **MySQL**
- **Express**

## Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/LxrdCrow/App-Tongue-Information.git
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Crea un file `.env` e configura le credenziali del database:
   ```env
   DB_HOST=localhost
   DB_USER=tuo_utente
   DB_PASSWORD=la_tua_password
   DB_NAME=nome_database
   ```

4. Esegui le migrazioni del database:
   ```bash
   mysql -u tuo_utente -p < migrations.sql
   ```

5. Avvia il server:
   ```bash
   npm start
   ```

## API Endpoints

### Post
- **POST** `/api/post` - Crea un nuovo post.
- **PUT** `/api/post/:id` - Modifica un post esistente.
- **DELETE** `/api/post/:id` - Elimina un post.

### Utenti
- **POST** `/api/user` - Crea un nuovo utente.
- **PUT** `/api/user/:id` - Modifica un utente.
- **DELETE** `/api/user/:id` - Elimina un utente.

### Interazioni
- **POST** `/api/interaction` - Registra un'interazione.
- **GET** `/api/interaction` - Filtra le interazioni per città e data.





## Licenza

Questo progetto è distribuito sotto licenza Apache 2.0. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.
```

