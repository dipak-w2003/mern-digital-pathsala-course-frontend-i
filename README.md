## 📦 Axios Setup in React
🔍 What is Axios?
Axios is a promise-based HTTP client used to make GET, POST, PUT, DELETE requests from a frontend (like React) to a backend (like Express API).

🚀 Installation
```bash
npm install axios
```

📄 Basic Usage
```js
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      {data.map(book => (
        <div key={book.id}>{book.name} - ${book.price}</div>
      ))}
    </div>
  );
}

export default App;
```

✍️ POST Example
```js
axios.post('http://localhost:5000/api/books', {
  name: 'New Book',
  price: 300
});
```
### 📌 Tips
- Axios automatically parses JSON.
You can set a base URL for cleaner code using axios.create().

```js
const api = axios.create({baseURL: 'http://localhost:5000/api'});
api.get('/books').then(...);
```gi