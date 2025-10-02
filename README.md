# Moment 2 - Objektorienterad programmering

Syftet med detta projekt är att träna på objektorienterad programmering (OOP) i TypeScript genom att bygga en enkel “att-göra”-applikation. 
I projektet används ett interface för att definiera strukturen för varje todo-objekt, samt en klass som hanterar logiken för att lägga till,
markera som klar, ta bort och spara uppgifter.

---

## interface.ts
- Innehåller ett interface **Todo** som beskriver hur varje uppgift ska se ut.
- Ett Todo-objekt har tre egenskaper:
  - **task (string):** själva uppgiften.
  - **priority (number):** ett heltal mellan 1–3, där 1 är högst prioritet.
  - **completed (boolean):** visar om uppgiften är färdig eller ej.

Detta säkerställer att alla todo-objekt får samma struktur.

---

## todo.ts
- Här finns klassen **Todolist**, som innehåller all logik för applikationen.
- Klassen använder en privat array todos: Todo[] för att lagra uppgifter.
- Metoder i klassen:
  - getTodos() - returnerar hela listan.
  - addTodo(task: string, priority: number) - lägger till en ny uppgift. Validerar att fälten är korrekta, annars returneras false.
  - markTodoCompleted(index: number) - markerar en uppgift som klar baserat på dess index i listan.
  - removeTodo(index: number) - tar bort en uppgift från listan.
  - saveToLocalStorage() - sparar todos-arrayen i webbläsarens LocalStorage.
  - loadFromLocalStorage() - hämtar todos från LocalStorage när sidan laddas.
- En constructor används för att ladda befintliga todos från LocalStorage när klassen initieras.

---

## main.ts
- Kopplar samman klassen med DOM:en.
- Funktionalitet som finns här:
  - Hämtar referenser till HTML-element (form, input-fält, ul-lista).
  - renderTodos() - ansvarar för att rita ut listan på sidan. Den skapar <li>-element för varje todo och lägger till knappar:
    - **Markera som klar** – uppdaterar status via markTodoCompleted().
    - **Ta bort** – tar bort uppgiften via removeTodo().
  - Event listener på formuläret → anropar addTodo() när användaren skickar in en ny uppgift. Vid felaktig inmatning visas ett felmeddelande.
  - Sparar till LocalStorage efter varje förändring.

---

## style.css
- Innehåller layout och design för sidan.
- Formulär och lista är centrerade på sidan.
- Flexbox används för att placera element snyggt.
- Responsiv design genom media queries så att appen fungerar bra på både dator och mobil.
