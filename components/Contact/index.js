import React from 'react';
import styles from './styles.module.css';

export default function Contact() {
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');

  const submitForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = {name, email, phone, message};

    fetch(form.action, {
      method: form.method,
      body: JSON.stringify(data),
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    }).then(res => {
      if (res.ok) {
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    });
  }

  return (
      <form
        onSubmit={submitForm}
        action="https://formspree.io/f/meqpbezb"
        method="POST"
        className={styles.form}
      >
        <div className={styles.fieldRow}>
          <label>Nom:</label>
          <input type="name" name="name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className={styles.fieldRow}>
          <label>Correu electrònic:</label>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className={styles.fieldRow}>
          <label>Telèfon:</label>
          <input type="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div className={styles.fieldRow}>
          <label>Missatge:</label>
          <textarea type="text" name="message" value={message} required onChange={e => setMessage(e.target.value)} />
        </div>

        {status === "SUCCESS" ? <p>Gràcies! Hem rebut el vostre missatge, us contactarem aviat :)</p> : <button>Envia</button>}
        {status === "ERROR" && <p>Ups! Hi ha hagut un error.</p>}
      </form>
  )
}
