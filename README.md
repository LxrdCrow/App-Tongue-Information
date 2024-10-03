# App Tongue Information

## Descrizione

Il progetto 'Tongue Information' è un sistema di API RESTful che consente di popolare un database con post, utenti e interazioni. Il progetto è ideato per processare grandi quantità di dati in modo efficiente, con controlli di sicurezza aggiuntivi e ottimizzazioni per le query.

### Funzionalità principali:
- Inserimento, modifica e cancellazione di post.
- Gestione degli utenti con nickname, età e città.
- Registrazione delle interazioni (like/commenti).
- Filtraggio dei post per data e delle interazioni per città e data.
- Rate Limiting per prevenire abusi sulle API.
- Paginazione per una gestione ottimizzata dei dati restituiti.
- Validazione degli input e verifica dell'esistenza di utenti.

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
- **GET** `/api/post` - Restituisce una lista di post con paginazione.

### Utenti
- **POST** `/api/user` - Crea un nuovo utente.
- **PUT** `/api/user/:id` - Modifica un utente.
- **DELETE** `/api/user/:id` - Elimina un utente.
- **GET** `/api/user` - Restituisce una lista di utenti con paginazione.

### Interazioni
- **POST** `/api/interaction` - Registra un'interazione.
- **GET** `/api/interaction` - Filtra le interazioni per città e data con paginazione.

## Sicurezza
- **Rate Limiting**: Implementato per limitare il numero di richieste per prevenire abusi.
  
## Ottimizzazione del Database
- **Indici**: Aggiunti su campi chiave per ottimizzare la velocità delle query.

## Licenza

Questo progetto è distribuito sotto licenza Apache 2.0. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.
```


