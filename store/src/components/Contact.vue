<template>
  <div class="contact__container">
    <div class="contact__box">
      <div class="contact__box--item">
        <h3>Contact</h3>
        <p>Questions? Go ahead.</p>
        <form action="#" class="contact__box--form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <input type="text" placeholder="Messange" required />
          <input type="submit" class="contact__box--button" value="Send" />
        </form>
      </div>
      <div class="contact__box--item">
        <h3>About</h3>
        <a href="#">About us</a>
        <a href="#">We're hiring</a>
        <a href="#">Support</a>
        <a href="#">Find store</a>
        <a href="#">Shipment</a>
        <a href="#">Payment</a>
        <a href="#">Gift card</a>
        <a href="#">Return</a>
        <a href="#">Help</a>
      </div>
      <div class="contact__box--item">
        <h3>Store</h3>
        <div class="contact__store--item">
          <i class="fas fa-map-marker-alt"></i>
          <p>Company Name</p>
        </div>
        <div class="contact__store--item">
          <i class="fas fa-phone-alt"></i>
          <p>0044123123</p>
        </div>
        <div class="contact__store--item">
          <i class="fa fa-fw fa-envelope"></i>
          <p>ex@mail.com</p>
        </div>
        <h3>We accept</h3>
        <div class="contact__store--item">
          <i class="fa fa-fw fa-cc-amex"></i>
          <p>Amex</p>
        </div>
        <div class="contact__store--item">
          <i class="fa fa-fw fa-credit-card"></i>
          <p>Credit Card</p>
        </div>
        <div class="contact__social--item">
          <i class="fa fa-facebook-official"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-snapchat"></i>
          <i class="fa fa-pinterest-p"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-linkedin"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
p {
  font-size: 12px;
}
h3 {
  font-size: 20px;
  font-weight: normal;
  line-height: 1;
  margin: 10px 0;
}
.contact__container {
  padding: 64px 16px;
  background-color: #f1f1f1;
  width: auto;
  color: #000;
}
.contact__box--item:nth-child(3) {
  text-align: start;
}
.contact__box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
}
a {
  justify-content: center;
  text-decoration: underline;
  margin-bottom: 14px;
  font-size: 12px;
}
.contact__box--form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
input {
  width: auto;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 8px;
}
.contact__box--button {
  background-color: black;
  color: white;
  cursor: pointer;
}
.contact__box--button:hover {
  background-color: gray;
  color: #000;
}
.contact__store--item {
  display: flex;
  align-items: center;
  font-size: 12px;
}
i {
  margin-right: 5px;
}
.contact__store--item {
  line-height: 1;
}
.contact__social--item {
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer;
}
.contact__social--item i:hover {
  color: gray;
}
</style>
