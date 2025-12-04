# Callbacks-Async-await-Promises
# 🧠 Async JavaScript: Callbacks, Promises & Async/Await

JavaScript is **non-blocking** by default, which means it doesn’t like to wait around. To handle **asynchronous operations** (like API calls, file reads, timers), we rely on three main patterns:

* ✅ **Callbacks** (old school)
* ✅ **Promises** (modern)
* ✅ **Async/Await** (cleanest & most readable)

Let’s break them down.

---

## 1️⃣ Callbacks (The OG Approach)

A **callback** is just a function passed into another function to run later.

### Example

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

### ✅ Pros

* Simple concept
* Works everywhere

### ❌ Cons

* Leads to **callback hell**
* Hard to debug and maintain

```js
doThis(() => {
  doThat(() => {
    doAnotherThing(() => {
      // welcome to the jungle
    });
  });
});
```

---

## 2️⃣ Promises (The Grown-Up Version)

A **Promise** represents a value that may exist **now, later, or never**.

### Example

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

### ✅ Pros

* Avoids callback hell
* Better error handling
* Chainable with `.then()`

### ❌ Cons

* Can still get messy with long chains

---

## 3️⃣ Async / Await (The Clean & Classy Way)

**Async/Await** is just **Promises with cleaner syntax**. Reads like normal code. Feels illegal how nice it is.

### Example

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

getData();
```

### ✅ Pros

* Super readable
* Looks synchronous
* Easy error handling with `try/catch`

### ❌ Cons

* Requires a basic understanding of Promises

---

## ⚔️ Quick Comparison

| Feature        | Callbacks | Promises  | Async/Await  |
| -------------- | --------- | --------- | ------------ |
| Readability    | 😵‍💫 Low | 🙂 Medium | 😍 High      |
| Error Handling | ❌ Messy   | ✅ Good    | ✅✅ Best      |
| Nesting Risk   | 🚨 High   | ⚠️ Medium | ✅ Low        |
| Modern Usage   | ❌ Legacy  | ✅ Yes     | ✅✅ Preferred |

---

## 🏁 Final Verdict

* 🪦 **Callbacks** → Legacy but still out there
* 🧱 **Promises** → Solid foundation
* 🚀 **Async/Await** → Best for real-world apps today

> Classic wisdom meets modern elegance: Promises built the road — async/await removed the potholes.

---
