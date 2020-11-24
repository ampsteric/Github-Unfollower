import React from 'react'


const styles = {
  card:{
    'max-width': '18rem'
  }
}
export default function Cards() {
    return (
        <div>
            <div className="card text-white bg-primary mb-3" style={styles.card} >
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card text-white bg-secondary mb-3" style={styles.card}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Secondary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card text-white bg-success mb-3" style={styles.card}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Success card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card text-white bg-danger mb-3" style={styles.card}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Danger card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card text-white bg-warning mb-3" style={styles.card}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Warning card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card text-white bg-info mb-3" style={styles.card}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Info card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card bg-light mb-3" style={styles.card}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Light card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card text-white bg-dark mb-3" style={styles.card}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Dark card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
    )
}
