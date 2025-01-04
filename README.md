

# npm-ripple-wave-bg

A **lightweight, customizable ripple background** component for React applications. Create beautiful **interactive water ripple effects** dynamically.

---

## 📦 Installation

Install the package via NPM:

```sh
npm install npm-ripple-wave-bg
```

---

## 🛠 Usage

Import and use the `RippleBackground` component in your React project:

### **Basic Example**

```jsx
import React from 'react'
import RippleBackground from 'npm-ripple-wave-bg'

const App = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e2f',
        overflow: 'hidden',
      }}
    >
      {/* The ripple background */}
      <RippleBackground />
      <div
        style={{
          textAlign: 'center',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          background: 'rgba(0, 0, 0, 0.3)',
          padding: '20px 40px',
          borderRadius: '12px',
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <h1>Welcome to the Ripple Effect</h1>
        <p>Experience smooth and interactive ripples in the background.</p>
      </div>
    </div>
  )
}

export default App
```

---

## 🎨 Customization

The `RippleBackground` component supports **several props** for customization:

| Prop Name         | Type   | Default Value                | Description                      |
| ----------------- | ------ | ---------------------------- | -------------------------------- |
| `numWaves`        | number | `4`                          | Number of background wave layers |
| `rippleSize`      | number | `1.5`                        | Controls the size of each ripple |
| `backgroundColor` | string | `'rgba(0, 0, 0, 0.1)'`       | Sets the background color        |
| `waveColor`       | string | `'rgba(136, 172, 224, 0.3)'` | Color of the waves               |
| `zIndex`          | number | `0`                          | Z-index of the ripple background |
| `waveSpeed`       | number | `800`                        | Speed of the wave animations     |

---

## 📌 **Why Use This Package?**

- **Minimalistic:** No external CSS, easy to integrate
- **Highly customizable:** Modify colors, speeds, sizes, and more
- **Smooth performance:** Optimized for smooth animations
- **Lightweight:** No heavy dependencies

---

## 🛠 **Development & Contribution**

If you’d like to contribute:

1. Clone the repo:
   ```sh
   git clone https://github.com/your-username/npm-ripple-wave-bg.git
   ```
2. Navigate to the project:
   ```sh
   cd npm-ripple-wave-bg
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the project locally:
   ```sh
   npm start
   ```

---

## 📄 **License**

ISC License © 2025 Amina Khan

---

## ⭐ **Support & Feedback**

If you like this package, give it a ⭐ on GitHub!  
For issues, report them [here](https://github.com/AminaK2724/npm-ripple-wave-bg/issues).

For any inquiries or feedback, please reach out to:

**Amina Khan**  
aminak2724@gmail.com | [GitHub](https://github.com/AminaK2724)

Enjoy smooth and interactive ripples! 🌊🚀
